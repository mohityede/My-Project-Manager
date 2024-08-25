package org.themohit.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;
    private String description;
    private String category;
    private List<String> tags=new ArrayList<>();

    @ManyToMany
    private List<User> members=new ArrayList<>();

    @ManyToOne
    private User owner;

    @JsonIgnore
    @OneToOne(mappedBy = "project",cascade = CascadeType.ALL,orphanRemoval = true)
    private Chat chat;

    @JsonIgnore
    @OneToMany(mappedBy = "project",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Task> tasks=new ArrayList<>();
}
