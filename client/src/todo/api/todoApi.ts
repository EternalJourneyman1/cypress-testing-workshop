import {httpClient} from "../../httpClient";

const baseUri = '/api/v1'

export type Todo = {
    title: string;
    description: string;
    completed: boolean;
}

export type TodoPreview = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}



export const getTodos: () => Promise<TodoPreview[]> = async () => {
    return (await httpClient.get(`${baseUri}/todos`)).data
}

export const createTodo = async (todoToCreate: Todo): Promise<Todo> => {
    return (await httpClient.post(`${baseUri}/todo`, todoToCreate)).data
}
