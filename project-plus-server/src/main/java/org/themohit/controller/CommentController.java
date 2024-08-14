package org.themohit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.themohit.config.ConfigConstants;
import org.themohit.model.Comment;
import org.themohit.model.User;
import org.themohit.request.CommentRequest;
import org.themohit.response.MassageResponse;
import org.themohit.service.CommentService;
import org.themohit.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/comment")
public class CommentController {
    @Autowired
    private CommentService commentService;

    @Autowired
    private UserService userService;

    @PostMapping("")
    public ResponseEntity<Comment> createNewComment(
            @RequestBody CommentRequest req,
            @RequestHeader(ConfigConstants.JWT_HEADER) String jwt
    )throws Exception{
        User user = userService.getUserProfileByJwt(jwt);
        Comment comment= commentService.createComment(req.getTaskId(),user,req.getComment());
        return new ResponseEntity<>(comment, HttpStatus.CREATED);
    }

    @GetMapping("/task/{taskId}")
    public ResponseEntity<List<Comment>> getCommentsByTask(
            @PathVariable long taskId,
            @RequestHeader(ConfigConstants.JWT_HEADER) String jwt
    )throws Exception{
        User user = userService.getUserProfileByJwt(jwt);
        List<Comment> comments= commentService.findCommentByTask(taskId);
        return new ResponseEntity<>(comments, HttpStatus.OK);
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<MassageResponse> deleteComment(
            @PathVariable long commentId,
            @RequestHeader(ConfigConstants.JWT_HEADER) String jwt
    )throws Exception{
        User user = userService.getUserProfileByJwt(jwt);
        commentService.deleteComment(commentId,user);
        MassageResponse res=new MassageResponse("Comment Deleted successfully!");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }
}
