import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="MyProfile" element={<MyProfile />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
