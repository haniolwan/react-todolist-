import { useState } from 'react';
import TodosContext from '../../../context/Todos';
import {
    DatePicker,
    DailyStatistics,
    Tasks,
} from '../../common';

const Home = ({ search, showTaskModal, setShowTaskModal, selectedDate, setSelectedDate }) => {
    const [todos, assignTodos] = useState([]);

    return (
        <>
            <h1 className="tasks-title">Tasks</h1>
            <TodosContext.Provider value={{ todos, assignTodos }}>
                <div className="flex gap-5 mr-14">
                    <Tasks
                        search={search}
                        selectedDate={selectedDate}
                        showTaskModal={showTaskModal}
                        setShowTaskModal={setShowTaskModal} />
                    <div className='flex flex-col'>
                        <DatePicker setSelectedDate={setSelectedDate} />
                            <DailyStatistics />
                    </div>
                </div>
            </TodosContext.Provider>
        </>
    )
}

export default Home;