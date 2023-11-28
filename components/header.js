import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="flex justify-between shadow-sm bg-slate-600">
        <div className="flex p-3">
          <div className="w-24">
           <Link to="/"><img className="bg-slate-600" src={logo}/></Link>
          </div>
          <div className="brand-name flex pl-5">
            
              <h3 className="font-semibold text-4xl pt-4 " ><Link to='/' className="no-underline" >Sabki Mandi </Link></h3>
          </div>
        </div>
        <div className="flex justify-between text-4xl p-2">
          <ul className="flex pt-4">
            <Link to="/Cart"><li className="m-2">Cart</li></Link>
            <Link to="/Account"><li className="m-2">Account</li></Link>
            <Link to="/About"><li className="m-2">About Us</li></Link>
            <Link to="/Contact"><li className="m-2">Contact</li></Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
