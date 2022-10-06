import './style.scss';

const Calender = () => {
    return (
        <div className="calendar">
            <div className="month">
                <a href="/" className="nav">
                    <i className="fas fa-angle-left"></i>
                </a>
                <div className="month-year">January <span className="year">2019</span>
                </div><a href="/" className="nav">
                    <i className="fas fa-angle-right"></i></a></div>
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
                <button>
                    <time>1</time>
                </button>
                <button>
                    <time>2</time>
                </button>
                <button>
                    <time>3</time>
                </button>
                <button>
                    <time>4</time>
                </button>
                <button>
                    <time>5</time>
                </button>
                <button>
                    <time>6</time>
                </button>
                <button>
                    <time>7</time>
                </button>
                <button>
                    <time>8</time>
                </button>
                <button>
                    <time>9</time>
                </button>
                <button>
                    <time>10</time>
                </button>
                <button>
                    <time>11</time>
                </button>
                <button>
                    <time>12</time>
                </button>
                <button>
                    <time>13</time>
                </button>
                <button>
                    <time>14</time>
                </button>
                <button>
                    <time>15</time>
                </button>
                <button>
                    <time>16</time>
                </button>
                <button>
                    <time>17</time>
                </button>
                <button className="today">
                    <time>18</time>
                </button>
                <button>
                    <time>19</time>
                </button>
                <button>
                    <time>20</time>
                </button>
                <button>
                    <time>21</time>
                </button>
                <button>
                    <time>22</time>
                </button>
                <button>
                    <time>23</time>
                </button>
                <button>
                    <time>24</time>
                </button>
                <button>
                    <time>25</time>
                </button>
                <button>
                    <time>26</time>
                </button>
                <button>
                    <time>27</time>
                </button>
                <button>
                    <time>28</time>
                </button>
                <button>
                    <time>29</time>
                </button>
                <button>
                    <time>30</time>
                </button>
                <button>
                    <time>31</time>
                </button>
            </div>
        </div>
    );
}

export default Calender;