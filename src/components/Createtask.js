import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Edittasktable from "./Edittasktable";
import { useFormik } from "formik";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { env } from "../Config";

function Createtask({data, update}) {
  let params = useParams();

let createId = ()=>{
  let randResult =''
  let chars="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123654789"
  let charLen = chars.length
  for(let i=0;i<5;i++){
      randResult+=chars.charAt(
          Math.floor(Math.random()*charLen)
      )
}
return randResult

}


  const formik = useFormik({
    initialValues: {
      bucket_name: `${data}`,
      task_title: "",
      priority: "",
      description: "",
      assign_to: "",
      status: "",
      start_date: "",
      due_date: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.task_title) {
        errors.task_title = "Required";
      }
      if (!values.priority) {
        errors.priority = "Required";
      }
      if (values.assign_to === "") {
        errors.assign_to = "Required";
      }
      if (values.status === "") {
        errors.status = "Required";
      }
      if (!values.start_date) {
        errors.start_date = "Required";
      }
      if (!values.due_date) {
        errors.due_date = "Required";
      }
      return errors;
    },
    onSubmit:async (values, {resetForm}) => {
      values.task_id = createId()
      console.log(values)
      
      let projectdata = await axios.post(`${env.api}/createtask/${params.id}`, values)

      handleClose();
      resetForm({values:""})
      update()

    },
  });


  const [emp, setemp]=useState([])

  useEffect(()=>{
Loademp()
  },[])

  let Loademp =async ()=>{
    try {
      let projectdataa = await axios.get(`${env.api}/employees`);
     setemp(projectdataa.data);
     } catch (error) {
      console.log(error)
     }
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Link variant="primary" onClick={handleShow} className="text-decoration-none">
        + Add Task
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
          <Modal.Title>Create Task</Modal.Title>
        </Modal.Header>
        <form onSubmit={formik.handleSubmit}>
          <Modal.Body>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <label>Task Title</label>
                  <input
                    type="text"
                    className={
                      formik.errors.task_title
                        ? "form-control border border-danger"
                        : "form-control"
                    }
                    onChange={formik.handleChange}
                    name="task_title"
                  />
                </div>
                <div className="col-6">
                  <label>Task Priority</label>
                  <div className="input-group mb-3">
                    <select
                      className={
                        formik.errors.priority
                          ? "custom-select form-control border border-danger"
                          : "custom-select form-control"
                      }
                      id="inputGroupSelect01"
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
                      className={
                        formik.errors.assign_to
                          ? "custom-select form-control border border-danger"
                          : "custom-select form-control"
                      }
                      id="inputGroupSelect01"
                      onChange={formik.handleChange}
                      name="assign_to"
                    >
                      <option selected>Select</option>
                      {
                         emp.map((data)=>{
                          return <option value={data._id}>{data.name}</option>
                         })
                      }
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <label>Status</label>
                  <div className="input-group mb-3">
                    <select
                      className={
                        formik.errors.status
                          ? "custom-select form-control border border-danger"
                          : "custom-select form-control"
                      }
                      id="inputGroupSelect"
                      onChange={formik.handleChange}
                      name="status"
                    >
                      <option selected>Select</option>
                      <option value="Not Started">Not Started</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <label>Start Date</label>
                  <input
                    type="date"
                    className={
                      formik.errors.start_date
                        ? "form-control border border-danger"
                        : "form-control"
                    }
                    onChange={formik.handleChange}
                    name="start_date"
                  />
                </div>
                <div className="col-6">
                  <label>Due Date</label>
                  <input
                    type="date"
                    className={
                      formik.errors.due_date
                        ? "form-control border border-danger"
                        : "form-control"
                    }
                    onChange={formik.handleChange}
                    name="due_date"
                  />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Add Task
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default Createtask;
