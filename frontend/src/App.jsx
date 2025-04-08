import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import TranslatorPage from './components/TranslatorPage';
import Navbar from './components/NavBar';
import NotFound from './components/NotFound'; // Create this component for 404 pages

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/translate/" element={<TranslatorPage />} />
        {/* <Route path="/" element={<TranslatorPage />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
