import { createContext } from 'react';

const defaultValue = {
    todos: [],
    assignTodos: (todos) => { },
};
 
export default createContext(defaultValue);