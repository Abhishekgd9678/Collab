import { Link } from "react-router-dom";
import logo from "../images/logo.png"
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <div className="logo">
           <Link to="/"><img className="logo-image" src={logo}/></Link>
          </div>
          <div className="brand-name">
            <h3>Sabzi Mandi</h3>
          </div>
        </div>
        <div className="header-right">
          <ul className="header-links">
            <Link to="/Cart"><li className="header-link">Cart</li></Link>
            <Link to="/Account"><li className="header-link">Account</li></Link>
            <Link to="/About"><li className="header-link">About Us</li></Link>
            <Link to="/Contact"><li className="header-link">Contact</li></Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
