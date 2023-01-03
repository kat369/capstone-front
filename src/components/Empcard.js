import axios from "axios";
import React, { useEffect, useState } from "react";
import { env } from "../Config";
import Profile from "./Profile";

function Empcard() {

const[emp, setemp]=useState([])

useEffect(()=>{
  Getdata()
},[])

let Getdata =async () => {
  let empdata =await axios.get(`${env.api}/employees`)
  setemp(empdata.data)
}

  return (
    <>
      <div className="container-fluid">
        <div className="row mt-3">
          
           {
            emp.map((data)=>{
              return <Profile data={data}/>
            })
           }
         
        </div>
      </div>
    </>
  );
}

export default Empcard;
