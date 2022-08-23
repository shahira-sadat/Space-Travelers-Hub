import logo from '../assets/images/planet.png';

const Nav = () => (
  <>
    <nav className="nav--bar">
      <div className="nav--bar--logo">
        <img className="logo--img" src={logo} alt="logo" />
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h1 className="nav--title">Space Travelers' Hub</h1>
      </div>
    </nav>
  </>
);

export default Nav;
