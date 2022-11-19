import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import logo from './../../../assets/login-logo.png';
import { Success } from '../../common';
import logoutUser from '../../../utils/logout';

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { userData } = useSelector((state) => state.user);

    const handleInput = ({ target: { value } }) => {
        setEmail(value)
    }

    const resetPassword = async () => {
        try {
            let isValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            if (isValid) {
                const {data:{message}} = await axios.post('/password/reset', { email });
                setSuccess(message)
            } else {
                setError('Make sure your input is correct')
            }
        }
        catch ({ response: { data: { message } } }) {
            setError(message)
        }
    }

    return (
        <>
            <div className="login column-2 flex justify-between">
                <div className="login-header-image flex flex-col justify-center items-center">
                    <img src={logo} alt="login logo" />
                    <h1 className="login-image-title">TO DO LIST</h1>
                    <span className="login-image-description">WILL DO IT</span>
                </div>
                {Object.keys(userData).length !== 0 ? <div className="login-content flex flex-col justify-center items-center">
                    <h1 className="mb-4 font-bold capitalize">{userData.name} is still logged in</h1>
                    <div className="profile h-20 w-20 rounded-r	border">
                        <img src='https://i.pinimg.com/736x/b0/e2/f5/b0e2f54d141a70986beac46962394651.jpg' alt="profile IMG" />
                    </div>
                    <Link className="text-blue-700 mt-2" to='/'>Get back home</Link>
                    <Link className="text-blue-700 mt-2" to='/logout' onClick={logoutUser}>Logout</Link>
                </div> :
                    <div className="login-content flex flex-col justify-center items-center">
                        <h1 className="login-title">Reset Password</h1>
                        <span className="login-description">We'll send you a reset email</span>
                        <div>
                            <p className="pb-3 text-green-700 font-light">
                                {success}
                            </p>
                            <p className="pb-3 text-red-700 font-light">
                                {error}
                            </p>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">Email</label>
                                <input
                                    name="email"
                                    onChange={handleInput}
                                    type="email"
                                    id="email"
                                    className="peer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                            </div>
                        </div>
                        <button
                            onClick={() => resetPassword()}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mb-4 w-40"
                            type="submit">
                            Send Reset Code
                        </button>
                        <span>
                            Get back home
                            <Link to={'/signin'} className="self-start hover:underline text-[#6FB8FC]"> Login here</Link>
                            <Link to={'/signup'} className="self-start hover:underline text-[#6FB8FC]"> Register here</Link>
                        </span>
                    </div>
                }
            </div>
            <Success />
        </>
    )
}

export default ForgotPassword;