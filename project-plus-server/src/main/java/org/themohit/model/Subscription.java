package org.themohit.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import org.themohit.enums.Plan;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
public class Subscription {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private LocalDate subscriptionStartDate;
    private LocalDate subscriptionEndDate;
    private boolean isValid;

    @Enumerated(EnumType.STRING)
    private Plan planType;

    @JsonIgnore
    @OneToOne
    private User user;
}
