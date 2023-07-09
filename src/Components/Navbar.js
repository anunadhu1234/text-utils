
import logo from './images/logo.png';
import {Link} from 'react-router-dom';

function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'light'?'light':'dark'} bg-${props.mode === 'light'?'light':'dark'}`}>
  <div className="container-fluid">
  <Link className="navbar-brand" to="/">
      <img src={logo} alt="" width="30" height="24"/>
    </Link>
    <Link className="navbar-brand" to="/">Text Utils</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${window.location.pathname === '/'?'active':''}`} id='home' aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${window.location.pathname === '/about'?'active':''}`} id="about" to="/about">About Us</Link>
        </li>
        </ul>

        <input className="form-check-input" type="checkbox" style={{visibility:window.location.pathname==='/about'?'hidden':'visible'}} onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode === 'light'?'black':'white'}`} style={{visibility:window.location.pathname==='/about'?'hidden':'visible'}}  htmlFor="flexSwitchCheckDefault">{props.mode === 'light'?'Enable':'Disable'} Dark Mode</label>
      
    </div>
    </div>
  
</nav>
  )
}

export default Navbar