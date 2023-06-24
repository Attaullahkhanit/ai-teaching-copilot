import React from 'react';
import './ToolIdea.css';
import Dashbaord from '../Dashboard/Dashboard';
import { useState } from "react";
import { FcIdea } from "react-icons/fc";
import { baseURL } from "../../../config";

function ToolIdea() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [emailError, setEmailError] = useState("");
   const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    if (!email || !email.includes("@") || !email.includes(".")) {
      setEmailError("Please enter a valid email address");
      setLoader(false);
      return;
    }
    const contactData = {
      name: name,
      email: email,
      message: message,
    };

    fetch(baseURL+"contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          localStorage.setItem("contactData", JSON.stringify(contactData));
          setLoader(false);
          alert(data.message);
        } else {
          setLoader(false);
          alert(data.message);
        }
      })
      .catch((err) => {
        setLoader(false);
        alert(err.message);
      });
  };


  return (
    <>
        <Dashbaord>
            <div className="toolidea">
              <div className="container">
                <div className="row py-1">
                  <div className="col-lg-5 col-md-12 col-sm-12">
                    <div className="card px-lg-5 pt-lg-5 pb-lg-0 px-sm-3 my-3 border-0">
                    <h3 className="fw-bold"><i className='bi bi-tools text-primary'/> Tool Idea</h3>
                    <p>Have a great idea that you want to share with us. In the message box write the following:
                      <ol >
                        <li className="py-0"> Name of the tool name</li>
                        <li className="py-0"> Functionality of the tool</li>
                        <li className="py-0"> Information that the teacher would input</li>
                        <li className="py-0"> What would the output look like?</li>
                      </ol>
                    </p>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 col-sm-12">
                    <div className="form border-0 px-lg-5 pt-lg-5 pb-lg-0 px-sm-2 rounded my-3 w-100">
                      <div className="row mx-0 py-3">
                        <input
                          type="name"
                          className="form-control"
                          id="exampleInputName"
                          aria-describedby="nameHelp"
                          placeholder="Enter Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="row mx-0 py-3">
                        <input
                          type="email"
                          className={`form-control ${emailError ? "is-invalid" : ""}`}
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setEmailError("");
                          }}
                        />
                        {emailError && (
                          <div className="invalid-feedback">{emailError}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <textarea
                          placeholder='Enter Description'
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="5"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      </div>
                      <div className="py-5">
                        <button
                          type="submit"
                          className="btn btn-primary w-100 py-2 fw-bold shadow"
                          onClick={handleSubmit}
                        >
                          {loader ? (
                            <div
                              className="spinner-border text-light"
                              role="status"
                              style={{ width: "1.5rem", height: "1.5rem" }}
                            >
                              <span className="visually-hidden">Loading...</span>
                            </div>
                          ) : (
                            <>
                              <i className="bi bi-send px-2"></i>Submit
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </Dashbaord>
    </>
  )
}

export default ToolIdea