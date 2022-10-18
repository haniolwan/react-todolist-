import { createContext } from 'react';

const defaultValue = {
    todo: {},
    setTodo: (todo) => { },
};

export default createContext(defaultValue);