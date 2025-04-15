
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Pavlo from './components/Pavlo/Pavlo';
import HomePage from './components/pages/HomePage';
import VanyaPage from './components/pages/VanyaPage';
import DenisPage from './components/pages/DenisPage';
import NavMain from './components/navigation/NavMain';


function App() {
  return (
    <div className='App'>
      <NavMain />
      <Routes>
          <Route path='/vanya' element={<VanyaPage />} />
          <Route path='/denis' element={<DenisPage />} />
          <Route path='/pavlo' element={<Pavlo />} />
          <Route path='/' element={<HomePage />}/>
      </Routes>
    </div>
  );
}

export default App;
