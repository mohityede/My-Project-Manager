package org.themohit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.themohit.model.Chat;

@Repository
public interface ChatRepo extends JpaRepository<Chat,Long> {
}
