import React from "react";

import Task from "./Task";

import Createtask from "./Createtask";


function Bucket({proj, update}) {

  
  
  return (
    <>
      <div className="col-xl-3 col-md-6">
        <div className="container">
          <div className="row  text-center">
            <div className="col-8">
              <div className="breadcrumb mb-3">
                <div suppressContentEditableWarning="true" contentEditable="true" className="breadcrumb-item active">{proj.bucket_name}</div>
              </div>
            </div>
            <div className="col-4">
              <Createtask data={proj.bucket_name} update={update}/>
            </div>
          </div>
        </div>
        {
             proj.tasks ? proj.tasks.map((data, index)=>{
                return <Task ind={index} data={data} update={update} buck={proj.bucket_name} />
                
              }) : null
            }
        
      </div>
    </>
  );
}

export default Bucket;
