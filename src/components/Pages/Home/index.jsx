import { useState } from 'react';
import { useSelector } from 'react-redux';
import TodosContext from '../../../context/Todos';
import { selectTranslations } from '../../../redux/feature/i18nSlice';
import {
    DatePicker,
    DailyStatistics,
    Tasks,
} from '../../common';
import './style.scss';

const Home = ({ search, showTaskModal, setShowTaskModal, selectedDate, setSelectedDate }) => {
    const [todos, assignTodos] = useState([]);

    const { i18n: { locale } } = useSelector((state) => state)
    const t = useSelector(selectTranslations)

    return (
        <>
            <div className={`${locale === 'ar' ? 'arhomeStyle' : ''}`}>
                <h1 className="tasks-title">{t.home.tasks}</h1>
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
            </div>
        </>
    )
}

export default Home;