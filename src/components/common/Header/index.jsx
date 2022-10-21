import Profile from '../Profile';
import plus from './../../../assets/plus.svg';
import './style.css';


const Header = ({ setShowModal, setSearch, search }) => {

    const handleInput = ({ target: { value } }) => {
        return setSearch(value)
    }
    return (
        <>
            <header className="header-container pt-4">
                <div className="welcome-text">
                    <h1>Welcome</h1>
                    <p>Take a look for your tasks today</p>
                </div>
                <div>
                    <input
                        onChange={handleInput}
                        value={search}
                        type="text"
                        id="search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for task" />
                </div>
                <button
                    onClick={() => setShowModal((show) => !show)}
                    type="button"
                    className="new-task-btn text-white bg-[#40A1FC] hover:bg-[#6fb8fc] font-medium rounded-lg text-sm px-3 py-2.5">
                    <img className="stroke-current w-3 side-arrow" src={plus} alt="side arrow" />
                    Add New Task
                </button>
                <Profile />
            </header>
        </>
    )
}

export default Header;