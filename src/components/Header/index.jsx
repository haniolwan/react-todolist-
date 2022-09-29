import React from 'react'
import Profile from '../Profile';
import plus from './../../assets/plus.svg';
import './style.css';

const Header = () => {
    return (
        <header className="header-container pt-4">
            <div className="welcome-text">
                <h1>Welcome</h1>
                <p>Take a look for your tasks today</p>
            </div>
            <div>
                <input type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search for task" />
            </div>
            <div>
                <button
                    type="button"
                    className="new-task-btn text-white bg-[#40A1FC] hover:bg-[#6fb8fc] font-medium rounded-lg text-sm px-3 py-2.5">
                    <img className="stroke-current w-3 side-arrow" src={plus} alt="side arrow" />
                    Add New Task</button>
            </div>
            <Profile />
        </header>
    )
}

export default Header;