import './style.css'

const Dropdown = ({ clickedId, taskId, setClickId }) => {
    return (
        (clickedId === taskId) &&
        (<div id="dropdown" className={`shadow-2xl relative z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 bg-gray rounded-3xl`}>
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 rounded-3xl" aria-labelledby="dropdownDefault">
                <li onClick={setClickId()}>
                    <span className="block py-2 px-4 border-b-2">X</span>
                </li>
                <li>
                    <a href="/" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Complete</a>
                </li>
                <li>
                    <a href="/" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                </li>
                <li>
                    <a href="/" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</a>
                </li>
            </ul>
        </div >)
    )
}

export default Dropdown;