import { NavLink } from 'react-router-dom';
import logo from '../assets/images/planet.png';

const Nav = () => (
  <>
    <nav className="nav--bar">
      <div className="nav--bar--logo">
        <img className="logo--img" src={logo} alt="logo" />
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h1 className="nav--title">Space Travelers' Hub</h1>
      </div>
      <div className="nav--bar--links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active nav--link' : 'inactive nav--link')}
        >
          Rockets
        </NavLink>
        <NavLink
          to="/Missions"
          className={({ isActive }) => (isActive ? 'active nav--link' : 'inactive nav--link')}
        >
          Missions
        </NavLink>
        <NavLink
          to="/MyProfile"
          className={({ isActive }) => (isActive ? 'active nav--link' : 'inactive nav--link')}
        >
          My Profile
        </NavLink>
      </div>
    </nav>
  </>
);

export default Nav;
