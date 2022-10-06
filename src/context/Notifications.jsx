import { createContext } from 'react';

const defaultValue = {
    title: "",
    setTitle: (title) => { },
    message: "",
    setMessage: (message) => { },
};

export default createContext(defaultValue);