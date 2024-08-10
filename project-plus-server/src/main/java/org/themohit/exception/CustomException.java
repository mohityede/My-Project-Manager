package org.themohit.exception;

public abstract class CustomException extends RuntimeException{
    public CustomException(String msg, Throwable cause) {
        super(msg, cause);
    }

    public CustomException(String msg) {
        super(msg);
    }
}
