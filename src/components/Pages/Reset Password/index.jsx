import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import logo from './../../../assets/login-logo.png';
import { Success } from '../../common';


const ResetPassword = () => {
    const [searchParams] = useSearchParams();
    const [password, setPassword] = useState({
        password: '',
        confirmPassword: ''
    })
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleInput = ({ target: { name, value } }) => {
        setPassword({ ...password, [name]: value })
    }

    const validatePassword = () => {
        if (password.password !== password.confirmPassword) {
            setError('Password must match');
            return false;
        }
        if (password.password.length < 5) {
            setError('Password length must be atleast 5 characters');
            return false;
        }
        return true;
    }

    const resetPassword = async () => {
        try {
            if (validatePassword()) {
                const token = searchParams.get('token');
                const { data: { message } } = await axios.post(`reset/?token=${token}`, {
                    password: password.password,
                    confirmPassword: password.confirmPassword
                });
                setSuccess(message)
                setTimeout(() => {
                    navigate('/signin')
                }, 1500)
            }
        } catch ({ response: { data: { message } } }) {
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
                <div className="login-content flex flex-col justify-center items-center">
                    <h1 className="login-title">Reset Password</h1>
                    <span className="login-description">Change to your new password</span>
                    <div>
                        <p className="pb-3 text-green-700 font-light">
                            {success}
                        </p>
                        <p className="pb-3 text-red-700 font-light">
                            {error}
                        </p>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">Password</label>
                            <input
                                name="password"
                                onChange={handleInput}
                                type="password"
                                id="password"
                                className="peer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">Confirm Password</label>
                            <input
                                name="confirmPassword"
                                onChange={handleInput}
                                type="password"
                                id="confirmPassword"
                                className="peer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required />
                        </div>
                    </div>
                    <button
                        onClick={() => resetPassword()}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mb-4 w-40"
                        type="submit">
                        Reset Password
                    </button>
                    <span>
                        Get back home
                        <Link to={'/signin'} className="self-start hover:underline text-[#6FB8FC]"> Login here</Link>
                        <Link to={'/signup'} className="self-start hover:underline text-[#6FB8FC]"> Register here</Link>
                    </span>
                </div>
            </div>
            <Success />
        </>
    )
}

export default ResetPassword;