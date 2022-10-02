import google from './../../../assets/google.svg';
import facebook from './../../../assets/facebook.svg';
import background from './../../../assets/login-background.png';
import logo from './../../../assets/login-logo.png';

import './style.css';

const Login = () => {
    return (
        <>
            <div className="login column-2 flex justify-between">
                <div className="login-header-image flex flex-col justify-center items-center">
                    <img src={logo} alt="login logo" />
                    <h1 className="login-image-title">TO DO LIST</h1>
                    <span className="login-image-description">WILL DO IT</span>
                </div>
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
                        <div className="mb-6">
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">Email</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                        </div>
                        <div className="mb-6">
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                        </div>
                        <a href="/" className="self-start hover:underline text-[#6FB8FC]">Forgot password?</a>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 w-40">
                        Login
                    </button>
                    <span>
                        Don't Have An Account?
                        <a href="/" className="self-start hover:underline text-[#6FB8FC]"> Register Here</a>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Login;