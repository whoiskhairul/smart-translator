import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import TranslatorPage from './components/TranslatorPage';
import Navbar from './components/NavBar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/translate' element= {<TranslatorPage />} />
        <Route path='/' element={<TranslatorPage/>} />

      </Routes>
    </Router>
  )
}

export default App
