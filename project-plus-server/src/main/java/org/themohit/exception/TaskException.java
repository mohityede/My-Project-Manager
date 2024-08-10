package org.themohit.exception;

public class TaskException extends CustomException{
    public TaskException(String msg, Throwable cause) {
        super(msg, cause);
    }

    public TaskException(String msg) {
        super(msg);
    }
}
