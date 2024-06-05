import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

function Navbar(){
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
      <li className="nav-item dropdown">
      <Dropdown data-bs-theme="dark">
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          More Options
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item  >
          <Link className="nav-link text-muted" to="/Signup">Signup</Link>
          </Dropdown.Item>
          <Dropdown.Item to="/about">
          <Link className="nav-link text-muted" to="/login">Login</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </li>
    </ul>
   
  </div>
</nav>
        </>
    )
}
export default Navbar;