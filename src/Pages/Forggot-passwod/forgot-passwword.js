import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Divider } from "@mui/material";
import { getFileSrcFromPublicimg } from "../../utils";
import { parse } from "popper/farms/saucelabs";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { baseURL } from "../../config";
function ForgottPassword(props) {
  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showCreatePassword, setShowCreatePassword] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);

  const navigation = useNavigate();

  const createNewPassword = () => {
    setLoader(true);
    if (newPassword.length <8) { 
        setMessage("Passwords should greater or equal 8 character. Please try again.");
        setLoader(false);
        return;
      }
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match. Please try again.");
      setLoader(false);
      return;
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: email,
      password: newPassword,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(baseURL
      +"forgot-password", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoader(false);
        if (result.status === true) {
          setMessage(result.message);
        } else {
          setMessage(result.message + " Please try again.");
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <Navbar />
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black border-0 rounded-0">
              <div className="card-body p-md-5 mb-4">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <form className="my-5 py-3">
                      
                        <>
                          <div className="mt-5">Forgot Password</div>
                          <div className="row mx-0 mt-4">
                            <input
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder="Enter email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          { !showCreatePassword ?
                            loader ? (
                            <button
                              type="button"
                              className="btn btn-primary btn-block mt-5 mb-4 w-100 py-2 shadow fw-bold"
                            >
                              Checking Email{" "}
                              <img
                                src={getFileSrcFromPublicimg("loader.svg")}
                                alt="aboutimg"
                                style={{ height: "21px" }}
                              />
                            </button>
                             ) : (
                            <button
                              type="button"
                              className="btn btn-primary btn-block mt-5 mb-4 w-100 py-2 shadow fw-bold"
                              onClick={() => {
                                setLoader(true);
                                const myHeaders = new Headers();
                                myHeaders.append(
                                  "Content-Type",
                                  "application/json"
                                );
                                const raw = JSON.stringify({
                                  email: email,
                                });

                                const requestOptions = {
                                  method: "POST",
                                  headers: myHeaders,
                                  body: raw,
                                  redirect: "follow",
                                };

                                fetch(
                                  baseURL+"check-email",
                                  requestOptions
                                )
                                  .then((response) => response.json())
                                  .then((result) => {
                                    setLoader(false);
                                    if (result.status === true) {
                                      setMessage("");
                                      setShowCreatePassword(true);
                                      setForgotPassword(false);
                                    } else {
                                      setMessage(
                                        "Email does not exist. Please try again."
                                      );
                                    }
                                  })
                                  .catch((error) => {
                                    console.log("error", error);
                                    setLoader(false);
                                  });
                              }}
                            >
                              Submit
                            </button>
                            ):""}
                          {showCreatePassword && (
                            <>
                              <div className="row mx-0 mt-4">
                                <input
                                  type="password"
                                  className="form-control"
                                  id="exampleInputPassword1"
                                  placeholder="Enter new password"
                                  value={newPassword}
                                  onChange={(e) =>
                                    setNewPassword(e.target.value)
                                  }
                                />
                              </div>
                              <div className="row mx-0 mt-4">
                                <input
                                  type="password"
                                  className="form-control"
                                  id="exampleInputPassword1"
                                  placeholder="Confirm new password"
                                  value={confirmPassword}
                                  onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                  }
                                />
                              </div>
                              {passwordMismatch && (
                                <p className="text-danger">
                                  Passwords do not match. Please try again.
                                </p>
                              )}
                              <button
                                type="button"
                                className="btn btn-primary btn-block mt-5 mb-4 w-100 py-2 shadow fw-bold"
                                onClick={() => {
                                 if (newPassword !== confirmPassword ) {
                                    setPasswordMismatch(true);
                                  } else {
                                    setPasswordMismatch(false);
                                    createNewPassword();
                                  }
                                }}
                              >
                                {loader ? (
                                  <>
                                    Creating Password{" "}
                                    <img
                                      src={getFileSrcFromPublicimg(
                                        "loader.svg"
                                      )}
                                      alt="aboutimg"
                                      style={{ height: "21px" }}
                                    />
                                  </>
                                ) : (
                                  "Create Password"
                                )}
                              </button>
                             
                            </>
                          )}
                           {message && message}
                        </>
                      
                        <div className="text-center mt-4">
                          <Link
                            to="/"
                            style={{
                              color: "#bbb",
                              textDecoration: "underline",
                            }}
                           >
                            Back to Login
                          </Link>
                        </div>
                     
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ForgottPassword;
