import React from "react";
import { useState } from "react";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

function Home() {
  const [open, setopen] = useState(false);
  let handlesidebar = () => {
    setopen(!open);
  };

  return (
    <>
      <div
        className={!open ? "sb-nav-fixed" : "sb-nav-fixed sb-sidenav-toggled"}
      >
        <TopBar buttonclick={handlesidebar} />
        <div id="layoutSidenav">
          <SideBar />
          <div id="layoutSidenav_content">
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
