package org.themohit.exception;

public class CommentException extends CustomException{
    public CommentException(String msg, Throwable cause) {
        super(msg, cause);
    }

    public CommentException(String msg) {
        super(msg);
    }
}
