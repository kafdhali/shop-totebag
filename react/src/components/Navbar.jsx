import logo from "../assets/logo.png";

const Navbar = () => (
  <div className="navbar">
    <div className="nav-logo">
      <img src={logo} alt="" />
      <p>SHOPPER</p>
    </div>
    <ul className="nav-menu">
      <li>Typo</li>
      <li>Graphics</li>
      <li>Contact</li>
    </ul>
  </div>
);

export default Navbar;
