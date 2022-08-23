import { Link } from 'react-router-dom';
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
        <Link to="/" className="nav--link">Rockets</Link>
        <Link to="Dragons" className="nav--link" href="/">Dragons</Link>
        <Link to="Missions" className="nav--link" href="/">Missions</Link>
        <Link to="MyProfile" className="nav--link" href="/">My Profile</Link>
      </div>
    </nav>
  </>
);

export default Nav;
