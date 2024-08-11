package org.themohit.exception;

public class ChatException extends CustomException{
    public ChatException(String msg, Throwable cause) {
        super(msg, cause);
    }

    public ChatException(String msg) {
        super(msg);
    }
}
