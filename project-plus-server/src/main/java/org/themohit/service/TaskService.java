package org.themohit.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.themohit.exception.TaskException;
import org.themohit.model.Project;
import org.themohit.model.Task;
import org.themohit.model.User;
import org.themohit.repository.TaskRepo;
import org.themohit.request.TaskRequest;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    @Autowired
    private TaskRepo taskRepo;

    @Autowired
    private ProjectService projectService;

    @Autowired
    private UserService userService;

    public Task getTaskById(long taskId){
        Optional<Task> optionalTask=taskRepo.findById(taskId);
        if(optionalTask.isEmpty()) throw new TaskException("No Task exist with given id");

        return optionalTask.get();
    }

    public List<Task> getTaskByProjectId(long projectId){
        return taskRepo.findByProjectId(projectId);
    }

    public Task createTask(TaskRequest taskReq, User user){
        Project project=projectService.getProjectById(taskReq.getForProjectId());

        List<User> projectMembers=project.getMembers();
        User projectOwner=project.getOwner();

        if(!projectMembers.contains(user) && projectOwner.getId()!=user.getId())
            throw new TaskException("You are not authorized to create task in given project!");

        Task newTask=new Task();
        newTask.setTitle(taskReq.getTitle());
        newTask.setDescription(taskReq.getDescription());
        newTask.setPriority(taskReq.getPriority());
        newTask.setForProjectId(taskReq.getForProjectId());
        newTask.setStatus(taskReq.getStatus());
        newTask.setProject(project);

        return taskRepo.save(newTask);
    }

    public void deleteTask(long taskId,User user){
        Optional<Task> optionalTask=taskRepo.findById(taskId);
        if(optionalTask.isEmpty()) throw new TaskException("No Task exist with given id");

        Project project=optionalTask.get().getProject();
        List<User> projectMembers=project.getMembers();
        User projectOwner=project.getOwner();

        if(!projectMembers.contains(user) && projectOwner.getId()!=user.getId())
            throw new TaskException("You are not authorized to delete task!");

        taskRepo.deleteById(taskId);
    }

    public Task assignTaskToUser(long taskId,long userId){
        Optional<Task> optionalTask=taskRepo.findById(taskId);
        if(optionalTask.isEmpty()) throw new TaskException("No Task exist with given id");

        Task task=optionalTask.get();
        User user=userService.getUserById(userId);
        task.setAssignee(user);

        return taskRepo.save(task);
    }

    public Task updateTaskStatus(long taskId,String status){
        Optional<Task> optionalTask=taskRepo.findById(taskId);
        if(optionalTask.isEmpty()) throw new TaskException("No Task exist with given id");

        Task task=optionalTask.get();
        task.setStatus(status);

        return taskRepo.save(task);
    }
}
