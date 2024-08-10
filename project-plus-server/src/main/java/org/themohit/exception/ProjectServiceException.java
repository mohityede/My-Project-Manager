package org.themohit.exception;

import org.themohit.exception.CustomException;

public class ProjectServiceException extends CustomException {
    public ProjectServiceException(String msg, Throwable cause) {
        super(msg, cause);
    }

    public ProjectServiceException(String msg) {
        super(msg);
    }
}
