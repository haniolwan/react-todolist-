import check from './../../assets/check.svg';
import alert from './../../assets/alert.svg';
import clock from './../../assets/clock.svg';
import kabab from './../../assets/kabab.svg';



import './style.css';

const Tasks = () => {
    const data = [
        {
            id: 0,
            title: "Study for the exam",
            priority: "Urgent",
            time: "1am",
            state: "open"
        },
        {
            id: 1,
            title: "Make a new design",
            priority: "Urgent",
            time: "10pm",
            state: "open"
        },
        {
            id: 2,
            title: "Training for 30 mins",
            priority: "Improtant",
            time: "5am",
            state: "open"
        },
        {
            id: 3,
            title: "Cleaning my room",
            priority: "Normal",
            time: "9am",
            state: "open"
        },
        {
            id: 4,
            title: "Cleaning my room",
            priority: "Normal",
            time: "8pm",
            state: "done"
        },
    ];

    const priorityColor = (priority) => {
        if (priority === 'Urgent') {
            return 'text-[#DA1E28]';
        } else if (priority === 'Improtant') {
            return 'text-[#FFE500]';
        } else {
            return 'text-[#09DA37]';
        }
    }

    return (
        <>
            <section className="tasks-section bg-[#fff] w-4/5 ">
                <div className="tasks-container">
                    <div className="tasks-header">
                        <h1>Tasks For This Day</h1>
                        <button
                            type="button"
                            className="new-task-btn mr-4 text-[#40A1FC] bg-[#ECF6FF] hover:bg-[#b4d8f7] font-medium rounded-lg text-sm px-3 py-2.5">
                            <img src={check} alt="check tasks" />
                            Complete All
                        </button>
                    </div>
                    <div className="status-buttons my-5">
                        <button
                            type="button"
                            className="task-status-btn text-white bg-[#40a1fc] hover:bg-[#6fb8fc] font-medium rounded-lg text-sm px-3 py-1">
                            All
                        </button>
                        <button
                            type="button"
                            className="task-status-btn text-opacity-10 text-black bg-[#e8e3e3] hover:bg-[#c4c2c2] font-medium rounded-lg text-sm px-3 py-1">
                            Urgent
                        </button>
                        <button
                            type="button"
                            className="task-status-btn text-opacity-10 text-black bg-[#e8e3e3] hover:bg-[#c4c2c2] font-medium rounded-lg text-sm px-3 py-1">
                            Important
                        </button>
                        <button
                            type="button"
                            className="task-status-btn text-opacity-10 text-black bg-[#e8e3e3] hover:bg-[#c4c2c2] font-medium rounded-lg text-sm px-3 py-1">
                            Normal
                        </button>
                    </div>
                    <div>
                        {data.map((task) => {
                            return (
                                <div key={task.id} className={`new-task flex justify-between items-center p-2${task.state === 'done' ? 'bg-[#F3FDF5]' : "bg-[#fff]"}`}>
                                    <div className="task-info">
                                        <label className="check-box-container">
                                            <div>
                                                <span className={`text-lg ${task.state === 'done' ? 'line-through' : ""}`}>{task.title}</span>
                                                <span className={`task-status ${priorityColor(task.priority)}`}>{task.priority}</span>
                                                <div className="task-time">
                                                    <img src={clock} alt="task clock" />
                                                    at {task.time}
                                                </div>
                                            </div>
                                            <input type="checkbox" checked={task.state === 'done' ? true : undefined} disabled={task.state === 'done'} />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    {task.state === 'open' ? <div className='flex gap-4 items-center'>
                                        <div className='alert hover:bg-[#b4d8f7]'>
                                            <img src={alert} alt="task alert" />
                                        </div>
                                        <img className="h-6 w-6" src={kabab} alt="task kabab" />
                                    </div>
                                        :
                                        <div className='flex items-center gap-3 mr-4'>
                                            <img className="check-icon h-7 w-7" src={check} alt="task kabab" />
                                            <span>Task Done</span>
                                        </div>}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section >
        </>
    )
}

export default Tasks;