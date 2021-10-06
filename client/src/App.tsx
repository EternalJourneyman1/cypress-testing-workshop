import React, {useEffect, useState} from 'react';
import {createTodo, getTodos, Todo} from "./todo/api/todoApi";
import {useAsync} from "./useAsync";
import {Button, TextField} from "@mui/material";
import {TodoList} from "./todo/TodoList";
import './App.css'

function App() {
    // USED FOR DEMONSTRATION PURPOSE ONLY
    const [updateState, forceUpdateState] = React.useState<any>();
    // USED FOR DEMONSTRATION PURPOSE ONLY

    const [todo, setTodo] = useState<Todo>(createBlankTodo())
    const [todos, setTodos] = useState<Array<Todo>>([])

    const {run} = useAsync()

    const saveTodo = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        const todoToCreate = {
            title: todo.title,
            description: todo.description,
            completed: todo.completed
        }
        run(
            createTodo(todoToCreate).then((returnedTodo) => {
                forceUpdateState(returnedTodo)
                setTodo(createBlankTodo())
            })
        )
    }

    useEffect(() => {
            run(
                getTodos().then(updatedTodos => {
                    setTodos(updatedTodos)

                })
            )
        }, [run, updateState]
    )


    const updateTodo = (updatedTodo: Partial<Todo>) => {
        setTodo({
            ...todo,
            ...updatedTodo
        })
    }

    const title = "Cypress Todos"

    return (
        <div className={'todoPageContainer'}>
            <header>
                <h1>{title}</h1>
            </header>

            <div className={'todoForm'}>
                <TextField id={'title'} type={"text"} label="title" variant="outlined" value={todo.title}
                           onChange={(e) => updateTodo({title: e.target.value})}/>

                <TextField id={'description'} label="description" variant="outlined" value={todo.description}
                           onChange={(e) => updateTodo({description: e.target.value})}/>

                <Button variant="contained" onClick={saveTodo}>Add Todo</Button>
            </div>

            {todos ? TodoList(todos) : <EmptyTodoList/>}

        </div>
    );
};


const EmptyTodoList = () => {
    return (
        <h1>You have nothing <span> Todo </span></h1>
    )
}

const blankTodo: Todo = {
    title: '',
    description: '',
    completed: false
}

const createBlankTodo = () => {
    return blankTodo;
}

export default App;
