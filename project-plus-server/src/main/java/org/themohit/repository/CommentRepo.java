package org.themohit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.themohit.model.Comment;

import java.util.List;

public interface CommentRepo extends JpaRepository<Comment,Long> {
    List<Comment> findByTaskId(long taskId);
}
