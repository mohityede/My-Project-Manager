package org.themohit.request;

import lombok.Data;

@Data
public class CommentRequest {
    private String comment;
    private long taskId;
}
