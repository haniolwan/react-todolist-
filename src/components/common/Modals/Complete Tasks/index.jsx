import { useContext, useRef } from "react";
import axios from "axios";
import Notifications from "../../../../context/Notifications";
import useClickOutside from "../../../../hooks/useOnClickOutside";
import { useSelector } from "react-redux";
import { selectTranslations } from "../../../../redux/feature/i18nSlice";

const CompleteTasks = ({ show, setShowCompleteModal, setTodos }) => {
    const { setTitle } = useContext(Notifications);
    const completeAll = async () => {
        try {
            const { data: { message } } = await axios.post('/todo');
            setTodos((prevTodos) => prevTodos.map((todo) => {
                todo.state = 'done';
                return todo;
            }))
            setTitle(message)
            setShowCompleteModal((visible) => !visible);
        } catch (error) {
            setTitle(error)
        }
    }
    const completeRef = useRef();
    useClickOutside(completeRef, () => setShowCompleteModal(false))

    const t = useSelector(selectTranslations)

    return (
        show && <div id="medium-modal" tabIndex="-1" className="backdrop overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center items-center">
            <div ref={completeRef} className="relative p-4 w-full max-w-lg h-full md:h-auto">
                <div className="complete-head relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="complete-title flex justify-between items-center p-5 rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            {t.complete.title}
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="medium-modal"
                            onClick={() => setShowCompleteModal(false)}>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="px-5 pb-5 space-y-5">
                        <p>{t.complete.confirm}</p>
                    </div>
                    <div className="complete-btns flex items-center px-5 pb-5 space-x-2 rounded-b border-gray-200 dark:border-gray-600 justify-end">
                        <button
                            type="button"
                            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                            data-modal-toggle="medium-modal"
                            onClick={() => setShowCompleteModal(false)}>
                            {t.complete.cancel}
                            </button>
                        <button
                            type="button"
                            className="text-[#ECF6FF] bg-[#40A1FC] focus:ring-4 focus:outline-none focus:ring-gray-200 hover:text-black-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            data-modal-toggle="medium-modal"
                            onClick={() => completeAll()}>
                            {t.complete.complete}
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompleteTasks;