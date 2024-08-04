package org.themohit.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String title;
    private String description;
    private String status;
    private long forProjectId;
    private String priority;
    private LocalDate dueDate;
    private List<String> tags=new ArrayList<>();

    @ManyToOne
    private User assignee;

    @ManyToOne
    private Project project;

    @JsonIgnore
    @OneToMany(mappedBy = "task",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Comment> comments=new ArrayList<>();
}
