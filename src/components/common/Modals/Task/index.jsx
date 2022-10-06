import close from './../../../../assets/close.svg';
import bell from './../../../../assets/bell.svg';
import './style.css';
const TaskModal = ({ show, hideModal }) => {

    return (
        <div
            className={`modal fade fixed outline-none overflow-x-hidden overflow-y-auto  ${show || 'hidden'}`}
            id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog relative w-auto pointer-events-none">
                <div
                    className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div
                        className="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md">
                        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
                            Add New Task
                        </h5>
                        <img src={close} alt="close" onClick={hideModal} />
                    </div>
                    <div className="modal-body relative p-4">
                        <div className="flex flex-col gap-3">
                            <span>
                                Task Description
                            </span>
                            <input type="text"
                                id="first_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter Task Description"
                            />
                        </div>
                        <div className="flex flex-col gap-3 mt-2">
                            <span>Task Priority</span>
                            <div className="flex justify-between gap-3">
                                <label className="check-box-container">
                                    <div>
                                        <span className='flex items-center text-lg'>Urgent</span>
                                    </div>
                                    <input id="status" type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="check-box-container">
                                    <div>
                                        <span className='text-lg flex items-center'>Important</span>
                                    </div>
                                    <input id="status" type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>

                                <label className="check-box-container">
                                    <div>
                                        <span className='text-lg flex items-center'>Normal</span>
                                    </div>
                                    <input id="status" type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        {/* Task Color */}
                        <div className="flex flex-col gap-3">
                            <span>Task Color</span>
                            <div className="flex justify-start gap-5">
                                <div className="flex mr-4">
                                    <input id="red-radio" type="radio" value="" name="colored-radio" className="w-5 h-5 text-[#FF0000]-900 bg-gray-100 border-gray-300 focus:ring-[#FF0000]-500 dark:focus:ring-[#FF0000]-600 dark:ring-offset-gray-800 accent-[#FF0000]" />
                                </div>
                                <div className="flex items-center mr-4">
                                    <input id="blue-radio" type="radio" value="" name="colored-radio" className="w-5 h-5 text-[blue]-900 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 accent-blue" />
                                </div>
                                <div className="flex items-center mr-4">
                                    <input id="orange-radio" type="radio" value="" name="colored-radio" className="yellow-radio w-5 h-5 text-[blue]-900 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 accent-blue" />
                                </div>
                                <div className="flex items-center mr-4">
                                    <input id="green-radio" type="radio" value="" name="colored-radio" className="green-radio w-5 h-5 text-green-900 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800" />
                                </div>
                                <div className="flex items-center mr-4">
                                    <input id="violit-radio" type="radio" value="" name="colored-radio" className="violit-radio w-5 h-5 text-[#FF0000]-900 bg-gray-100 border-gray-300 focus:ring-[#FF0000]-500 dark:focus:ring-[#FF0000]-600 dark:ring-offset-gray-800" />
                                </div>
                            </div>
                        </div>
                        {/* Task Category */}
                        <div className="flex flex-col gap-3 mt-2">
                            <span>Task Category</span>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option defaultValue={1}>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        {/* Task Date And Time */}
                        <div className="flex flex-col gap-3 mt-2">
                            <span>Date and Time</span>
                            <div className="flex gap-3">
                                <div className="relative">
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                    </div>
                                    <input datepicker datepicker-autohide type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                                </div>
                                <div className="relative">
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                    </div>
                                    <input datepicker datepicker-autohide type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                                </div>
                            </div>
                        </div>
                        {/* Notification */}
                        <div className="mt-2 flex justify-between items-start">
                            <div className="flex gap-3 items-center">
                                <span>Get Notification</span>
                                <img className="h-5 w-5" src={bell} alt="bell" />
                            </div>
                            <div>
                                <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
                                    <input type="checkbox" value="" id="default-toggle" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 mt-2">
                            <span>Receive a notification when the task is due</span>
                            <input type="text"
                                id="first_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter Task Description"
                            />
                        </div>
                    </div>
                    <div
                        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 rounded-b-md">
                        <button
                            type="button"
                            className="inline-block px-6 py-2.5 text-dark font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-white-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                            data-bs-dismiss="modal"
                            onClick={hideModal}
                        >Cancel</button>
                        <button type="button"
                            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                            Add Task</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskModal;