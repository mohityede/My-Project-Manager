package org.themohit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.themohit.config.ConfigConstants;
import org.themohit.model.Chat;
import org.themohit.model.Invitation;
import org.themohit.model.Project;
import org.themohit.model.User;
import org.themohit.request.InvitationRequest;
import org.themohit.response.MassageResponse;
import org.themohit.service.ProjectService;
import org.themohit.service.UserService;
import org.themohit.service.invitation.InvitationService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/project")
public class ProjectController {
    @Autowired
    private ProjectService projectService;

    @Autowired
    private UserService userService;

    @Autowired
    private InvitationService invitationService;

    @GetMapping("")
    public ResponseEntity<List<Project>> getMyProjects(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String tags,
            @RequestHeader(ConfigConstants.JWT_HEADER) String jwt
    ) throws Exception {
        User user= userService.getUserProfileByJwt(jwt);
        List<Project> projects=projectService.getProjectByUser(user,category,tags);
        return new ResponseEntity<>(projects,HttpStatus.OK);
    }

    @GetMapping("/{projectId}")
    public ResponseEntity<Project> getProjectById(
            @PathVariable long projectId,
            @RequestHeader(ConfigConstants.JWT_HEADER) String jwt
    ) throws Exception {
        User user= userService.getUserProfileByJwt(jwt);
        Project project=projectService.getProjectById(projectId);
        return new ResponseEntity<>(project,HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Project> createProject(
            @RequestBody Project project,
            @RequestHeader(ConfigConstants.JWT_HEADER) String jwt
    ) throws Exception {
        User user= userService.getUserProfileByJwt(jwt);
        Project newProject=projectService.createProject(project,user);
        return new ResponseEntity<>(newProject,HttpStatus.CREATED);
    }

    @PatchMapping("/{projectId}")
    public ResponseEntity<Project> updateProject(
            @PathVariable long projectId,
            @RequestBody Project project,
            @RequestHeader(ConfigConstants.JWT_HEADER) String jwt
    ) throws Exception {
        User user= userService.getUserProfileByJwt(jwt);
        Project updatedProject=projectService.updateProject(project,projectId);
        return new ResponseEntity<>(updatedProject,HttpStatus.OK);
    }

    @DeleteMapping("/{projectId}")
    public ResponseEntity<MassageResponse> deleteProject(
            @PathVariable long projectId,
            @RequestHeader(ConfigConstants.JWT_HEADER) String jwt
    ) throws Exception {
        User user= userService.getUserProfileByJwt(jwt);
        projectService.deleteProject(projectId,user.getId());
        MassageResponse res=new MassageResponse("Project Deleted successfully!");
        return new ResponseEntity<>(res,HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Project>> searchProject(
            @RequestParam(required = false) String keyword,
            @RequestHeader(ConfigConstants.JWT_HEADER) String jwt
    ) throws Exception {
        User user= userService.getUserProfileByJwt(jwt);
        List<Project> projects=projectService.search(keyword,user);
        return new ResponseEntity<>(projects,HttpStatus.OK);
    }

    @GetMapping("/{projectId}/chat")
    public ResponseEntity<Chat> getProjectChat(
            @PathVariable long projectId,
            @RequestHeader(ConfigConstants.JWT_HEADER) String jwt
    ) throws Exception {
        User user= userService.getUserProfileByJwt(jwt);
        Chat chat=projectService.getChat(projectId);
        return new ResponseEntity<>(chat,HttpStatus.OK);
    }

    @PostMapping("/invite")
    public ResponseEntity<MassageResponse> inviteProject(
            @RequestBody InvitationRequest inviteReq,
            @RequestHeader(ConfigConstants.JWT_HEADER) String jwt
    ) throws Exception {
        User user= userService.getUserProfileByJwt(jwt);
        invitationService.sendInvitation(inviteReq.getEmail(),inviteReq.getProjectId());
        MassageResponse res=new MassageResponse("User Invitation send!");
        return new ResponseEntity<>(res,HttpStatus.OK);
    }

    @GetMapping("/invite/accept")
    public ResponseEntity<Invitation> acceptInvitation(
            @RequestParam String token,
            @RequestHeader(ConfigConstants.JWT_HEADER) String jwt
    ) throws Exception {
        User user= userService.getUserProfileByJwt(jwt);
        Invitation invitation=invitationService.acceptInvitation(token,user.getId());
        projectService.addUser(invitation.getProjectId(),user.getId());
        return new ResponseEntity<>(invitation,HttpStatus.ACCEPTED);
    }
}
