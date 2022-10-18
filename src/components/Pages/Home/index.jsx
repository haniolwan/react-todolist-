import { useState } from 'react';
import { useSelector } from 'react-redux';
import TodosContext from '../../../context/Todos';
import SelectedTodoContext from '../../../context/SelectedTodo';


import {
    Calender,
    CollabsedSidebar,
    FullSidebar,
    Header,
    DailyStatistics,
    Tasks,
    TaskModal,
    Success
} from '../../common';

const Home = () => {
    const [sidebarShow, setSidebarShow] = useState("full");
    const [showModal, setShowModal] = useState(false);
    const [todos, assignTodos] = useState([]);
    const user = useSelector((state) => state.user);
    const showCollabsedSidebar = (sidebar) => {
        setSidebarShow(sidebar)
    }
    const [todo, setTodo] = useState(false);
    return (
        user.isAuthorized ?
            <>
                {
                    sidebarShow === 'full' ?
                        <FullSidebar showCollabsed={showCollabsedSidebar} /> :
                        <CollabsedSidebar showCollabsed={showCollabsedSidebar} />
                }
                <Header setShowModal={setShowModal} />
                <h1 className="tasks-title">Tasks</h1>
                <TodosContext.Provider value={{ todos, assignTodos }}>
                    <div className="flex gap-5 mr-14">
                        <SelectedTodoContext.Provider value={{ todo, setTodo }}>
                            <Tasks showModal={showModal} setShowModal={setShowModal} />
                            <div className='flex flex-col'>
                                <Success />
                                <Calender />
                                <DailyStatistics />
                            </div>
                            <TaskModal show={showModal} setShowModal={setShowModal} />
                        </SelectedTodoContext.Provider>
                    </div>
                </TodosContext.Provider>
            </>
            : null
    )
}

export default Home;