import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { env } from "../Config";

function Login() {

  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Required";
      }
      if (!values.password) {
        errors.password = "Required";
      }
      return errors;
    },
    onSubmit:async (values) => {
     try {
      let logindata = await axios.post(`${env.api}/login`, values)
       if(logindata.status == 200){
        navigate("/home/dashboard")
        window.localStorage.setItem("app-token", logindata.data.token)
       }

      
      console.log(logindata)
     } catch (error) {
      
     }
      

    },
  });

  return (
    <>
      <div className="header">
        <div className="inner-header flex">
          <div id="container">
            <div className="form-wrap">
              <h1>Sign In</h1>
              <div id="alerts">Welcome Back!</div>
              <form id="input_form" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input type="text" name="email" id="email"  placeholder="admin@gmail.com" className={
                      formik.errors.task_title
                        ? "form-control border border-danger"
                        : "form-control"
                    }
                    onChange={formik.handleChange}
                />
                </div>
                <div className="form-group">
                  <label for="password">Password</label>
                  <input type="password"  placeholder="admin" name="password" id="password" 
                  className={
                    formik.errors.task_title
                      ? "form-control border border-danger"
                      : "form-control"
                  }
                  onChange={formik.handleChange}
                  />
                </div>
                
                  <button id="submit" type="submit">
                    Sign In
                  </button>
                
                <p className="terms">
                  By Clicking the Sign In Button, you agree to our
                  <a href="#">Terms & Conditions</a> and
                  <a href="#">Privacy Polict</a>
                </p>
              </form>
            </div>
          </div>
        </div>

        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                href="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(51, 51, 51, 0.7)"
              />
              <use
                href="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(51, 51, 51, 0.5)"
              />
              <use
                href="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(51, 51, 51, 0.3)"
              />
              <use href="#gentle-wave" x="48" y="7" fill="rgb(51, 51, 51)" />
            </g>
          </svg>
        </div>
      </div>

      <div className="content flex">
        <footer>
          Having Issue with Login? <a href="#">Report Here!</a>
        </footer>
      </div>
    </>
  );
}

export default Login;
