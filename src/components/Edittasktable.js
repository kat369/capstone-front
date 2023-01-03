import { useFormik } from "formik";
import React from "react";

function Edittasktable() {
  const formik = useFormik({
    initialValues: {
      task_title: "",
      priority: "",
      description: "",
      assign_to: "",
      status: "",
      start_date: "",
      due_date: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-6">
              <label>Task Title</label>
              <input type="text" className="form-control" value = {formik.values.task_title} onChange = {formik.handleChange} name = "task_title"/>
            </div>
            <div className="col-6">
              <label>Task Priority</label>
              <div className="input-group mb-3">
                <select
                  className="custom-select form-control"
                  id="inputGroupSelect01"
                  value = {formik.values.priority} onChange = {formik.handleChange} name = "priority"
                >
                  <option selected>Select</option>
                  <option value="Urgent">Urgent</option>
                  <option value="Important">Important</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label>Task Description</label>
              <input type="textarea" rows="3" className="form-control" value = {formik.values.description} onChange = {formik.handleChange} name = "description" />
            </div>
          </div>
          <div className="row">
          <div className="col-6">
              <label>Assign To</label>
              <div className="input-group mb-3">
                <select
                  className="custom-select form-control"
                  id="inputGroupSelect01"
                  value = {formik.values.assign_to} onChange = {formik.handleChange} name = "assign_to"
                >
                  <option selected>Select</option>
                  <option value="1">Kathir</option>
                  <option value="2">Karan</option>
                  <option value="3">Labensty</option>
                  <option value="4">Naresh</option>
                </select>
              </div>
            </div>
            <div className="col-6">
              <label>Status</label>
              <div className="input-group mb-3">
                <select
                  className="custom-select form-control"
                  id="inputGroupSelect01"
                  value = {formik.values.status} onChange = {formik.handleChange} name = "status"
                >
                  <option selected>Select</option>
                  <option value="Not Started">Not Started</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>Start Date</label>
              <input type="date" className="form-control" value = {formik.values.start_date} onChange = {formik.handleChange} name = "start_date"/>
            </div>
            <div className="col-6">
              <label>Due Date</label>
              <input type="date" className="form-control" value = {formik.values.due_date} onChange = {formik.handleChange} name = "due_date"/>
            </div>
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}

export default Edittasktable;
