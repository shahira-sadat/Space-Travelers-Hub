import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rockets';
import Rockets from '../components/Rockets';

function RocketsList() {
// Use useSelector() to select the state slices and render lists of rockets in corresponding routes
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rockets.length) dispatch(getRockets());
  }, []);

  return (
    <div className="rockets-container">
      <ul className="rockets-list">
        {rockets.map((rocket) => (
          <li key={rocket.id}>
            <Rockets rocket={rocket} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RocketsList;
