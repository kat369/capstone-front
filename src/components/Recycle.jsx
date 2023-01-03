import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { env } from "../Config";
import UserContext from "../Usercontext";

function Recycle() {
  const userContext = useContext(UserContext)

  const [recycle, setrecycle] = useState([]);

  useEffect(() => {
    LoadData()
  }, []);

  let LoadData = async () => {
    try {
      let data = await axios.get(`${env.api}/removedprojects`);
      setrecycle(data.data);
    } catch (error) {}
  };

  let prolive = async (id) => {
    try {
      let livedata = await axios.post(`${env.api}/setlive/${id}`);
      userContext.setcprojectdata(livedata.data.cpro)
    userContext.setprojectdata(livedata.data.lpro)
    } catch (error) {
      console.log(error);
    }
  };

  let prodel = async (id) => {
    try {
      
      let deldata = await axios.post(`${env.api}/setdel/${id}`);
      LoadData()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <main>
        <div className="container-fluid px-4">
          <h1 className="mt-4">Recycle Bin</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active">
              The Projects which are deleted from hear can't be Recovered
            </li>
          </ol>
          <div className="card mb-4">
            <div className="card-header">
              <i className="fas fa-table me-1"></i>
              Project detaile
            </div>
            <div className="card-body">
              <table class="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Project Title</th>
                    <th scope="col">DataBase_id</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  
                    {recycle.map((data, index) => {
                      return (
                        
                        <tr>
                          <>
                          <th scope="row">{index + 1}</th>
                          <td>{data.title}</td>
                          <td>{data._id}</td>
                          <td>
                            <Link
                              to={""}
                              onClick={()=>prodel(data._id)}
                              className="col-6  btn btn-danger"
                            >
                              Delete
                            </Link>
                            <Link
                              to={`/home/project/${data._id}`}
                              onClick={()=>prolive(data._id)}
                              className="col-6  btn btn-success"
                            >
                              Restore
                            </Link>
                          </td>
                          </>
                          </tr>
                        
                      );
                    })}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Recycle;
