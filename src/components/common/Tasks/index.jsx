import {
    useContext,
    useEffect,
    useRef,
    useState
} from 'react';
import axios from 'axios';
import Dropdown from '../Modals/Dropdown';
import CompleteTasks from '../Modals/Complete Tasks';
import TodosSkelton from '../Skelton/TodosSkelton';
import NotificationsContext from '../../../context/Notifications';
import TodosContext from '../../../context/Todos';
import check from './../../../assets/check.svg';
import alert from './../../../assets/alert.svg';
import clock from './../../../assets/clock.svg';
import kabab from './../../../assets/kabab.svg';
import './style.scss';
import { selectTranslations } from '../../../redux/feature/i18nSlice';
import { useSelector } from 'react-redux';

const Tasks = ({ search, selectedDate, showTaskModal, setShowTaskModal }) => {
    const [loading, setLoading] = useState(true);
    const [todos, setTodos] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const [prevPage, setPrevPage] = useState(0);
    const [lastList, setLastList] = useState(false);
    const [clickedId, setClickedId] = useState(0);
    const [filter, setFilter] = useState('');
    const [showCompleteModal, setShowCompleteModal] = useState(false);
    const listInnerRef = useRef();
    const { setTitle } = useContext(NotificationsContext);
    const { assignTodos } = useContext(TodosContext);

    useEffect(() => {
        setTodos([]);
        setLastList(false);
        setCurrPage(1);
        setPrevPage(0);
    }, [filter,
        setTitle,
        search,
        selectedDate,
        showTaskModal,
    ])


    useEffect(() => {
        const source = axios.CancelToken.source();
        const getTodos = async () => {
            try {
                const { data: { data } } = await axios.get('/todo', {
                    params: { page: currPage, limit: 6, priority: filter, search, date: selectedDate },
                    cancelToken: source.token,
                });
                if (!data.length) {
                    setLastList(true)
                    return;
                }
                setPrevPage(currPage);
                setTodos(() => {
                    return [...new Set([...todos, ...data])]
                });
                setLoading(false);
            } catch (error) {
                if (axios.isCancel(error)) return
            }
        }
        if ((!lastList && prevPage) !== currPage) {
            getTodos();
        }
        assignTodos(todos)
        return () => source.cancel();
    }, [
        currPage,
        lastList,
        prevPage,
        filter,
        todos,
        assignTodos,
        search,
        selectedDate,
        showTaskModal,
    ])

    const priorityColor = (priority) => {
        if (priority === 'Urgent') {
            return 'text-[#DA1E28]';
        } else if (priority === 'Important') {
            return 'text-[#FFE500]';
        } else if (priority === 'Normal') {
            return 'text-[#09DA37]';
        }
    }

    const onScroll = () => {
        if (listInnerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
            if (((scrollTop + clientHeight) === scrollHeight) && !lastList) {
                if (todos.length < 6) return
                setCurrPage(currPage + 1)
            }
        }
    }

    const handleChange = async (event) => {
        const { data: { message } } = await axios.post(`/todo/${event.target.name}`);
        setTodos((prevTodos) => prevTodos.map((todo) => {
            if (todo._id === event.target.name) {
                if (event.target.checked && todo.state === 'done') {
                    todo.state = 'open';
                } else {
                    todo.state = 'done';
                }
            }
            return todo;
        }))
        setTitle(message)
    }

    const setAlert = async (taskId, notification) => {
        try {
            const { data: { message } } = await axios.post(`/todo/${taskId}/setAlert`, { notification });
            setTitle(message)
        } catch ({ response: { data: { message } } }) {
            setTitle(message)
        }
    }

    const { i18n: { locale } } = useSelector((state) => state)
    const t = useSelector(selectTranslations)

    return (
        <>
            <section className={`${locale === 'ar' ? 'arTasksStyle' : ""} tasks-section bg-[#fff] w-4/5 h-full`}>
                <div className="tasks-container">
                    <div className="tasks-header p-5 pb-0">
                        <h1>{t.tasks.title}</h1>
                        <button
                            onClick={() => setShowCompleteModal(true)}
                            type="button"
                            className="new-task-btn mr-4 text-[#40A1FC] bg-[#ECF6FF] hover:bg-[#b4d8f7] font-medium rounded-lg text-sm px-3 py-2.5">
                            <img src={check} alt="check tasks" />
                            {t.tasks.completeAll}
                        </button>
                    </div>
                    <div className="status-buttons p-5">
                        <button
                            type="button"
                            className={`task-status-btn ${filter === '' ? 'text-white bg-[#40a1fc] hover:bg-[#6fb8fc]' : 'text-opacity-10 text-black bg-[#e8e3e3] hover:bg-[#c4c2c2]'} font-medium rounded-lg text-sm px-3 py-1`}
                            onClick={() => setFilter('')}>
                            {t.tasks.all}
                        </button>
                        <button
                            type="button"
                            className={`task-status-btn ${filter === 'Urgent' ? 'text-white bg-[#40a1fc] hover:bg-[#6fb8fc]' : 'text-opacity-10 text-black bg-[#e8e3e3] hover:bg-[#c4c2c2]'} font-medium rounded-lg text-sm px-3 py-1`}
                            onClick={() => setFilter('Urgent')}>
                            {t.tasks.urgent}
                        </button>
                        <button
                            type="button"
                            className={`task-status-btn ${filter === 'Important' ? 'text-white bg-[#40a1fc] hover:bg-[#6fb8fc]' : 'text-opacity-10 text-black bg-[#e8e3e3] hover:bg-[#c4c2c2]'} font-medium rounded-lg text-sm px-3 py-1`}
                            onClick={() => setFilter('Important')}>
                            {t.tasks.important}
                        </button>
                        <button
                            type="button"
                            className={`task-status-btn ${filter === 'Normal' ? 'text-white bg-[#40a1fc] hover:bg-[#6fb8fc]' : 'text-opacity-10 text-black bg-[#e8e3e3] hover:bg-[#c4c2c2]'} font-medium rounded-lg text-sm px-3 py-1`}
                            onClick={() => setFilter('Normal')}>
                            {t.tasks.normal}
                        </button>
                    </div>
                    {loading ?
                        <TodosSkelton /> : (<div
                            onScroll={onScroll}
                            ref={listInnerRef}
                            className="todos-scroll overflow-y-scroll h-96">
                            {todos.map((task) => {
                                return (
                                    <div key={task._id} className={`new-task flex justify-between items-center px-5 py-1 ${task.state === 'done' ? 'bg-[#F3FDF5]' : "bg-[#fff]"}`}>
                                        <div className="task-info">
                                            <label className="check-box-container">
                                                <div>
                                                    <div className="t-info">
                                                        <span className={`text-lg ${task.state === 'done' ? 'line-through' : ""}`}>{task.title}</span>
                                                        <span className={`task-status ${priorityColor(task.priority)}`}>{t.tasks[task.priority.toLowerCase()]}</span>
                                                    </div>
                                                    <div className="task-time">
                                                        <img src={clock} alt="task clock" />
                                                        {locale === 'ar' ? 'على' : 'at'} {task.time}
                                                    </div>
                                                </div>
                                                <input name={task._id} type="checkbox" checked={task.state === 'done'} onChange={handleChange} />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        {task.state === 'open' ? (<div className='flex gap-4 items-center'>
                                            <div
                                                onClick={() => setAlert(task._id, task.notification)}
                                                className={`${(task.notification) ? 'alerted' : ''} alert hover:bg-[#b4d8f7]`}>
                                                <img src={alert} alt="task alert" />
                                            </div>
                                            <div className="flex">
                                                <img
                                                    className={`${task._id === clickedId && 'hidden'} h-6 w-6`}
                                                    src={kabab}
                                                    alt="task kabab"
                                                    onClick={() => setClickedId(task._id)} />
                                                <Dropdown
                                                    setTodos={setTodos}
                                                    taskId={task._id}
                                                    clickedId={clickedId}
                                                    setClickedId={setClickedId}
                                                    setShowModal={setShowTaskModal}
                                                />
                                            </div>
                                        </div>) :
                                            (<div className='flex items-center gap-3 mr-4'>
                                                <img className="check-icon h-7 w-7" src={check} alt="task kabab" />
                                                <span>{t.tasks.done}</span>
                                            </div>)}
                                    </div>)
                            })}
                        </div>)
                    }
                </div>
                <CompleteTasks
                    show={showCompleteModal}
                    setShowCompleteModal={setShowCompleteModal}
                    setTodos={setTodos} />
            </section >
        </>
    )
}

export default Tasks;