package org.themohit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.themohit.model.User;

@Repository
public interface UserRepo extends JpaRepository<User,Long> {
    User findByEmail(String email);
}
