import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import getReservation from './components/GetRockets';
import { setReservation } from './redux/rockets/rockets';
import Nav from './components/Nav';
import MyProfile from './components/MyProfile';
import store from './redux/configureStore';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import { loadMissions } from './redux/missions/missions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMissions());
  }, [dispatch]);

  useEffect(async () => {
    const data = await getReservation();
    store.dispatch(setReservation(data));
  }, []);

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
