package dev.robinsond.workshops.cypress.models;

import lombok.Data;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.ZonedDateTime;

@Data
@Entity
public class Todo {
    @Id
    @GeneratedValue
    Long id;
    String title;
    String description;
    Boolean completed;

    public Todo(Long id, String title, String description, Boolean completed) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }

    public Todo() {

    }
}


// TODO long not reading for getTodo
