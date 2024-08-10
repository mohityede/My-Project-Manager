package org.themohit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.themohit.model.Project;
import org.themohit.model.User;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProjectRepo extends JpaRepository<Project,Long> {
    Optional<List<Project>> findByNameContainingAndMembersContains(String partialName,User user);

    Optional<List<Project>> findByMembersContainingOrOwner(User user,User owner);
}
