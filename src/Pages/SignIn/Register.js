import React, { useState } from 'react'
import { FaUserPlus } from 'react-icons/fa';
import { FcKey } from 'react-icons/fc';
import { RiLockPasswordFill } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { getFileSrcFromPublicimg } from '../../utils';
import { baseURL } from '../../config';

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')
  const [termsAgreed, setTermsAgreed] = useState(false)
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [repasswordError, setRepasswordError] = useState('')
  const [termsError, setTermsError] = useState('')
  const [message, setMessage] = useState('')
  const [loader, setLoader] = useState(false);

  const navigation = useNavigate();

  const registrData = {
    name: name,
    email: email,
    password: password
  }

  const registerData = (e) => {
    e.preventDefault();

    let formIsValid = true;
    // name validation
    if (!name) {
      setNameError('Name is required')
      formIsValid = false;
    } else {
      setNameError('')
    }

    // email validation
    if (!email) {
      setEmailError('Email is required')
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email is invalid')
      formIsValid = false;
    } else {
      setEmailError('')
    }

    // password validation
    if (!password) {
      setPasswordError('Password is required')
      formIsValid = false;
    } else if (password.length < 8) {
      setPasswordError('Password should be at least 8 characters long')
      formIsValid = false;
    } else {
      setPasswordError('')
    }

    // repassword validation
    if (!repassword) {
      setRepasswordError('Please re-enter your password')
      formIsValid = false;
    } else if (password !== repassword) {
      setRepasswordError('Passwords do not match')
      formIsValid = false;
    } else {
      setRepasswordError('')
    }

    

    if (formIsValid) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        name: name,
        email: email,
        password: password
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      setLoader(true)
      fetch(baseURL+"signup", requestOptions)
        .then(response => response.json())
        .then(result => {
          var requestOpt = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({ 
               trackfreecredits :10,
               user_id : result?.userDetail._id
          }),
            redirect: 'follow'
          };
          fetch("https://copilot-bk-node-production.up.railway.app/track_user_free_credits", requestOpt)
           .then((response) => {
              setLoader(false)
              setMessage(result.message)
              localStorage.setItem('status', result.statu)
              localStorage.setItem('loginResponse', JSON.stringify(result))
              console.log(result, 'myresultdata')
              if (result.statu == true) {
                navigation("/profile")
            }
          })
        }).catch(error => console.log('error', error));
    }
  }

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
                    <form className="mx-1 mx-md-4 p-3 formOfRegister">
                      <p className="text-center h3 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <FaUserPlus size={25} style={{ color: '#273661' }} />
                        <div className="form-outline flex-fill mx-2 mb-0">
                          <input type="name" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                          <div className="error">{nameError}</div>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <HiOutlineMail size={25} style={{ color: '#ea4335' }} />
                        <div className="form-outline flex-fill mx-2 mb-0">
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                          <div className="error">{emailError}</div>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <RiLockPasswordFill size={25} className='text-success' />
                        <div className="form-outline flex-fill mx-2 mb-0">
                          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                          <div className="error">{passwordError}</div>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <FcKey size={25} />
                        <div className="form-outline flex-fill mx-2 mb-0">
                          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Re-Password" value={repassword} onChange={(e) => setRepassword(e.target.value)} />
                          <div className="error">{repasswordError}</div>
                        </div>
                      </div>

                      {/* <div className="form-check d-flex justify-content-center  mb-5">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                            <label className="form-check-label" for="form2Example3">
                              I agree all statements in <Link href="#!">Terms of service</Link>
                            </label>
                          </div> */}

                      <div className="d-flex justify-content-center mb-0 mb-lg-1">
                        {loader ?
                          <button style={{width: "88%", marginLeft:"auto"}} type="button" className="btn btn-primary shadow w-75 m-auto py-2 px-5 fw-bold" >
                            Sign in <img src={getFileSrcFromPublicimg('loader.svg')} alt='aboutimg' style={{ height: "21px" }} />
                          </button>:
                          <button type="button" style={{width: "88%", marginLeft:"auto"}} className="btn w-75 m-auto btn-primary shadow w-100 py-2 px-5 fw-bold" onClick={registerData}>Register</button>
                         }
                      </div>
                      {message && <div style={{ color: "green", width: "88%", marginLeft:"auto", fontSize: '16px', textTransform: 'capitalize' }}>{message}</div>}
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid" alt="Sample image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Register