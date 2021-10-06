package dev.robinsond.workshops.cypress.controllers;

import dev.robinsond.workshops.cypress.models.Todo;
import dev.robinsond.workshops.cypress.services.TodoService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

public class TodoControllerTest {

    @MockBean
    TodoService mockTodoService;

    TodoController todoController;

    @BeforeEach
    void setUp() {
        mockTodoService = Mockito.mock(TodoService.class);
        todoController = new TodoController(mockTodoService);
    }
    @Test
    void getTodosShouldReturnEmptyListWhenNoTodosExist() {
        List<Todo> todos = mockTodoService.getTodos();

        assertThat(todos).isEqualTo(Collections.emptyList());
    }

    @Test
    void getTodoShouldReturnTodoById() {
        Todo expectedTodo = new Todo(1L, "First Todo", "Write Tests First", false);

        Mockito.when(mockTodoService.getTodo(1L)).thenReturn(Optional.of(expectedTodo));

        Todo todo = todoController.getTodo(1L).get();

        assertThat(todo).isEqualTo(expectedTodo);
    }
    @Test
    void createTodoShouldPersistTodo() {
        Todo todoToCreate = new Todo(null, "First Todo", "Write Test Firsts", false);
        Todo expectedTodo = new Todo(1L, "First Todo", "Write Test Firsts", false);

        Mockito.when(mockTodoService.createTodo(todoToCreate)).thenReturn(expectedTodo);

        TodoController todoController = new TodoController(mockTodoService);

        Todo createdTodo = todoController.createTodo(todoToCreate);

        Mockito.verify(mockTodoService).createTodo(todoToCreate);

        assertThat(createdTodo).isEqualTo(expectedTodo);
    }
}

