
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Denis from './components/Denis/Denis';
import Pavlo from './components/Pavlo/Pavlo';
import Vanya from './components/Vanya/Vanya';
import HomePage from './components/pages/HomePage';


function App() {
  return (
    <div className='App'>
      <Routes>
          <Route path='/vanya' element={<Vanya />} />
          <Route path='/denis' element={<Denis />} />
          <Route path='/pavlo' element={<Pavlo />} />
          <Route path='/' element={<HomePage />}/>
      </Routes>
    </div>
  );
}

export default App;
