package org.themohit.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String content;
    private LocalDateTime createdAt;

    @ManyToOne
    private User user;

    @JsonIgnore
    @ManyToOne
    private Task task;
}