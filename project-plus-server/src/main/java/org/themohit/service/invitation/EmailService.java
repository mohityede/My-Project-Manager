package org.themohit.service.invitation;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    @Autowired
    private JavaMailSender javaMailSender;

    public void sendEmailWithToken(String userEmail,String link) throws MessagingException {
        MimeMessage mimeMessage=javaMailSender.createMimeMessage();
        MimeMessageHelper messageHelper=new MimeMessageHelper(mimeMessage,"utf-8");

        String subject="Join Project+ team Invitation";
        String text="Click on the link to join project team: "+link;

        messageHelper.setSubject(subject);
        messageHelper.setText(text,true);
        messageHelper.setTo(userEmail);

        try {
            javaMailSender.send(mimeMessage);
        }catch (MailException ex){
            throw new MessagingException("Failed to send mail");
        }
    }
}
