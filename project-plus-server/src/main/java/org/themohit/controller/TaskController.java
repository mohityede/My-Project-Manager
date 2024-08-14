package org.themohit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.themohit.config.ConfigConstants;
import org.themohit.model.Task;
import org.themohit.model.User;
import org.themohit.request.TaskRequest;
import org.themohit.response.MassageResponse;
import org.themohit.service.TaskService;
import org.themohit.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/task")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @Autowired
    private UserService userService;

    @GetMapping("/{taskId}")
    public ResponseEntity<Task> getTaskById(
            @PathVariable long taskId,
            @RequestHeader(ConfigConstants.JWT_HEADER) String jwt
    )throws Exception{
        User user= userService.getUserProfileByJwt(jwt);
        Task task=taskService.getTaskById(taskId);
        return new ResponseEntity<>(task, HttpStatus.OK);
    }

    @GetMapping("/project/{projectId}")
    public ResponseEntity<List<Task>> getTaskByProjectId(
            @PathVariable long projectId,
            @RequestHeader(ConfigConstants.JWT_HEADER) String jwt
    )throws Exception{
        User user= userService.getUserProfileByJwt(jwt);
        List<Task> tasks=taskService.getTaskByProjectId(projectId);
        return new ResponseEntity<>(tasks,HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Task> createNewTask(
            @RequestBody TaskRequest taskReq,
            @RequestHeader(ConfigConstants.JWT_HEADER) String jwt
    )throws Exception{
        User user= userService.getUserProfileByJwt(jwt);
        Task task=taskService.createTask(taskReq,user);
        return new ResponseEntity<>(task,HttpStatus.CREATED);
    }

    @DeleteMapping("/{taskId}")
    public ResponseEntity<MassageResponse> deleteTask(
            @PathVariable long taskId,
            @RequestHeader(ConfigConstants.JWT_HEADER) String jwt
    )throws Exception{
        User user= userService.getUserProfileByJwt(jwt);
        taskService.deleteTask(taskId,user);
        MassageResponse res=new MassageResponse("Task Deleted successfully!");
        return new ResponseEntity<>(res,HttpStatus.OK);
    }

    @PutMapping("/{taskId}/assign")
    public ResponseEntity<Task> assignTaskToUser(
            @PathVariable long taskId,
            @RequestParam long userId,
            @RequestHeader(ConfigConstants.JWT_HEADER) String jwt
    )throws Exception{
        User user= userService.getUserProfileByJwt(jwt);
        Task task= taskService.assignTaskToUser(taskId,userId);
        return new ResponseEntity<>(task,HttpStatus.OK);
    }

    @PutMapping("/{taskId}/status")
    public ResponseEntity<Task> updateTaskStatus(
            @PathVariable long taskId,
            @RequestParam String status,
            @RequestHeader(ConfigConstants.JWT_HEADER) String jwt
    )throws Exception{
        User user= userService.getUserProfileByJwt(jwt);
        Task task= taskService.updateTaskStatus(taskId,status);
        return new ResponseEntity<>(task,HttpStatus.OK);
    }
}
