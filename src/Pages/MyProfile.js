import { useSelector } from 'react-redux';
import '../App.css';

const Profile = () => {
  const missionList = useSelector((state) => state.missions);
  const missionReserved = missionList.filter((mission) => mission.reserved === true);

  return (
    <div className="profile-page">
      <ul className="missions-profile">
        <h2>My Missions</h2>
        {missionReserved.length === 0
          ? <li className="no-mission">No Missions Reserved</li>
          : missionReserved.map((mission) => (
            <li key={mission.mission_id} className="mission-wrapper">
              <h4 className="name">{mission.mission_name}</h4>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Profile;
