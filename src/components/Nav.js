import logo from '../assets/images/planet.png';

const Nav = () => (
  <>
    <header>
      <img src={logo} alt="logo" />
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h1>Space Travelers' Hub</h1>
    </header>
  </>
);

export default Nav;
