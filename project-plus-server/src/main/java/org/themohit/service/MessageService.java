package org.themohit.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.themohit.model.Chat;
import org.themohit.model.Message;
import org.themohit.model.User;
import org.themohit.repository.MessageRepo;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class MessageService {
    @Autowired
    private ChatService chatService;

    @Autowired
    private MessageRepo messageRepo;

    @Autowired
    private ProjectService projectService;

    public Message sendMessage(User sender, long chatId, String content){
        Chat chat= chatService.getChatById(chatId);

        Message newMessage=new Message();
        newMessage.setContent(content);
        newMessage.setCreatedAt(LocalDateTime.now());
        newMessage.setChat(chat);
        newMessage.setSender(sender);

        Message savedMessage= messageRepo.save(newMessage);
        chatService.addMessage(chat,savedMessage);

        return savedMessage;
    }

    public List<Message> getMassagesByProjectId(long projectId){
        Chat chat=projectService.getChat(projectId);
        return chat.getMessages();
    }
}
