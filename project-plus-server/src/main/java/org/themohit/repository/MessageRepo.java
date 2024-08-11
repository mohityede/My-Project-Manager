package org.themohit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.themohit.model.Message;

@Repository
public interface MessageRepo extends JpaRepository<Message,Long>{
}
