package org.themohit.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.themohit.model.User;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskRequest {
    private String title;
    private String description;
    private String status;
    private String priority;
    private long forProjectId;
    private LocalDate dueDate;
    private User assignee;
}
