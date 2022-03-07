import { Routes, Route } from 'react-router-dom'

import Signin from './components/Signin';
import Posts from './components/Posts';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

import "antd/dist/antd.compact.min.css";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
