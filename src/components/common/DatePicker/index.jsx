import { useSelector } from 'react-redux';
import './style.scss';

const DatePicker = ({ setSelectedDate }) => {

    const { i18n: { locale } } = useSelector((state) => state)
    const date = new Date();
    const [month, day, year] = [locale === 'ar' ? date.toLocaleDateString('ar-EG-u-nu-latn', { month: 'short' }) : date.toLocaleString('default', { month: 'long' }), date.getDate(), date.getFullYear()];
    const days = [
        28, 29, 30, 31, 1, 2, 3,
        4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17,
        18, 19, 20, 21, 22, 23, 24,
        25, 26, 27, 28, 29, 30, 31,
        1, 2, 3, 4, 5, 6, 7
    ];
    const greyIndexes = [0, 1, 2, 3, 35, 36, 37, 38, 39, 40, 41];

    const selectDate = (day, index) => {
        if (index > 3 && index < 35) {
            setSelectedDate(parseInt(date.getMonth() + 1) + '-' + day);
        }
        if (index < 4) {
            setSelectedDate(parseInt(date.getMonth()) + '-' + day);
        }
        if (index > 34) {
            setSelectedDate(parseInt(date.getMonth() + 2) + '-' + day);
        }
    }

    return (
        <div className="calendar">
            <div className="month">
                <div className="month-year">
                    <span> {month}</span>
                    <span className="year">{year}</span>
                </div>
            </div>
            {locale !== 'ar' ? <div className="days">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
            </div> :
                <div className="days">
                    <span>الاثنين</span>
                    <span>الثلاثاء</span>
                    <span>الاربعاء</span>
                    <span>الخميس</span>
                    <span>الجمعة</span>
                    <span>السبت</span>
                    <span>الاحد</span>
                </div>
            }

            <div className="dates">
                {days.map((date, index) => {
                    return (
                        <button
                            onClick={() => selectDate(date, index)}
                            className={`${(date === day) && 'selected'}`} key={index}>
                            <time className={`num-color ${greyIndexes.includes(index) && 'text-[#888888]'}`}>{date}</time>
                        </button>
                    )
                })
                }
            </div>
        </div>
    );
}

export default DatePicker;