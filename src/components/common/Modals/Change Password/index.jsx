import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useRef } from "react";
import Notifications from "../../../../context/Notifications";
import useClickOutside from "../../../../hooks/useOnClickOutside";


const ChangePassword = ({ show, setShow }) => {
    const [password, setPassword] = useState({
        password: "",
        confirmPassword: ""
    })

    const [matchError, setMatchError] = useState(false);
    const [lengthError, setLengthError] = useState(false);

    const { setTitle } = useContext(Notifications);

    const handleInput = ({ target: { name, value } }) => {
        setPassword({ ...password, [name]: value });
    }

    const memPassword = useMemo(() => {
        return password.password;
    }, [password.password])


    useEffect(() => {
        if (memPassword !== password.confirmPassword) {
            setMatchError(true)
        }
        else {
            setMatchError(false)
        }
    }, [password.confirmPassword, memPassword])

    useEffect(() => {
        setMatchError(false)
        setLengthError(false)
    }, [show])

    const submitChange = async () => {
        if (password.password.length < 5) {
            setLengthError(true)
        } else {
            const { data: { message } } = await axios.post('/changePassword', password);
            setTitle(message)
            setShow(false)
        }
    }

    const passwordRef = useRef();
    useClickOutside(passwordRef, () => setShow(false))

    return (
        show && <div id="medium-modal" tabIndex="-1" className="backdrop overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center items-center">
            <div ref={passwordRef} className="relative p-4 w-full max-w-lg h-full md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex justify-between items-center p-5 rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            Change your password
                        </h3>
                        <button
                            onClick={() => setShow(false)}
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="medium-modal"
                        >
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">
                                </path>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-5">
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">New password</label>
                            <input
                                onChange={handleInput}
                                name="password"
                                type="password"
                                id="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
                            <input
                                onChange={handleInput}
                                name="confirmPassword"
                                type="password"
                                id="confirm_password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                        </div>
                        {matchError && <p className="pb-3 text-red-700 font-light">
                            * Password doesnt match
                        </p>}
                        {lengthError && <p className="pb-3 text-red-700 font-light">
                            * Password should be at least 5 characters
                        </p>}
                    </div>
                    <div className="flex items-center px-5 pb-5 space-x-2 rounded-b border-gray-200 dark:border-gray-600 justify-end">
                        <button
                            onClick={() => setShow(false)}
                            type="button"
                            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                            data-modal-toggle="medium-modal">
                            Cancel</button>
                        <button
                            onClick={submitChange}
                            type="button"
                            className="text-[#ECF6FF] bg-[#40A1FC] focus:ring-4 focus:outline-none focus:ring-gray-200 hover:text-black-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            data-modal-toggle="medium-modal">
                            Change
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;