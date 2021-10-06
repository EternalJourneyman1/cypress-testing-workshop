package dev.robinsond.workshops.cypress.repositories;

import dev.robinsond.workshops.cypress.models.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
}
