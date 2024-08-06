package org.themohit.service;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.themohit.model.Chat;
import org.themohit.repository.ChatRepo;

@Service
public class ChatService {
    @Autowired
    private ChatRepo chatRepo;

    Chat createChat(Chat chat){
        return chatRepo.save(chat);
    };
}
