import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import NotificationsContext from '../../../context/Notifications';
import { sign } from '../../../redux/feature/userSlice';
import google from './../../../assets/google.svg';
import facebook from './../../../assets/facebook.svg';
import logo from './../../../assets/login-logo.png';
import './style.css';
import { Success } from '../../common';
import logoutUser from '../../../utils/logout';

const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" })
    const [inputError, setInputError] = useState({ emailError: "", passwordError: "" });
    const [error, setError] = useState('');
    const [, setCookie] = useCookies(['user']);
    const navigate = useNavigate();
    const { setTitle } = useContext(NotificationsContext);
    const dispatch = useDispatch();
    const { userData } = useSelector((state) => state.user);

    const validator = (inputField, input) => {
        let isValid = true;
        switch (inputField) {
            case 'email':
                let emailValid = input.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                let emailMsg = emailValid ? '' : 'Invalid Email';
                setInputError((error) => {
                    return { ...error, emailError: emailMsg }
                });
                if (emailMsg) {
                    isValid = false;
                }
                break;
            case 'password':
                let passwordValid = input.length >= 5;
                let passwordMsg = passwordValid ? '' : 'Password should be at least 5 characters';
                setInputError((error) => {
                    return { ...error, passwordError: passwordMsg }
                });
                if (passwordMsg) {
                    isValid = false;
                }
                break;
            default:
        }
        return isValid
    }
    const handleInput = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    const loginUser = async () => {
        try {
            let email = validator('email', user.email);
            let password = validator('password', user.password);
            if (email && password) {
                const { data: { data: { user: loggedUser, token, message } } } = await axios.post('login', {
                    email: user.email,
                    password: user.password
                });
                dispatch(sign({ ...loggedUser, token }));
                setCookie("user", token, {
                    path: "/"
                });
                setTitle(message)
                return navigate('/');
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
                        <h1 className="login-title">Login</h1>
                        <span className="login-description">Login to your to do account</span>
                        <div className="flex gap-4">
                            <button
                                type="button"
                                className="flex items-center gap-3 py-2 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                <img src={google} alt="google" />
                                Sign in with Google</button>
                            <button
                                type="button"
                                className="flex items-center gap-3 py-2 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                <img src={facebook} alt="facebook" />
                                Sign in with Facebook</button>
                        </div>
                        <div className="flex items-center justify-center text-center">
                            <hr />
                            <span className="or">OR</span>
                            <hr />
                        </div>
                        <div>
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
                                <p className=" text-red-700 font-light">
                                    {inputError.emailError || null}
                                </p>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                                <input
                                    name="password"
                                    onChange={handleInput}
                                    type="password"
                                    id="password"
                                    className="peer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                                <p className=" text-red-700 font-light">
                                    {inputError.passwordError || null}
                                </p>
                            </div>
                            <a href="/" className="self-start hover:underline text-[#6FB8FC]">Forgot password?</a>
                        </div>
                        <button
                            onClick={() => loginUser()}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 w-40"
                            type="submit"
                        >
                            Login
                        </button>
                        <span>
                            Don't Have An Account?
                            <a href="/" className="self-start hover:underline text-[#6FB8FC]"> Register Here</a>
                        </span>
                    </div>}
            </div>
            <Success />
        </>
    )
}

export default Login;