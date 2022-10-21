import { useState } from 'react';
import TodosContext from '../../../context/Todos';
import {
    Calender,
    DailyStatistics,
    Tasks,
} from '../../common';

const Home = ({ search, showTaskModal, setShowTaskModal }) => {
    const [todos, assignTodos] = useState([]);
    const [selectedDate, setSelectedDate] = useState(() => {
        const date = new Date();
        return ((parseInt(date.getMonth()) + 1) + '-' + date.getDate())
    });
    return (
        <>
            <h1 className="tasks-title">Tasks</h1>
            <TodosContext.Provider value={{ todos, assignTodos }}>
                <div className="flex gap-5 mr-14">
                    <Tasks
                        search={search}
                        date={selectedDate}
                        showTaskModal={showTaskModal}
                        setShowTaskModal={setShowTaskModal} />
                    <div className='flex flex-col'>
                        <Calender setSelectedDate={setSelectedDate} />
                        <DailyStatistics />
                    </div>
                </div>
            </TodosContext.Provider>
        </>
    )
}

export default Home;