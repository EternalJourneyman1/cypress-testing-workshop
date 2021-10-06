import {Todo} from "./api/todoApi";

export const TodoList = (todos: Todo[]) => {
    return (
        <ul>
            {todos.map((todo, key) => <li aria-label={'listItem'} key={key}>{todo.title}
                <ul>
                    <li>{todo.description}</li>
                </ul>
            </li>)}
        </ul>
    );
}
