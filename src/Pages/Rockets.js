import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rockets';
import RocketsCard from '../components/RocketCard';

function RocketsList() {
// Use useSelector() to select the state slices and render lists of rockets in corresponding routes
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rockets.length) dispatch(getRockets());
  }, []);

  return (
    <>
      {rockets.map((rocket) => <RocketsCard key={rocket.rocketId} rocket={rocket} />)}
    </>
  );
}

export default RocketsList;
