import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";

import Project from "./components/Project";

import Login from "./components/Login";
import Createproject from "./components/Createproject";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./Usercontext";
import Home from "./components/Home";
import Edittasktable from "./components/Edittasktable";
import axios from "axios";
import { env } from "./Config";
import Empcard from "./components/Empcard";
import CompletedProject from "./components/CompletedProject";
import Teamdetails from "./components/Teamdetails";
import Recycle from "./components/Recycle";

function App() {
  const [projectdata, setprojectdata]= useState([]);
  const [cprojectdata, setcprojectdata]= useState([]);
useEffect(()=>{
  loadData()
  loadDatac()  
},[])
 

let loadData=async ()=>{
   try {
    let projectdataa = await axios.get(`${env.api}/liveprojects`,{
      headers: {'authorization' : window.localStorage.getItem("app-token")}
    });

    console.log(projectdataa)
   setprojectdata(projectdataa.data);
   } catch (error) {
    console.log(error)
   }
}

let loadDatac=async ()=>{
  try {
   let cprojectdataa = await axios.get(`${env.api}/completedprojects`,{
    headers: {'authorization' : window.localStorage.getItem("app-token")}
  });
  setcprojectdata(cprojectdataa.data);
  } catch (error) {
   console.log(error)
  }
}



  return (
    <BrowserRouter>
      <UserProvider value={{ projectdata, cprojectdata, setprojectdata, setcprojectdata }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="teamdetails" element={<Empcard />} />
            <Route path="create-project" element={<Createproject />} />
            <Route path="project/:id" element={<Project />} />
            <Route path="completedproject/:id" element={<CompletedProject />} />
            <Route path="recycle" element={<Recycle />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
