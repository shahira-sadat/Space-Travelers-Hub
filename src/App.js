import React from 'react';
import {
  BrowserRouter as Router, Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Rockets from './components/Rockets';
import Dragons from './components/Dragons';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

function App() {
  // className={({ isActive }) => (isActive ? 'active' : 'inactive')}
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="Dragons" element={<Dragons />} />
          <Route path="Missions" element={<Missions />} />
          <Route path="MyProfile" element={<MyProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
