import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import Missions from './Pages/Missions';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="MyProfile" element={<MyProfile />} />
          <Route path="Missions" element={<Missions />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
