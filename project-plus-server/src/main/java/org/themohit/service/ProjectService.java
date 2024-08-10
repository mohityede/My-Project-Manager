package org.themohit.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.themohit.exception.ProjectServiceException;
import org.themohit.model.Chat;
import org.themohit.model.Project;
import org.themohit.model.User;
import org.themohit.repository.ProjectRepo;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepo projectRepo;

    @Autowired
    private UserService userService;

    @Autowired
    private ChatService chatService;

    public Project createProject(Project project, User user){
        Project createdProject= new Project();

        createdProject.setOwner(user);
        createdProject.setCategory(project.getCategory());
        createdProject.setName(project.getName());
        createdProject.setDescription(project.getDescription());
        createdProject.setTags(project.getTags());
        createdProject.getMembers().add(user);

        Project savedProject= projectRepo.save(createdProject);

        Chat chat =new Chat();
        chat.setProject(savedProject);

        Chat newChat= chatService.createChat(chat);
        savedProject.setChat(newChat);

        if(savedProject==null) throw new ProjectServiceException("Project not saved! some internal server issue...");
        return project;
    }

    public Project getProjectById(long projectId){
        Optional<Project> optionalProject=projectRepo.findById(projectId);
        if(optionalProject.isEmpty()) throw new ProjectServiceException("No project with given Id");
        return optionalProject.get();
    }

    public List<Project> getProjectByUser(User user,String category,String tag){
        List<Project> projects=projectRepo.findByMembersContainingOrOwner(user,user).get();

        if(category!=null){
            projects=projects.stream().filter(project -> project.getCategory()
                    .equals(category))
                    .collect(Collectors.toList());
        }
        if(tag!=null){
            projects=projects.stream().filter(project -> project.getTags()
                    .contains(tag))
                    .collect(Collectors.toList());
        }
        return projects;
    }

    public Project updateProject(Project updatedProject,long projectId){
        Project project=getProjectById(projectId);

        project.setName(updatedProject.getName());
        project.setDescription(updatedProject.getDescription());
        project.setTags(updatedProject.getTags());

        return projectRepo.save(project);
    }

    public void deleteProject(long projectId,long userId){
        User dbUser= userService.getUserById(userId);
        userService.updateUserProjectSize(dbUser,dbUser.getProjectSize()-1);
        projectRepo.deleteById(projectId);
    }

    public void addUser(long projectId,long userId){
        Project project= getProjectById(projectId);
        User user=userService.getUserById(userId);

        if(!project.getMembers().contains(user)){
            project.getChat().getUsers().add(user);
            project.getMembers().add(user);
        }
        projectRepo.save(project);
    }

    public void removeUser(long projectId,long userId){
        Project project= getProjectById(projectId);
        User user=userService.getUserById(userId);

        if(project.getMembers().contains(user)){
            project.getChat().getUsers().remove(user);
            project.getMembers().remove(user);
        }
        projectRepo.save(project);
    }

    public Chat getChat(long projectId){
        Project project=getProjectById(projectId);
        return project.getChat();
    }

    public List<Project> search(String keyword,User user){
        return projectRepo.findByNameContainingAndMembersContains(keyword,user).get();
    }
}
