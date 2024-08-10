package org.themohit.exception;

public class InvitationException extends CustomException{
    public InvitationException(String msg, Throwable cause) {
        super(msg, cause);
    }

    public InvitationException(String msg) {
        super(msg);
    }
}
