import './style.scss';

const Calender = () => {
    const days = [
        28, 29, 30, 31, 1, 2, 3,
        4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17,
        18, 19, 20, 21, 22, 23, 24,
        25, 26, 27, 28, 29, 30, 31,
        1, 2, 3, 4, 5, 6, 7
    ]
    const greyIndexes = [
        0, 1, 2, 3, 35, 36, 37, 38, 39, 40, 41
    ];
    const date = new Date();
    const [month, day, year] = [date.toLocaleString('default', { month: 'long' }), date.getDate(), date.getFullYear()];
    return (
        <div className="calendar">
            <div className="month">
                <div className="month-year">{month} <span className="year">{year}</span>
                </div>
            </div>
            <div className="days">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
            </div>
            <div className="dates">
                {
                    days.map((day, index) => {
                        return (
                            <button key={index}>
                                <time className={`${greyIndexes.includes(index) && 'text-[#888888]'}`}>{day}</time>
                            </button>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Calender;