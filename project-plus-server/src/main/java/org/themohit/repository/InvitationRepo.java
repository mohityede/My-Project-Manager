package org.themohit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.themohit.model.Invitation;

@Repository
public interface InvitationRepo extends JpaRepository<Invitation,Long> {
    Invitation findByToken(String token);

    Invitation findByEmail(String email);
}
