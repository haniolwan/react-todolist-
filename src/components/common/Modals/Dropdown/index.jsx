import axios from 'axios';
import { useContext } from 'react';
import Notifications from '../../../../context/Notifications';
import './style.css'


const Dropdown = ({ clickedId, taskId, setClickId, setTodos }) => {
    const { setTitle } = useContext(Notifications)
    const deleteTask = async (event) => {
        try {
            event.preventDefault();
            const { data: { message } } = await axios.delete(`/todo/${taskId}`);
            setTitle(message)
            setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== taskId))
        } catch (error) {
            setTitle(error)
        }
    }

    const completeTask = async (event) => {
        try {
            event.preventDefault();
            const { data: { message } } = await axios.post(`/todo/${taskId}`);
            setTitle(message)
            setTodos((prevTodos) => prevTodos.map((todo) => {
                if (todo._id === taskId) {
                    todo.state = 'done';
                }
                return todo;
            }))
        } catch (error) {
            setTitle(error)
        }
    }


    return (
        (clickedId === taskId) &&
        (<div id="dropdown" className={`shadow-2xl relative z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 bg-gray rounded-3xl`}>
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 rounded-3xl" aria-labelledby="dropdownDefault">
                <li onClick={setClickId()}>
                    <span className="block py-2 px-4">X</span>
                </li>
                <li>
                    <a
                        onClick={(event) => completeTask(event)}
                        href="/"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Complete</a>
                </li>
                <li>
                    <a href="/" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                </li>
                <li>
                    <a
                        onClick={(event) => deleteTask(event)}
                        href="/"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Delete</a>
                </li>
            </ul>
        </div >)
    )
}

export default Dropdown;