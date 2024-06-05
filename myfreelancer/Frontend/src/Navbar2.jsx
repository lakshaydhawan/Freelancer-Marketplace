import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

function Navbar2(){
    return(
        <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand"  to="/">
    <h3 style={{marginLeft:10,color:"dimgrey"}}>TASKLA</h3>
    </Link>
  

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact Us</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/cp">Change Password</Link>
      </li>
      <li className="nav-item dropdown">
      <Link className="nav-link" to="/">Log Out</Link>
      </li>
    </ul>
   
  </div>
</nav>
        </>
    )
}
export default Navbar2;