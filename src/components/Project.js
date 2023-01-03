import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Bucket from "./Bucket";
import { env } from "../Config";
import axios from "axios";
import Createtask from "./Createtask";

import { Link } from "react-router-dom";
import Createbucket from "./Createbucket";
import UserContext from "../Usercontext";
function Project() {
  const userContext = useContext(UserContext)

  let params = useParams();

  const [buck, setbuck] = useState({});

  const [para, setpara] = useState("");
  if (para !== params.id) {
    setpara(params.id);
  }
  useEffect(() => {
    loadData();
  }, [para]);

  let loadData = async () => {
    try {
      let bucketdata = await axios.get(`${env.api}/buckets/${para}`);
      setbuck(bucketdata.data);
      console.log(bucketdata);
    } catch (error) {
      console.log(error);
    }
  };

  let prodel = async () => {
    try {
      let deldata = await axios.post(`${env.api}/setremove/${para}`);
      userContext.setcprojectdata(deldata.data.cpro)
      userContext.setprojectdata(deldata.data.lpro)
    } catch (error) {
      console.log(error);
    }
  };

  let procomp = async () => {
    try {
      let comedata = await axios.post(`${env.api}/setcompleted/${para}`);
      userContext.setcprojectdata(comedata.data.cpro)
      userContext.setprojectdata(comedata.data.lpro)
    } catch (error) {
      console.log(error);
    }
  };

  let data = buck.buckets;

  return (
    <div>
      <main>
        <div className="container-fluid px-4">
          <div className="row">
            <h1 className=" col-8 mt-4">{buck.title}</h1>
            <Link to={"/home/dashboard"} onClick={()=>prodel()} className="col-2 mt-4 btn btn-danger">Delete This Project </Link>
            <Link to={"/home/dashboard"} onClick={()=>procomp()} className="col-2 mt-4 btn btn-success">Project Completed </Link>
            <Createbucket para={para} update={loadData} />
          </div>
          <div className="row">
            {data
              ? data.map((proj, index) => {
                  return <Bucket key={index} proj={proj} update={loadData} />;
                })
              : null}

          </div>
        </div>
      </main>
    </div>
  );
}

export default Project;
