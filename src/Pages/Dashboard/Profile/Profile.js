import React from "react"; 
import "./Profile.css";
 import { Link } from "react-router-dom";
import { getFileSrcFromPublicimg } from "../../../utils";

 import Dashbaord from "../Dashboard/Dashboard";
 import { useState } from "react";
import { RiFacebookFill } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";
import { baseURL } from "../../../config";

function Profile() {
  let loginResponse = localStorage.getItem("loginResponse");
  loginResponse = JSON.parse(loginResponse);
  const [name, setName] = useState(`${loginResponse?.userDetail?.name}`);
  const [email, setEmail] = useState(loginResponse?.userDetail?.email);
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [updateError, setUpdateError] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(null);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(null);
  };

  const handleUpdateProfile = async () => {
    if (!name) {
      setNameError("Name is required");
      return;
    }
    if (!email) {
      setEmailError("Email is required");
      return;
    }

    const data = {
      name: name,
      // email: email,
      // password: 'newpassword'
    };
    try {
      fetch(`${baseURL}updateprofile/${loginResponse?.userDetail?._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then((res) => res.json())
      .then((data) => {
          console.log(data, 'datadata')

          if (data.status) {
            localStorage.setItem("loginResponse", JSON.stringify(data));
            setUpdateSuccess(true);
          } else {
            setUpdateError(data.message);
          }})
        } catch (error) {
          console.error(error);
          setUpdateError("Failed to update profile");
        }
      };

  

  return (
    <>
      <Dashbaord>
        <section className="min-vh-100" style={{ backgroundColor: "#f0f8ff" }}>
          <div className="container-fluid">
            <div className="py-2"><h4 className="fw-bold">My Profile</h4></div>
            <div className="row">
              <div className="col-12">
                <div className="card bg-white border-0 rounded w-200 my-3 p-3">
                  <div className="row">
                    <div className="col-lg-3 border-right">
                      <div>
                        <h6>Billing</h6>
                      </div>
                      <div
                        className="text-secondary pt-2"
                        style={{ fontSize: "14px" }}
                      >
                        Current Plan
                      </div>
                      <h4 className="text-primary">Free Plan</h4>

                      <div
                        className="text-secondary pt-2"
                        style={{ fontSize: "14px" }}
                      >
                        Next Billing Date
                      </div>
                      <h6>N/A</h6>

                      <div
                        className="text-secondary pt-2"
                        style={{ fontSize: "14px" }}
                      >
                        Monthly Charge
                      </div>
                      <h6>£0.00/Month</h6>
                    </div>
                    <div className="col-lg-9 border-start border-2 my-4">
                      <div>
                        <h6>Personal Details</h6>
                      </div>
                      {updateSuccess && (
                        <div className="alert alert-success" role="alert">
                          Profile updated successfully
                        </div>
                      )}
                      {updateError && (
                        <div className="alert alert-danger" role="alert">
                          {updateError}
                        </div>
                      )}
                      <hr className="m-0"></hr>
                      <label htmlFor="nameid" className="Profile-label mt-3">
                        Name
                      </label>
                      <input
                        type="text"
                        className={`form-control mt-2 mb-3 ${
                          nameError ? "is-invalid" : ""
                        }`}
                        id="nameid"
                        placeholder="Davin Smith"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      {nameError && (
                        <div className="invalid-feedback">
                          Please provide a valid name.
                        </div>
                      )}
                      <label htmlFor="emailid" className="Profile-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className={`form-control mt-2 mb-3 ${
                          emailError ? "is-invalid" : ""
                        }`}
                        id="emailid"
                        placeholder="Davin@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        readOnly
                      />
                      {emailError && (
                        <div className="invalid-feedback">
                          Please provide a valid email.
                        </div>
                      )}
                      <button
                        className="btn btn-primary my-3"
                        onClick={handleUpdateProfile}
                      >
                        Update Profile
                      </button>
                    </div>
                  </div>
                  <div className="d-flex">
                      <div className="">
                        <h2>Paid Plan</h2>
                        <p>Upgrade now to take full advantage of the time saving tools, giving you a life beyond the classroom</p>
                        <div className="d-flex">
                          <div>
                            <h2>Free Credits</h2>
                            <p>Want to earn more credits simply help share this platform with teachers and tutors:</p>
          
                            <ul className="">
                              <li>Like &amp; Subscribe to our YouTube Channel - 5 free credits</li>
                              <li>Tag 5 friends via our Facebook Page - 5 free credits</li>
                              <li>Share the web link through WhatsApp</li>
                            </ul>
                          </div>
                          <div className="my-auto">                          
                            <Link
                                className="btn text-white btn-floating shadow m-1"
                                style={{backgroundColor: '#FF0000'}}
                                to="https://www.youtube.com/@TeachingCopilot/featured"
                                target="_blank"
                                role="button"
                            ><AiFillYoutube size={25}/>
                            </Link>

                            <Link
                                className="btn text-white btn-floating shadow m-1"
                                style={{backgroundColor: '#1778f2'}}
                                to="https://www.facebook.com/profile.php?id=100092227787152"
                                target="_blank"
                                role="button"
                            ><RiFacebookFill size={25}/>
                            </Link>                           
                      </div>
                        </div>
                      </div>
                      
                      
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </Dashbaord>
    </>
  );
}

export default Profile;
