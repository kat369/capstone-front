import React from "react";
import Edittask from "./Edittask";

function Task({ data, buck, update}) {
  return (
    <>
      <div
        className={
          data.status === "Not Started"
            ? "card mb-4 border-primary"
            : data.status === "Completed"
            ? "card mb-4 border-success"
            : data.status === "In Progress"
            ? "card mb-4 border-warning"
            : "card mb-4 border-danger"
        }
      >
        <div className="card-body">
          <h5 className="card-title">{data.task_title}</h5>
          <h6 className="card-subtitle mb-1 text-muted ">
            Priority : {data.priority}
          </h6>
          <p className="card-text">{data.description}</p>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h6 className="card-subtitle mb-3 ">
                  To : {data.assign_to}
                </h6>
              </div>
              <div className="col-6">
                <h6
                  className={
                    data.status === "Not Started"
                      ? "card-subtitle mb-3 text-primary"
                      : data.status === "Completed"
                      ? "card-subtitle mb-3 text-success"
                      : data.status === "In Progress"
                      ? "card-subtitle mb-3 text-warning"
                      : "card-subtitle mb-3 text-danger"
                  }
                >
                  Status : {data.status}
                </h6>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h6 className="card-subtitle mb-1">On : {data.start_date}</h6>
              </div>
              <div className="col-6">
                <h6 className="card-subtitle mb-1">Till : {data.due_date}</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={
          data.status === "Not Started"
            ? "card-footer d-flex align-items-center justify-content-between bg-primary"
            : data.status === "Completed"
            ? "card-footer d-flex align-items-center justify-content-between bg-success"
            : data.status === "In Progress"
            ? "card-footer d-flex align-items-center justify-content-between bg-warning"
            : "card-footer d-flex align-items-center justify-content-between bg-danger"
        }>
        
          <Edittask pro={data} update={update} buck={buck}/>
          <div className="small text-white">
            <i className="fas fa-angle-right"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
