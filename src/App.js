import Signin from './components/Signin';

import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <div className='justify-center self-center mt-6 text-center signin'>
            <Signin />
          </div>
        }
      />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}

export default App;
