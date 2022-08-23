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
        <a className="nav--link" href="/">Rockets</a>
        <a className="nav--link" href="/">Missions</a>
        <a className="nav--link" href="/">My Profile</a>
      </div>
    </nav>
  </>
);

export default Nav;
