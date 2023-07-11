import React from "react"; 
import "./Profile.css";
 import { Link, useNavigate } from "react-router-dom";
import { getFileSrcFromPublicimg } from "../../../utils";

 import Dashbaord from "../Dashboard/Dashboard";
 import { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { baseURL } from "../../../config";
import { useEffect } from "react";
import { BsLightningChargeFill, BsTwitter, BsYoutube } from "react-icons/bs";

function Profile() {
  let loginResponse = localStorage.getItem("loginResponse");
  loginResponse = JSON.parse(loginResponse);
  const [name, setName] = useState(`${loginResponse?.userDetail?.name}`);
  const [email, setEmail] = useState(loginResponse?.userDetail?.email);
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [updateError, setUpdateError] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [gggg, setujmtns] = useState(false);

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

      useEffect(() => {
        let loginResponse = localStorage.getItem("loginResponse");
            loginResponse = JSON.parse(loginResponse); 
            fetch(baseURL+`check-plan-status/${loginResponse.userDetail._id}`, {method: 'GET',})
            .then(response => response.json())
            .then(freeCreditResult => setujmtns(freeCreditResult.currentPlan_status))
            .catch(error => console.log('error', error));
    }, [ ]);

    // Social Media Card Data

    const [isPaid, setPlanStatus] = useState(false);
    useEffect(() => {
      let loginResponse = localStorage.getItem("loginResponse");
          loginResponse = JSON.parse(loginResponse); 
            fetch(`https://copilot-bk-node-production.up.railway.app/track_user_free_credits/${loginResponse.userDetail._id}`, {method: 'GET',})
            .then(response => response.json())
            .then(FreeCreditResult =>{
                  fetch(baseURL+"check-plan-status/"+loginResponse.userDetail._id)
                  .then(response => response.json())
                  .then(result => {
                    setPlanStatus(FreeCreditResult?.trackcredits>0?true:result?.currentPlan_status?true:false)})
                  .catch(error => console.log('error', error)); 
              }).catch(error => console.log('error', error));
    }, [ ]);

    const navigate = useNavigate()
    function goToLessonPlan (cardData) {
        navigate('/lessonplan',{state:cardData} );
    }

    const socialMediaCard = [
      {
        icon: <BsLightningChargeFill size={23} className="text-warning"/>,
        title: "Upgrade",
        contentText: "Accelerate your credits! Tag 5 friends on our Facebook page and share one of our post for 5 free credits.",
        link: "#",    
      },
      {
        icon: <BsTwitter size={23} style={{color: '#00acee'}}/>,
        title: "Twitter",
        contentText: "Boost your credits! Follow us and share or like one of our post for 5 free credits.",
        link: "#",    
      },
      {
        icon: <BsYoutube size={23} style={{color: '#FF0000'}} />,
        title: "Youtube",
        contentText: "Supercharge your credits! Subscribe and like two videos on our YouTube channel for 5 free credits.",
        link: "https://www.youtube.com/@TeachingCopilot/featured",    
      },
      {
        icon: <FaFacebookSquare size={23} style={{color: '#1778f2'}} />,
        title: "Facebook",
        contentText: "Accelerate your credits! Tag 5 friends on our Facebook page and share one of our post for 5 free credits.",
        link: "https://www.facebook.com/profile.php?id=100092227787152",  
      }

    ]



  
console.log(gggg, 'ggg  gggg')
  return (
    <>
      <Dashbaord>
        <section className="min-vh-100" style={{ backgroundColor: "#f0f8ff" }}>
        <div>
            <h4 className=" text-white fw-bold py-2 px-3" style={{backgroundColor: '#036CFF'}}>My Profile</h4>
        </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card bg-white border-0 rounded w-200 my-3 p-3">
                  <div className="row">
                    <div className="col-lg-3 border-right">
                      <div>
                        <h6>Billing</h6>
                      </div>

                      {/* Free Credits greater then 0 */}
                      {gggg == true ?
                      <>
                      <div
                        className="text-secondary pt-2"
                        style={{ fontSize: "14px" }}
                      >
                        Current Plan
                      </div>
                      <h4 className="text-primary">Monthly Plan</h4>

                      <div
                        className="text-secondary pt-2"
                        style={{ fontSize: "14px" }}
                      >
                        Next Billing Date
                      </div>
                      <h6>After Each 30 Days</h6>

                      <div
                        className="text-secondary pt-2"
                        style={{ fontSize: "14px" }}
                      >
                        Monthly Charge
                      </div>
                      <h6>£6.99/Month</h6>
                      </>
                      :
                      <>
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
                      </>
                      }
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
                  

                </div>
              </div>
              <div className="row">
                <div className="col-12">
                    <h2>Paid Plan</h2>
                    <p>Upgrade now to take full advantage of the time saving tools, giving you a life beyond the classroom</p>
                    <h2>Free Credits</h2>
                    <p>Want to earn more credits simply help share this platform with teachers and tutors:</p>
                </div>
              </div>
              <div className="container-fluid">
              <div className="row my-lg-3 my-md-3">       
                        {socialMediaCard.map((cardObj) => (
                          <>
                          <div className="col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch">
                            <div className='card w-100 p-1 px-sm-0 my-2 text-center border-0 rounded-1 shadow-sm cardbgcss pb-2 d-flex flex-column justify-content-between'>
                                <div>
                                  {console.log(cardObj,socialMediaCard, 'createandplaycard')}
                                  {cardObj?.icon}
                                  <h5 className=''>{cardObj?.title}</h5>
                                </div>
                                <div>
                                  <p className=''>{cardObj?.contentText}</p>
                                </div>
                                <div class="d-grid gap-3 col-11 mx-auto"> 
                                  <Link className="btn btn-outline-warning p-1" to={cardObj?.link} target="_blank">Launch</Link>
                                </div>
                            </div>
                          </div>
                          </>
                          ))
                        }        
                {/* <div className="my-auto">                          
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
                </div> */}        
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
