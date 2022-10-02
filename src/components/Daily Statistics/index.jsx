import './style.css';

const DailyStatistics = () => {
    return (
        <section className="statistics-container w-50 h-50 bg-[#fff] mt-3 p-4">
            <h1 className="font-bold mb-4">Daily Statistics</h1>
            <div className="stats flex justify-between items-center rounded-md w-50 h-15 bg-[#ECF6FF] p-2 mb-3">
                <span>Completed Tasks</span>
                <span className="font-bold">6 Tasks</span>
            </div>
            <div className="stats flex justify-between items-center rounded-md w-50 h-15 bg-[#ECF6FF] p-2 mb-3">
                <span>Remaining Tasks</span>
                <span className="font-bold">4 Tasks</span>
            </div>
            <div className="stats flex justify-between items-center rounded-md w-50 h-15 bg-[#ECF6FF] p-2">
                <span>Complettion Rate</span>
                <span className="font-bold text-[#40A1FC]">16.6%</span>
            </div>
        </section>
    );
}
export default DailyStatistics;