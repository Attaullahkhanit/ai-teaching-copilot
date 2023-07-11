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
import { element, listpricingCard2Data } from "../utils";

export const CheckoutForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  let loginResponse = localStorage.getItem("loginResponse");
  loginResponse = JSON.parse(loginResponse);

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

        const { id } = paymentMethod;
        const response = await axios.post(baseURL + "create-payment-intent", {
          name: name,
          address: address,
          email: email,
          city: city,
          postcode: postalCode,
          userid: loginResponse.userDetail._id,
          amount: 999,
          planId: 5252,
          duration: 30,
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

  const createSubscription = async (event) => {
    event.preventDefault();

    try {
      // Set the expiry date to one month from the current date
      const expiryDate = new Date();
      expiryDate.setMonth(expiryDate.getMonth() + 1);

      // Format the expiry date as a string (e.g., "YYYY-MM-DD")
      const formattedExpiryDate = expiryDate.toISOString().split("T")[0];

      // create a payment method
      const { paymentMethod } = await stripe?.createPaymentMethod({
        type: "card",
        card: elements?.getElement(CardElement),
        billing_details: {
          name: name,
          email: email,
          expirty_date: formattedExpiryDate,
        },
      });
      // call the backend to create subscription
      const response = await fetch(
        "https://ai-copilot-bk-production.up.railway.app/create-subscription",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            paymentMethod: paymentMethod.id,
            name: name,
            address: address,
            email: email,
            city: city,
            postcode: postalCode,
          }),
        }
      ).then((res) => res.json());

      const confirmPayment = await stripe?.confirmCardPayment(
        response.clientSecret
      );
      // save the transaction in own data base 
      await axios.post(baseURL + "create-payment-OwnDb", {
        name: name,
        email: email,
        postcode: postalCode,
        userid: loginResponse.userDetail._id,
        amount: 699,
        planId: 5252,
        duration: 30,
        id: paymentMethod.id,
      });
      if (confirmPayment?.error) {
        alert(confirmPayment.error.message);
      } else {
        alert("Successfully done.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <Dashbaord>
        <div className="min-vh-100" style={{ backgroundColor: "#f0f8ff" }}>
        <div>
            <h4 className=" text-white fw-bold py-2 px-3" style={{backgroundColor: '#036CFF'}}>Pay Payment Form</h4>
        </div>
          <div className="container-fluid">
            <div className="row ">
              <div className="col-md-6">
                  {listpricingCard2Data.map((item) => (
                    <div
                      className="card bg-white shadow border-0 mb-4 justify-content-between"
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
              <div className="col-md-6">
                  <form
                    // onSubmit={handleSubmit}
                    onSubmit={createSubscription}
                    style={{ maxWidth: 400 }}
                    className="my-5"
                  >
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
                      Pay Now
                    </button>
                  </form>
                </div>
            </div>
          </div>
          </div>
        <ToastContainer />
      </Dashbaord>
  );
};
