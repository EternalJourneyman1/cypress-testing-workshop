package dev.robinsond.workshops.cypress.controllers;

import dev.robinsond.workshops.cypress.models.Todo;
import dev.robinsond.workshops.cypress.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class TodoController {

    @Autowired
    TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("/todos")
    public List<Todo> getTodos() { return todoService.getTodos(); }

    @PostMapping("/todo")
    public Todo createTodo(@RequestBody Todo todoToCreate) {
        return todoService.createTodo(todoToCreate);
    }

    @GetMapping("/todo/{todoId}")
    public Optional<Todo> getTodo(@RequestParam Long todoId) {
        return todoService.getTodo(todoId.longValue());
    }
}
