import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link, useLocation } from "react-router-dom";
import FaqPageCard from "../../Components/FaqPageCard/FaqPageCard";
import { useState } from "react";
import { FcIdea } from "react-icons/fc";
import { baseURL } from "../../config";

function Toolidea() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [emailError, setEmailError] = useState("");
  const location = useLocation()
  const isToolIdea= location.state?.toolidea
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

  const faqpagecarditems1 = [
    {
      title: "What age range is it best suited for?",
      paratext:
        "Teaching Copilot AI platform is suitable for all age ranges, as it caters to the unique needs of educators. From primary to secondary school, it provides tools and resources for engaging learning experiences and better outcomes. Our commitment is to make AI accessible and user-friendly for all teachers.",
    },
  ];

  const feqpageCarditems2 = [
    {
      title: "What a subject does the platform support?",
      paratext:
        "AI is powerfull tools that can benefit teachers in all subjects. In English, it can be used automated grading and writing prompts. in math, it can generate interative quizzes and personlized learning paths. In science. it can aid and data analysis and experiment design. The possibilities are endless. and by hamessing the power of AI. teacher can provide more effective and engaging learning experiences for their students.",
    },
  ];
  const feqpageCarditems3 = [
    {
      title: "What can i create with Teaching Copilot?",
      paratext:
        "Teaching Copilot is AI platform provides a wide range of tools for teachers, including lesson plan creation, quiz building, educational handout design, and report writing. Our platform is designed to help teachers save time and streamline their workload while providing high-quality resources for their students learning.",
    },
  ];
  const feqpageCarditems4 = [
    {
      title: "Is it worth upgrading to the pro plan?",
      paratext:
        "By signing up for the Pro Plan you ll get full access to Teaching Copilot is powerful AI platform, including premium tools, the latest features and Increased storage. This will enable you to store more files and create even more engaging lesson plans and quizzes. By choosing the Pro Plan, you will also be supporting other teachers and the growth of our platform.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="pt-5">
          <h5>
            At AI Online Teacher, we are proud to say that our AI platform is
            developed
          </h5>
        </div>

        <div className="row py-1">
          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="card px-lg-5 pt-lg-5 pb-lg-0 px-sm-3 my-3 border-0">
              <h3 className="fw-bold">Contact Us</h3>
              <p>
                You are doing an amazing job , and we appreciate all the hard
                work you're putting in to educate our future generations. If you
                ever need any support or guidance, please don't hesitate to
                reach out to us. We are here to empower and assist you on your
                journey as an educator. Keep up the great work!
              </p>
              {isToolIdea && <h3 className="fw-bold"><FcIdea className='text-white'/> Tool Idea</h3>}
            {isToolIdea && <p>Have a great idea that you want to share with us. In the message box write the following:
                              <ol >
                                <li className="py-0"> Name of the tool name</li>
                                <li className="py-0"> Functionality of the tool</li>
                                <li className="py-0"> Information that the teacher would input</li>
                                <li className="py-0"> What would the output look like?</li>
                              </ol>
                          </p>}
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
                <label htmlFor="exampleFormControlTextarea1">Enter Description</label>
                <textarea
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
        <div className="mb-5 px-lg-5">
          <h3 className="py-3"> Frequently Ask Questions?</h3>

          <div className="row">
            <div className="col-lg-6 d-flex align-items-stretch">
              <FaqPageCard faqpagecarddata={faqpagecarditems1} />
            </div>
            <div className="col-lg-6 d-flex align-items-stretch">
              <FaqPageCard faqpagecarddata={feqpageCarditems2} />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 d-flex align-items-stretch">
              <FaqPageCard faqpagecarddata={feqpageCarditems3} />
            </div>
            <div className="col-lg-6 d-flex align-items-stretch">
              <FaqPageCard faqpagecarddata={feqpageCarditems4} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
