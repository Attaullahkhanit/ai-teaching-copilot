import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import About from "./Pages/About/About";
import Pricing from "./Pages/Pricing/Pricing";
import Contact from "./Pages/Contact/Contact";
import NoPageFind from "./Pages/NoPage/NoPageFind";
import SignIn from "./Pages/SignIn/SignIn";
import Register from "./Pages/SignIn/Register";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import CreateAndPlay from "./Pages/Dashboard/Create&Play/CreateAndPlay";
import Downloads from "./Pages/Dashboard/Downloads/Downloads";
import Profile from "./Pages/Dashboard/Profile/Profile";
import ProUpgrade from "./Pages/Dashboard/ProUpgrade/ProUpgrade";
import ToolIdea from "./Pages/Dashboard/ToolIdea/ToolIdea";
import LessonPlan from "./Pages/Dashboard/Create&Play/LessonPlan";
import PDFGenerator from "./Components/pdf/generate-pdf";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom/dist";
import ForgottPassword from "./Pages/Forggot-passwod/forgot-passwword";
import { CheckoutForm } from "./Stripe/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import TermOfUse from "./Components/Footer/TermOfUse";
import PaymentForm from "./Stripe/PaymentForm";
import PaymentPage from "./Pages/PaymentsList/paymentList";
import ChartPage from "./Pages/ChartPage/ChartPage";
import FormTutor from "./Pages/Dashboard/FormTutor/FormTutor";
import ClassRoomTools from "./Pages/Dashboard/ClassRoomTools/ClassRoomTools";
import PrimaryTools from "./Pages/Dashboard/PrimaryTools/PrimaryTools";
import SecondaryTools from "./Pages/Dashboard/SecondaryTools/SecondaryTools";
import CommunicationTools from "./Pages/Dashboard/CommunicationTools.js/CommunicationTools";

 function App() {
  const stripePromise = loadStripe("pk_test_51IvIySJzkqBjcDruZRPj6kIra2jdsvhN2LFym7mI6PoNLqiqTHXFUpNGdarjI6kme3qV6aOhPbHvDv133XRa6RgU00rzv1csyo");

  const [isLoggedIn, setIsLoggedIn] = React.useState(
    localStorage.getItem("status")
  );
  const location = useLocation();
  const navigation = useNavigate();
  useEffect(() => {
    if (
       (location.pathname == "/lessonplan" ||
        location.pathname == "/profile" ||
        location.pathname == "/downloads" ||
        location.pathname == "/createplay" ||
        location.pathname == "/dashboard" ||
        location.pathname == "/toolidea") &&
        localStorage.getItem("status") !== true
    ) {
      navigation("/");
    }
  }, []);
  return (
    <>
      {/* Routing */}
      <Routes>
        {/* main pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
        <Route path="termofuse" element={<TermOfUse />} />
        <Route path="*" element={<NoPageFind />} />
        {/* main sub pages */}
        {/* Sign in */}
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/upgrade"
          element={
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          }
        /> 
        <Route path="/forget-password" element={<ForgottPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<PaymentForm/>} />
        <Route path="/payment-list" element={<PaymentPage/>} />
        <Route path="/chating" element={<ChartPage/>} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createplay" element={<CreateAndPlay />} />
        <Route path="/formtutor" element={<FormTutor />} />
        <Route path="/classroomtools" element={<ClassRoomTools />} />
        <Route path="/communicationtools" element={<CommunicationTools />} />
        <Route path="/primarytools" element={<PrimaryTools />} />
        <Route path="/secondarytools" element={<SecondaryTools />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/upgrade" element={<ProUpgrade />} /> */}
        <Route path="/toolidea" element={<ToolIdea />} />
        <Route path="/lessonplan" element={<LessonPlan />} />
        <Route path="/pdfgenerator" element={<PDFGenerator />} />
      </Routes>
    </>
  );
}

export default App;
