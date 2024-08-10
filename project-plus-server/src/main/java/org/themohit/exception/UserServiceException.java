package org.themohit.exception;

public class UserServiceException extends CustomException{
    public UserServiceException(String msg, Throwable cause) {
        super(msg, cause);
    }

    public UserServiceException(String msg) {
        super(msg);
    }
}
