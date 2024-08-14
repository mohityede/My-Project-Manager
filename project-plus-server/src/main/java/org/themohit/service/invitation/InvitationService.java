package org.themohit.service.invitation;

import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.themohit.exception.InvitationException;
import org.themohit.model.Invitation;
import org.themohit.repository.InvitationRepo;

import java.util.UUID;

@Service
public class InvitationService {
    @Autowired
    private InvitationRepo invitationRepo;

    @Autowired
    private EmailService emailService;

    @Value("${backend.app.url}")
    private String serverUrl;

    public void sendInvitation(String email,long projectId) throws MessagingException {
        String invitationToken= UUID.randomUUID().toString();

        Invitation invitation=new Invitation();
        invitation.setEmail(email);
        invitation.setProjectId(projectId);
        invitation.setToken(invitationToken);

        invitationRepo.save(invitation);

        String invitationLink=serverUrl+"/api/v1/project/invite/accept?token="+invitationToken;

        emailService.sendEmailWithToken(email,invitationLink);
    }

    public Invitation acceptInvitation(String token, long userId) throws Exception {
        Invitation invitation=invitationRepo.findByToken(token);
        if(invitation==null) throw new InvitationException("Invalid Invitation");

        return invitation;
    }

    public String getTokenByUserMail(String userEmail){
        Invitation invitation=invitationRepo.findByEmail(userEmail);
        return invitation.getToken();
    }

    void deleteToken(String token){
        Invitation invitation=invitationRepo.findByToken(token);
        invitationRepo.delete(invitation);
    }
}
