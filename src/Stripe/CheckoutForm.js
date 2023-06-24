import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import { baseURL } from "../config";
import { ToastContainer, toast } from "react-toastify";
import PricingCard from "../Components/PricingCard/PricingCard";
import Dashbaord from "../Pages/Dashboard/Dashboard/Dashboard";
export const CheckoutForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    // plans free : no id
    // plane 1: 5252
  
    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        let loginResponse = localStorage.getItem("loginResponse");
        loginResponse = JSON.parse(loginResponse);
        const { id } = paymentMethod;
        const response = await axios.post(baseURL + "create-payment-intent", {
          name: name,
          address: address,
          email: email,
          city: city,
          postcode: postalCode,
          userid: loginResponse.userDetail._id,
          amount: 999,
          planId:5252,
          duration:30,
          id: id,
        });
        console.log("  data", response);
        if (response.data.statu) {
          toast.success("You successfuly paid", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
    }
  };
  var element = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
  };
  const listpricingCard2Data = [
    {
      title: "For Teachers",
      price: "£6.99 / £60 Annual",
      trialHints: [
        "Full Access",
        "Email Support",
        "Premium Tools",
        "Access Latest Features",
        "Pro Storage",
        "Cancel Any Time",
        "500 Credits"
      ],
      btntext: "GO PRO",
    },
  ];
  return (
    <div classname="container bg-light d-md-flex align-items-center">
      <Dashbaord>
      <div className="page-container">
        <div className="image-column">
          {listpricingCard2Data.map((item) => (
            <div
              className="card bg- shadow border-0 mb-4 justify-content-between"
              style={{ width: "90%", height: "auto" }}
            >
              <div className="py-3">
                <h5 className="fw-bold">{item?.title}</h5>
                <h4 className="fw-bold">{item?.price}</h4>
              </div>
              <div className="mypricecardlist px-3 pb-5 mb-2">
                <ul>
                  {item?.trialHints?.map((eachString) => (
                    <li>{eachString}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="form-column">
          <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
            {/* Payment form and other fields */}
            <CardElement className="stripe-inputs" options={element} />
            {/* Add other fields of the payment form here */}
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="my-3"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="my-3"
            />
            
            <button className="btn btn-primary btn-block mt-5 mb-3 w-100 py-2 shadow fw-bold">
              Pay
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
      </Dashbaord>
      
    </div>
  );
};
