import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">{props.tittle}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/Home">{props.hometext} <span className="sr-only">(current)</span></a>
      </li>
     

      <li className="nav-item">
      <a className="nav-link" href="/About" >{props.abouttext} </a>
      </li>
      
    </ul>
   { /*<form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
  </form>*/}
   < div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}  `}>
  <input className="form-check-input" onClick ={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Dark Mode</label>
</div>
  </div>
</nav>
  )
}
Navbar.propTypes = {tittle: PropTypes.string,
hometext: PropTypes.string}

Navbar.defaultProps = {
    tittle: 'KoriUtils',
    abouttext:'About',
}