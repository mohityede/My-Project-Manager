package org.themohit.request;

import lombok.Data;

@Data
public class MessageRequest {
    private String content;
    private long chatId;
}
