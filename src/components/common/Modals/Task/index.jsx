import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import Notifications from '../../../../context/Notifications';
import SelectedTodoContext from '../../../../context/SelectedTodo';
import useOnClickOutside from '../../../../hooks/useOnClickOutside';
import close from './../../../../assets/close.svg';
import bell from './../../../../assets/bell.svg';
import closecat from './../../../../assets/closecat.svg';
import checked from './../../../../assets/checked.svg';
import './style.scss';


const TaskModal = ({ show, setShowModal }) => {

    const initialData = useMemo(() => ({
        title: '',
        priority: 'Normal',
        color: '',
        category: [],
        time: '',
        notification: false,
        motivation: ''
    }), [])

    const { todo } = useContext(SelectedTodoContext);
    const [notificationError, setNotificationError] = useState(false)

    useEffect(() => {
        setData(initialData)
        setId(0)
        setNotificationError(false)
    }, [show, initialData,setNotificationError])

    useEffect(() => {
        if (Object.keys(todo).length === 0) {
            setData(initialData);
        } else {
            const {
                _id,
                title,
                priority,
                color,
                category,
                time,
                date,
                notification,
                motivation
            } = todo;
            setId(_id)
            setData({
                title,
                priority,
                color,
                category,
                time,
                date,
                notification,
                motivation
            })
        }
    }, [initialData, todo])

    const [data, setData] = useState(initialData);
    const [id, setId] = useState(todo._id);
    const [error, setError] = useState({
        title: false,
        color: false,
        date: false,
        time: false
    });

    const getInputErrorKeys = (object, value) => {
        const arr = [];
        Object.keys(object).forEach(key => {
            if (object[key] === value) {
                arr.push(key);
            }
        });
        return arr;
    }

    const timeConvert = (time) => {
        let [h, m] = time.split(":");
        let a = ((h % 12 + 12 * (h % 12 === 0)) + ":" + m) + " ";
        if (h >= 12) {
            a += 'PM';
        } else {
            a += 'AM';
        }
        return a;
    }

    const convertTime12to24 = (time12h) => {
        const [time, modifier] = time12h.split(' ');
        let [hours, minutes] = time.split(':');
        if (hours === '12') {
            hours = '00';
        }
        if (modifier === 'PM') {
            hours = parseInt(hours, 10) + 12;
        }
        return `${hours}:${minutes}`;
    }

    const { setTitle } = useContext(Notifications);

    const createTodo = async () => {
        try {
            const keys = getInputErrorKeys(data, '');
            keys.forEach(element => {
                if (error.hasOwnProperty(element)) {
                    setError((prevError) => {
                        return { ...prevError, [element]: true }
                    })
                }
            });
            const { title, color, date, time } = data;
            if (title && color && date && time) {
                const { data: { message } } = await axios.post('/todo/create', {
                    ...data,
                    time: (data.time)
                });
                setShowModal(false);
                setTitle(message);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const updateTodo = async () => {
        try {
            const keys = getInputErrorKeys(data, '');
            keys.forEach(element => {
                if (error.hasOwnProperty(element)) {
                    setError((prevError) => {
                        return { ...prevError, [element]: true }
                    })
                }
            });
            const { title, color, date, time } = data;
            if (title && color && date && time) {
                const { data: { message } } = await axios.put(`/todo/${id}`, {
                    ...data,
                    time: (data.time)
                });
                setShowModal(false);
                setTitle(message);
            }
        } catch (error) {
            setNotificationError(true)
        }
    }

    const handleInput = ({ target: { name, value } }) => {
        if (name === 'category') {
            if (value) {
                setData({ ...data, [name]: [...new Set([...data.category, value])] });
            }
            return;
        }
        if (name === 'notification') {
            setData({ ...data, [name]: !data.notification });
            return;
        }
        else {
            setData({ ...data, [name]: value })
        }
    }

    const modalRef = useRef();
    useOnClickOutside(modalRef, () => setShowModal(false))

    return (
        show && <div
            id="medium-modal" tabIndex="-1" className="backdrop overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center items-center"
            data-bs-backdrop="static" data-bs-keyboard="false"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div
                ref={modalRef}
                className="modal-dialog relative w-auto pointer-events-none">
                <div
                    className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div
                        className="modal-header flex flex-shrink-0 items-center justify-between px-4 pt-5 rounded-t-md">
                        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
                            Add New Task
                        </h5>
                        <img
                            onClick={() => setShowModal((show) => !show)}
                            src={close}
                            alt="close"
                        />
                    </div>
                    <div className="modal-body relative p-4">
                        <div className="flex flex-col gap-2">
                            <span>
                                Task Description
                            </span>
                            <input
                                value={data.title || ''}
                                onChange={handleInput}
                                name="title"
                                type="text"
                                id="first_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter Task Description"
                            />
                            {error.title && <p className="pb-3 text-red-700 font-light">
                                Description is required
                            </p>}
                        </div>
                        {/* Task Priority */}
                        <div className="flex flex-col gap-2 mt-2">
                            <span>Task Priority</span>
                            <div className="flex justify-between gap-2 mb-3">
                                <button
                                    onClick={() => setData({ ...data, priority: 'Urgent' })}
                                    className={`${(data.priority) === 'Urgent' && 'urgent-btn-checked'} w-40 urgent-btn flex hover:text-[#FF0000] hover:bg-[#F6DDDD] gap-6 bg-[#F5F5F5] text-[#000] text-white font-bold py-2 pl-2 rounded`}>
                                    <img className="check-button" src={checked} alt="priority check" />
                                    <span className="flex self-end">Urgent</span>
                                </button>
                                <button
                                    onClick={() => setData({ ...data, priority: 'Important' })}
                                    className={`${(data.priority) === 'Important' && 'important-btn-checked'} w-40 justify-start important-btn flex hover:text-[#FFE500] hover:bg-[#F6F4DD] gap-4 bg-[#F5F5F5] text-[#000] text-white font-bold py-2 pl-2 rounded`}>
                                    <img className="check-button" src={checked} alt="priority check" />
                                    <span className="flex self-end">Important</span>
                                </button>
                                <button
                                    onClick={() => setData({ ...data, priority: 'Normal' })}
                                    className={`${(data.priority) === 'Normal' && 'normal-btn-checked'} w-40	justify-start normal-btn flex hover:text-[#09DA37] hover:bg-[#DEF3E3] gap-6 bg-[#F5F5F5] text-[#000] text-white font-bold py-2 pl-2 rounded`}>
                                    <img className="check-button" src={checked} alt="priority check" />
                                    <span className="flex self-end">Normal</span>
                                </button>
                            </div>
                        </div>
                        {/* Task Color */}
                        <div className="flex flex-col gap-2">
                            <span>Task Color</span>
                            <div className="task-color flex justify-start gap-5">
                                <label className="orange">
                                    <input
                                        type="radio"
                                        name="color"
                                        value="orange"
                                        onChange={handleInput} />
                                    <div className="layer"></div>
                                    <div className="radio-button">
                                        <span className={`${(data.color) === 'orange' && 'selected-color'}`}></span>
                                    </div>
                                </label>

                                <label className="amber">
                                    <input
                                        type="radio"
                                        name="color"
                                        value="amber"
                                        onChange={handleInput} />
                                    <div className="layer"></div>
                                    <div className="radio-button">
                                        <span className={`${(data.color) === 'amber' && 'selected-color'}`}></span>
                                    </div>
                                </label>

                                <label className="lime">
                                    <input
                                        type="radio"
                                        name="color"
                                        value="lime"
                                        onChange={handleInput} />
                                    <div className="layer"></div>
                                    <div className="radio-button">
                                        <span className={`${(data.color) === 'lime' && 'selected-color'}`}></span>
                                    </div>
                                </label>

                                <label className="teal">
                                    <input
                                        type="radio"
                                        name="color"
                                        value="teal"
                                        onChange={handleInput} />
                                    <div className="layer"></div>
                                    <div className="radio-button">
                                        <span className={`${(data.color) === 'teal' && 'selected-color'}`}></span>
                                    </div>
                                </label>

                                <label className="blue">
                                    <input
                                        type="radio"
                                        name="color"
                                        value="blue"
                                        onChange={handleInput} />
                                    <div className="layer"></div>
                                    <div className="radio-button ">
                                        <span className={`${(data.color) === 'blue' && 'selected-color'}`}></span>
                                    </div>
                                </label>

                                <label className="indigo">
                                    <input
                                        type="radio"
                                        name="color"
                                        value="indigo"
                                        onChange={handleInput} />
                                    <div className="layer"></div>
                                    <div className="radio-button">
                                        <span className={`${(data.color) === 'indigo' && 'selected-color'}`}></span>
                                    </div>
                                </label>
                            </div>
                            {error.color && <p className="pb-3 text-red-700 font-light">
                                Color is required
                            </p>}
                        </div>
                        {/* Task Category */}
                        <div className="flex flex-col gap-2 mt-2">
                            <span>Task Category</span>
                            <select
                                onChange={handleInput}
                                name="category"
                                id="countries"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value=''>Choose a category</option>
                                <option value="Fitness">Fitness</option>
                                <option value="Food">Food</option>
                                <option value="Gaming">Gaming</option>
                                <option value="Studying">Studying</option>
                            </select>
                            <div className="flex gap-1">
                                {data.category.map((category) => {
                                    return category && (
                                        <button
                                            key={category}
                                            className="bg-transparent border-blue-500 w-fit flex text-blue-700 font-semibold py-1 pl-2 border rounded-xl">
                                            {category}
                                            <img
                                                onClick={() => {
                                                    setData({
                                                        ...data,
                                                        category: [...new Set([...data.category.filter((item) => item !== category)])]
                                                    });
                                                }}
                                                className="close-button"
                                                src={closecat}
                                                alt="close category" />
                                        </button>)
                                })}
                            </div>
                        </div>
                        {/* Task Date And Time */}
                        <div className="flex flex-col gap-2 mt-2">
                            <span>Date and Time</span>
                            <div className="date-pickers flex items-center justify-center gap-4">
                                <input
                                    onChange={handleInput}
                                    value={data.date || ''}
                                    name="date"
                                    type="date"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                                <input
                                    onChange={handleInput}
                                    value={convertTime12to24(data.time) || ''}
                                    name="time"
                                    type="time"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            {(error.date || error.time) && <p className="pb-3 text-red-700 font-light">
                                Date and time is required
                            </p>}
                        </div>
                        {/* Notification */}
                        <div className="mt-3 flex justify-between flex-col">
                            {notificationError && <p className="pb-1 text-red-700 font-light">
                                Cannot set notification to ended todo
                            </p>}
                            <div className="flex justify-between">
                                <div className="flex gap-2 items-center">
                                    <span>Get Notification</span>
                                    <img
                                        className='h-5 w-5'
                                        src={bell}
                                        alt="bell" />

                                </div>
                                <div>
                                    <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
                                        <input
                                            onChange={handleInput}
                                            defaultChecked={todo.notification}
                                            name="notification"
                                            type="checkbox"
                                            id="default-toggle"
                                            className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 mt-2">
                            <span>Receive a notification when the task is due</span>
                            <input
                                onChange={handleInput}
                                value={data.motivation || ''}
                                name="motivation"
                                type="text"
                                id="motivation"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter Task Description"
                            />
                        </div>
                    </div>
                    <div
                        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 rounded-b-md">
                        <button
                            onClick={() => setShowModal((show) => !show)}
                            type="button"
                            className="inline-block px-6 py-2.5 text-dark font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-white-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                            data-bs-dismiss="modal">Cancel
                        </button>
                        {!id ? <button
                            onClick={createTodo}
                            type="button"
                            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                            Add Task
                        </button> :
                            <button
                                onClick={updateTodo}
                                type="button"
                                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                                Update Task
                            </button>}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default TaskModal;