package org.themohit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.themohit.config.ConfigConstants;
import org.themohit.model.Message;
import org.themohit.model.User;
import org.themohit.request.MessageRequest;
import org.themohit.service.MessageService;
import org.themohit.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/message")
public class MessageController {
    @Autowired
    private MessageService messageService;

    @Autowired
    private UserService userService;

    @PostMapping("")
    public ResponseEntity<Message> sendMessage(
            @RequestBody MessageRequest req,
            @RequestHeader(ConfigConstants.JWT_HEADER) String jwt
    )throws Exception{
        User user=userService.getUserProfileByJwt(jwt);
        Message message= messageService.sendMessage(user,req.getChatId(),req.getContent());
        return new ResponseEntity<>(message, HttpStatus.CREATED);
    }

    @GetMapping("/project/{projectId}")
    public ResponseEntity<List<Message>> getAllMessageByProjectId(
            @PathVariable long projectId,
            @RequestHeader(ConfigConstants.JWT_HEADER) String jwt
    )throws Exception {
        User user = userService.getUserProfileByJwt(jwt);
        List<Message> messages=messageService.getMassagesByProjectId(projectId);
        return new ResponseEntity<>(messages,HttpStatus.OK);
    }
}
