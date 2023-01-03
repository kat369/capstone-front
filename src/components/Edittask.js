import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Edittasktable from "./Edittasktable";
import { useFormik } from "formik";
import { Link, useParams } from "react-router-dom";
import { env } from "../Config";
import axios from "axios";

function Edittask({pro, buck, update}) {
  let params = useParams();
  const formik = useFormik({
    initialValues: {
      bucket_name: `${buck}`,
      task_id: `${pro.task_id}`,
      task_title: `${pro.task_title}`,
      priority: `${pro.priority}`,
      description: `${pro.description}`,
      assign_to: `${pro.assign_to}`,
      status: `${pro.status}`,
      start_date: `${pro.start_date}`,
      due_date: `${pro.due_date}`,
    },
    validate : (values)=>{
      let errors = {};
      if (!values.task_title) {
         errors.task_title = "Required";
      }
      if (!values.priority) {
          errors.priority = "Required";
       }
       if (!values.assign_to) {
          errors.assign_to = "Required";
       }
       if (!values.start_date) {
          errors.start_date = "Required";
       }
       if (!values.due_date) {
          errors.due_date = "Required";
       }
    return errors;
  },
  onSubmit:async (values) => {
    handleClose()
    let edit = await axios.post(`${env.api}/updatetask/${params.id}`,values)
    update()
  },
  
  });
    pro.bucket_name = `${buck}`
    let remove =async ()=>{
      let remove1 = await axios.post(`${env.api}/deletetask/${params.id}`,pro)
      update()
     }
   

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Link
        variant="primary"
        onClick={handleShow}
        className="small text-white stretched-link"
        to=""
      >
        View Details
      </Link>

      <Modal
        size="lg"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <form onSubmit={formik.handleSubmit}>
          <Modal.Body>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <label>Task Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formik.values.task_title}
                    onChange={formik.handleChange}
                    name="task_title"
                  />
                </div>
                <div className="col-6">
                  <label>Task Priority</label>
                  <div className="input-group mb-3">
                    <select
                      className="custom-select form-control"
                      id="inputGroupSelect01"
                      value={formik.values.priority}
                      onChange={formik.handleChange}
                      name="priority"
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
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Task Description</Form.Label>
                    <Form.Control
                      value={formik.values.description}
                      onChange={formik.handleChange}
                      name="description"
                      as="textarea"
                      rows={3}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <label>Assign To</label>
                  <div className="input-group mb-3">
                    <select
                      className="custom-select form-control"
                      id="inputGroupSelect01"
                      value={formik.values.assign_to}
                      onChange={formik.handleChange}
                      name="assign_to"
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
                      value={formik.values.status}
                      onChange={formik.handleChange}
                      name="status"
                    >
                      <option selected>Select</option>
                      <option value="Not Started">Not Started</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                      <option value="Pending">Pending</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <label>Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={formik.values.start_date}
                    onChange={formik.handleChange}
                    name="start_date"
                  />
                </div>
                <div className="col-6">
                  <label>Due Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={formik.values.due_date}
                    onChange={formik.handleChange}
                    name="due_date"
                  />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>remove()}>
              Delete This Task
            </Button>
            <Button type="submit" variant="primary">
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default Edittask;
