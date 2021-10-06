import React from 'react';
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import App from "../App";
import {getTodos} from "../todo/api/todoApi";

jest.mock('../todo/api/todoApi');
const mockGetTodos = getTodos as jest.MockedFunction<typeof getTodos>

describe('App.tsx', () => {
  it('should render Cypress Todos title',() => {
    mockGetTodos.mockResolvedValue([])
    render(<App/>);
    const title = screen.getByRole('heading', {name: 'Cypress Todos'});

    expect(title.textContent).toEqual('Cypress Todos')
  });

  it('should render an input for title', () => {
    mockGetTodos.mockResolvedValue(         [])
    render(<App />)

    const input = screen.getByRole('textbox', {name: 'title'})

    expect(input).toBeVisible();
  })

  it('should render an input for description', () => {
    mockGetTodos.mockResolvedValue([])
    render(<App />)

    const input = screen.getByRole('textbox', {name: 'description'})

    expect(input).toBeVisible();
  })

  it('should render a Add Todo button', () => {
    mockGetTodos.mockResolvedValue([])
    render(<App />)

    const submitButton = screen.getByRole('button', {name: 'Add Todo'})

    expect(submitButton).toBeVisible()
  })

  it('should render empty todo message when no todos exist', () => {
    mockGetTodos.mockResolvedValue([])
    render(<App />)

    const emptyTodoMessage = screen.getByRole('heading', {name: 'You have nothing Todo'})

    expect(emptyTodoMessage).toBeVisible()
  })


  it('should render todo after clicking Add Todo button', () => {
    mockGetTodos.mockResolvedValue([{id: 1, title: 'S', description: '', completed: false}])

    render(<App />)
    const input = screen.getByRole('textbox', {name: 'title'})

    fireEvent.change(input, {target: {value: 'S'}})

    const submitButton = screen.getByRole('button', {name: 'Add Todo'})

    fireEvent.click(submitButton)

    waitFor(() => {
      expect(screen.queryAllByLabelText('listItem')[0]).toBeVisible()
    })
  })
})

