package org.themohit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.themohit.model.Task;

import java.util.List;

@Repository
public interface TaskRepo extends JpaRepository<Task,Long> {
    List<Task> findByProjectId(long projectId);
}
