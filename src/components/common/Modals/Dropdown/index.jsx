import { useContext, useRef } from 'react';
import axios from 'axios';
import Notifications from '../../../../context/Notifications';
import SelectedTodoContext from '../../../../context/SelectedTodo';
import useClickOutside from '../../../../hooks/useOnClickOutside';
import { useSelector } from 'react-redux';
import { selectTranslations } from '../../../../redux/feature/i18nSlice';
import './style.scss';


const Dropdown = ({ clickedId, taskId, setClickedId, setTodos, setShowModal }) => {
    const { setTitle } = useContext(Notifications)
    const { setTodo } = useContext(SelectedTodoContext);

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

    const editTask = (event) => {
        try {
            event.preventDefault();
            setShowModal((show) => !show)
            const getTodo = async () => {
                const { data: { data } } = await axios.get(`/todo/${taskId}`);
                setTodo(data)
            }
            getTodo();
        }
        catch (error) {
            console.log(error)
        }
    }

    const dropDownRef = useRef();
    useClickOutside(dropDownRef, () => setClickedId(false))

    const t = useSelector(selectTranslations)

    return (
        (clickedId === taskId) &&
        (<div
            ref={dropDownRef} id="dropdown" className={`shadow-2xl relative z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 bg-gray rounded-3xl`}>
            <ul className="dropdown-items py-1 text-sm text-gray-700 dark:text-gray-200 rounded-3xl" aria-labelledby="dropdownDefault">
                <li onClick={() => setClickedId(null)}>
                    <span className="block py-2 px-4">X</span>
                </li>
                <li>
                    <a
                        onClick={(event) => completeTask(event)}
                        href="/"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >{t.tasks.complete}</a>
                </li>
                <li>
                    <a
                        onClick={(event) => editTask(event)}
                        href="/"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >{t.tasks.edit}</a>
                </li>
                <li>
                    <a
                        onClick={(event) => deleteTask(event)}
                        href="/"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >{t.tasks.delete}</a>
                </li>
            </ul>
        </div >)
    )
}

export default Dropdown;