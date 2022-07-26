import Home from './components/Home';
import Search from './components/Search';
import Tracker from './components/Tracker';
import NavBar from './components/NavBar';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar />
      <div className='main-body'>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/search" element={<Search />} />

        <Route path="/tracker" element={<Tracker />} />

      </Routes>
      </div>
    </Router>
  );
}

export default App;
