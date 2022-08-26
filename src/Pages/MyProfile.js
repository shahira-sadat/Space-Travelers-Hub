import { useDispatch, useSelector } from 'react-redux';
import { reserveMission } from '../redux/missions/missions';
import { reserve } from '../redux/rockets/rockets';
import '../App.css';

const Profile = () => {
  const dispatch = useDispatch();
  const missionList = useSelector((state) => state.missions);
  const missionReserved = missionList.filter((mission) => mission.reserved === true);
  const rockets = useSelector((state) => state.rockets);
  const rocketsReserved = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="profile-page">
      <ul className="missions-profile">
        <h2>My Missions</h2>
        {missionReserved.length === 0
          ? <li className="no-mission">No Missions Reserved</li>
          : missionReserved.map((mission) => (
            <li key={mission.mission_id} className="mission-wrapper">
              <h4 className="name">
                {mission.mission_name}
                <a href={mission.wikipedia} target="blank" className="wikipedia">
                  Learn more...
                </a>
              </h4>
              <button
                className={mission.reserved ? 'leave-mission' : 'join'}
                type="button"
                onClick={() => dispatch(reserveMission({ mission }))}
              >
                {mission.reserved ? 'Cancel Mission' : 'Join Mission' }
              </button>
            </li>
          ))}
      </ul>
      <ul className="missions-profile">
        <h2>My Rockets</h2>
        {rocketsReserved.length === 0
          ? <li className="no-mission">No Rockets Reserved</li>
          : rocketsReserved.map((rocket) => (
            <li key={rocket.id} className="mission-wrapper">
              <h4 className="name">
                {rocket.rocket_name}
                <a href={rocket.wikipedia} target="blank" className="wikipedia">
                  Learn more...
                </a>
              </h4>
              <button
                className={rocket.reserved ? 'leave-mission' : 'join'}
                type="button"
                onClick={() => dispatch(reserve({ rocket }))}
              >
                {rocket.reserved ? 'Cancel Rocket' : 'Join Rocket' }
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Profile;
