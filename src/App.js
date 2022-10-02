import './App.css';
import './index.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Login from './components/Pages/Login';
// import Home from './components/Pages/Home';

const App = () => {


  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={
          <h1>
            Page Not Found
          </h1>} />
      </Routes>
    </>
  );
}

export default App;
