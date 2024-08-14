package org.themohit.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.themohit.exception.CommentException;
import org.themohit.model.Comment;
import org.themohit.model.Task;
import org.themohit.model.User;
import org.themohit.repository.CommentRepo;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class CommentService {
    @Autowired
    private TaskService taskService;

    @Autowired
    private CommentRepo commentRepo;

    public Comment createComment(long taskId, User user, String comment){
        Comment newComment= new Comment();

        newComment.setContent(comment);
        newComment.setCreatedAt(LocalDateTime.now());
        newComment.setUser(user);

        Task task=taskService.getTaskById(taskId);
        newComment.setTask(task);
        Comment savedComment= commentRepo.save(newComment);
        taskService.addComment(savedComment,task);

        return savedComment;
    }

    public void deleteComment(long commentId,User user){
        Optional<Comment> optionalComment= commentRepo.findById(commentId);
        if(optionalComment.isEmpty()) throw new CommentException("Invalid comment id");

        Comment comment=optionalComment.get();

        if(comment.getUser().equals(user)) commentRepo.deleteById(commentId);
        else throw new CommentException("You are not authorized to delete these comment");
    }

    public List<Comment> findCommentByTask(long taskId){
        return commentRepo.findByTaskId(taskId);
    }
}
