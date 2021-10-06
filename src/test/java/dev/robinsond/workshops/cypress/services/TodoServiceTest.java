package dev.robinsond.workshops.cypress.services;

import dev.robinsond.workshops.cypress.models.Todo;
import dev.robinsond.workshops.cypress.repositories.TodoRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

class TodoServiceTest {

    @Autowired
    TodoService todoService;

    @Autowired
    TodoRepository mockTodoRepository;

    @BeforeEach
    void setUp() {
        mockTodoRepository = Mockito.mock(TodoRepository.class);

        todoService = new TodoService(mockTodoRepository);
    }

    @Test
    void getTodosShouldReturnEmptyList() {
        List<Todo> todos = todoService.getTodos();

        assertThat(todos).isEqualTo(Collections.emptyList());
    }

    @Test
    void createTodoShouldPersistTodo() {
        Todo todoToCreate = new Todo(null,  "First Todo", "Write Tests First", false);
        Todo expectedTodo = new Todo(1L, "First Todo", "Write Tests First", false);

        when(mockTodoRepository.save(todoToCreate)).thenReturn(expectedTodo);

        Todo todo = todoService.createTodo(todoToCreate);

        assertThat(todo).isEqualTo(expectedTodo);
    }

    @Test
    void getTodoShouldReturnTodoById() {
        Todo expectedTodo = new Todo(1L, "First Todo", "Write Tests First", false);

        when(mockTodoRepository.findById(1L)).thenReturn(Optional.of(expectedTodo));

        Todo todo = todoService.getTodo(1L).get();

        assertThat(todo).isEqualTo(expectedTodo);
    }
}
