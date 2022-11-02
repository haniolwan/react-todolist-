import { Route, Routes, useNavigate } from "react-router-dom";

const Settings = () => {
    const navigate = useNavigate();
    return (
        <section>
            <h1>Settings</h1>
            <div>
                <ul className="flex">
                    <li className="mr-6">
                        <a className="text-blue-500 hover:text-blue-800" href="/settings/s"
                            onClick={
                                (event) => {
                                    event.preventDefault();
                                    navigate('/settings/s')
                                }
                            }
                        >Active</a>
                    </li>
                    <li className="mr-6">
                        <a className="text-blue-500 hover:text-blue-800" href='/'>Link</a>
                    </li>
                    <li className="mr-6">
                        <a className="text-blue-500 hover:text-blue-800" href='/'>Link</a>
                    </li>
                    <li className="mr-6">
                        <a className="text-gray-400 cursor-not-allowed" href='/'>Disabled</a>
                    </li>
                </ul>
                <Routes>
                    <Route path="/settings" element={<div>Statistics Page</div>} />
                </Routes>
            </div>
        </section>
    );
}

export default Settings;