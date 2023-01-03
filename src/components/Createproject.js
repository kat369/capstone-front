import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UserContext from "../Usercontext";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { env } from "../Config";

function Createproject() {
  const navigate = useNavigate()

  const userContext = useContext(UserContext)
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      buckets: [],
    },

    onSubmit: async (values, { resetForm }) => {
      values.status = "live"
      let projectdata = await axios.post(`${env.api}/createproject`, values);
      console.log(projectdata )
      userContext.setprojectdata(projectdata.data.lpro)
      userContext.setcprojectdata(projectdata.data.cpro)
      resetForm({ values: "" })
      handleClose();
      navigate(`/home/project/${projectdata.data.id.insertedId}`);
    },
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Link
        variant="primary"
        onClick={handleShow}
        className="nav-link"
        to={"/home"}
      >
        <div className="sb-nav-link-icon">
          <i className="fa-solid fa-circle-plus"></i>
        </div>
        Create New Project
      </Link>

      <Modal
        size="lg"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Link
          className="text-decoration-none text-black"
          to={"/home/dashboard"}
        >
          <Modal.Header closeButton>
            <Modal.Title>Create New Project</Modal.Title>
          </Modal.Header>
        </Link>
        <Form onSubmit={formik.handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Project Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                onChange={formik.handleChange}
                placeholder="New Project"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Project Description</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                name="description"
                as="textarea"
                rows={3}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Create Project
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default Createproject;
