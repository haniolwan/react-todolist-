import { DatePicker, Tasks } from "../../common";


const Calender = ({ search, selectedDate, setSelectedDate, showTaskModal, setShowTaskModal }) => {
    return (
        <>
            <h1 className="tasks-title">Calender</h1>
            <div className="flex gap-5 mr-14">
                <div className="w-4\/5">
                    <DatePicker setSelectedDate={setSelectedDate} />
                </div>
                <div className="w-screen">
                    <Tasks
                        search={search}
                        selectedDate={selectedDate}
                        showTaskModal={showTaskModal}
                        setShowTaskModal={setShowTaskModal} />
                </div>
            </div>
        </>
    )
}

export default Calender;