import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { env } from "../Config";

function Createbucket({para, update}) {
  const formik = useFormik({
    initialValues: {
        
      bucket_name: "",
      tasks: [],
    },
    
    onSubmit: async (values, {resetForm}) => {
      handleClose();
      resetForm({values:""})
     let projectdata = await axios.post(`${env.api}/createbucket/${para}`, values)
     
     update()

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
        className="mb-1"
      >
        + Create New Bucket
      </Link>

      <Modal
        size="lg"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Link className="text-decoration-none text-black" to={"/home/dashboard"}>
          <Modal.Header closeButton>
            <Modal.Title>Create New Bucket</Modal.Title>
          </Modal.Header>
        </Link>
        <Form onSubmit={formik.handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Bucket Name</Form.Label>
              <Form.Control type="text" name="bucket_name" onChange={formik.handleChange} placeholder="Bucket Name" autoFocus />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Create Bucket
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default Createbucket;
