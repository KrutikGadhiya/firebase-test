import { Routes, Route } from 'react-router-dom'

import Signin from './components/Signin';
import Posts from './components/Posts';
import SignUp from './components/SignUp'

import "antd/dist/antd.compact.min.css";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<>
          <Signin />
          <Posts />
        </>} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
