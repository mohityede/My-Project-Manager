package org.themohit.exception;

public class SubscriptionException extends CustomException{
    public SubscriptionException(String msg, Throwable cause) {
        super(msg, cause);
    }

    public SubscriptionException(String msg) {
        super(msg);
    }
}
