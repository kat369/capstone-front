import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../Usercontext";
import Createproject from "./Createproject";

function SideBar() {
const userContext = useContext(UserContext)

  return (
    <div>
      <div id="layoutSidenav_nav">
        <nav
          className="sb-sidenav accordion sb-sidenav-dark"
          id="sidenavAccordion"
        >
          <div className="sb-sidenav-menu">
            <div className="nav">
              <div className="sb-sidenav-menu-heading">Core</div>
              <Link className="nav-link" to={"/home/dashboard"}>
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                Dashboard
              </Link>
              <Link className="nav-link" to={"/home/teamdetails"}>
                <div className="sb-nav-link-icon">
                <i className="fa-sharp fa-solid fa-people-group"></i>
                </div>
                Team Details
              </Link>
              <Createproject/>

              <div className="sb-sidenav-menu-heading">Hub</div>
              <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Live Projects
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    {
                                        userContext.projectdata.map((proj)=>{
                                            return <Link className="nav-link" to={`/home/project/${proj._id}`}>{proj.title}</Link>
                                        })
                                    }
                                    
                                </nav>
                            </div>
             
              <a
                className="nav-link collapsed"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePages"
                aria-expanded="false"
                aria-controls="collapsePages"
              >
                <div className="sb-nav-link-icon">
                  <i className="fas fa-book-open"></i>
                </div>
                Completed projects
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down"></i>
                </div>
              </a>
              <div
                className="collapse"
                id="collapsePages"
                aria-labelledby="headingTwo"
                data-bs-parent="#sidenavAccordion"
              >
                <nav
                  className="sb-sidenav-menu-nested nav accordion"
                  id="sidenavAccordionPages"
                >
                  {
                                        userContext.cprojectdata.map((proj)=>{
                                            return <Link className="nav-link" to={`/home/completedproject/${proj._id}`}>{proj.title}</Link>
                                        })
                                    }
                </nav>
              </div>
              <div className="sb-sidenav-menu-heading">Support</div>
              
              <Link className="nav-link" to={`/home/recycle`}>
                <div className="sb-nav-link-icon">
                  <i className="fas fa-table"></i>
                </div>
                Recycle Bin
              </Link>
            </div>
          </div>
          <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            <div>kathir</div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
