package dev.robinsond.workshops.cypress.services;

import dev.robinsond.workshops.cypress.models.Todo;
import dev.robinsond.workshops.cypress.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoService {
    @Autowired
    TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public List<Todo> getTodos() {
        return todoRepository.findAll();
    }

    public Todo createTodo(Todo todoToCreate) {
        return todoRepository.save(todoToCreate);
    }

    public Optional<Todo> getTodo(long todoId) {
        return todoRepository.findById(todoId);
    }
}
