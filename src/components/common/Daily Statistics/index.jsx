import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import TodosContext from '../../../context/Todos';
import StatsSkelton from '../Skelton/StatsSkelton';
import './style.css';
const DailyStatistics = () => {
    const [loading, setLoading] = useState(true)
    const [stats, setStats] = useState({
        completedTasks: 0,
        remainingTasks: 0,
        completionRate: 0
    })
    const { todos } = useContext(TodosContext);
    useEffect(() => {
        const source = axios.CancelToken.source();
        const getStatistics = async () => {
            try {
                const {
                    data: {
                        completedTasks,
                        remainingTasks,
                        completionRate,
                    }
                } = await axios.get('/todo/statistics/all');
                setStats((prevState) => {
                    return {
                        ...prevState, completedTasks, remainingTasks, completionRate
                    }
                });
                setLoading(false)
            } catch (error) {
                if (axios.isCancel(error)) return
            }
        }
        getStatistics();
        return () => source.cancel();
    }, [todos])
    return (
        loading ?
            <StatsSkelton /> :
            <>
                <section className="statistics-container w-50 h-50 bg-[#fff] mt-3 p-4">
                    <h1 className="font-bold mb-4">Daily Statistics</h1>
                    <div className="stats flex justify-between items-center rounded-md w-50 h-15 bg-[#ECF6FF] p-2 mb-3">
                        <span>Completed Tasks</span>
                        <span className="font-bold">{stats.completedTasks} Tasks</span>
                    </div>
                    <div className="stats flex justify-between items-center rounded-md w-50 h-15 bg-[#ECF6FF] p-2 mb-3">
                        <span>Remaining Tasks</span>
                        <span className="font-bold">{stats.remainingTasks} Tasks</span>
                    </div>
                    <div className="stats flex justify-between items-center rounded-md w-50 h-15 bg-[#ECF6FF] p-2">
                        <span>Complettion Rate</span>
                        <span className="font-bold text-[#40A1FC]">{stats.completionRate}</span>
                    </div>
                </section>
            </>
    );
}
export default DailyStatistics;