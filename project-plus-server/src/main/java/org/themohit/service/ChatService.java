package org.themohit.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.themohit.exception.ChatException;
import org.themohit.model.Chat;
import org.themohit.model.Message;
import org.themohit.repository.ChatRepo;

import java.util.Optional;

@Service
public class ChatService {
    @Autowired
    private ChatRepo chatRepo;

    public Chat createChat(Chat chat){
        return chatRepo.save(chat);
    };

    public Chat getChatById(long chatId){
        Optional<Chat> optionalChat = chatRepo.findById(chatId);
        if(optionalChat.isEmpty()) throw new ChatException("Invalid chat id");

        return optionalChat.get();
    }

    public void addMessage(Chat chat,Message message){
        chat.getMessages().add(message);
    }
}
