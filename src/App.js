import { Routes, Route } from 'react-router-dom'
import "antd/dist/antd.compact.min.css";

import Signin from './components/Signin';
import Posts from './components/Posts';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Dummy from './components/Dummy';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='home' element={<Dummy title="Home" />} />
          <Route path='questions' element={<Dummy title="Questions" />} />
          <Route path='quiz' element={<Dummy title="Quiz" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
