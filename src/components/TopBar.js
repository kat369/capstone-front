import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function TopBar({buttonclick}) {
    const[open, setopen]= useState(false)
  return (
    <div>
        <nav className=" sb-topnav navbar navbar-expand navbar-dark bg-dark">
            
            <a className="navbar-brand ps-3" href="index.html">Project Manager</a>
            
            <button onClick={()=>{buttonclick()}} className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
            
            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
                </div>
            </form>
            
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <a onClick={()=>setopen(!open)} className={open? "nav-link dropdown-toggle show" : "nav-link dropdown-toggle"} id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded={open? "true" : "false"}><i className="fas fa-user fa-fw"></i></a>
                    <ul className={open? "dropdown-menu dropdown-menu-end show" : "dropdown-menu dropdown-menu-end"} data-bs-popper={open? "none" : ""} aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#!">Settings</a></li>
                        <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to={'/'}>Logout</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default TopBar