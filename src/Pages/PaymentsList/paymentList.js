import React, { useEffect, useState } from "react";
// import "./styles.css";
import Dashbaord from "../Dashboard/Dashboard/Dashboard";
import { baseURL } from "../../config";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const PaymentPage = () => {
  const [payments, setPayments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    fetch(baseURL+"get_all_payments")
      .then((response) => response.json())
      .then((data) => setPayments(data?.payment))
      .catch((error) => console.log(error));
  }, []);
    
  console.log(payments, 'payment')

  let loginResponse = localStorage.getItem("loginResponse");
        loginResponse = JSON.parse(loginResponse);
      const  userId= loginResponse.userDetail._id;
  useEffect(() => {
    fetch(baseURL+`check-plan-status/${userId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log('Plan Status:',data, data.isActive);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
  }, []);

  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records  = payments.slice(firstIndex, lastIndex);
  const npage = Math.ceil(payments.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  

  
  return (
    <>
      <Dashbaord>
        <div className="min-vh-100" style={{ backgroundColor: "#f0f8ff" }}>
           <h1>Payments</h1>
           <div className="container-fluid">
           <div className="row">
           <table id="dtBasicExample" className="table table-bordered table-striped table-sm" cellspacing="0" width="100%">
                 <thead className="thead-dark">
                <tr> 
                  <th>Name</th>
                  <th>Email</th>
                  <th>Amount</th>
                  <th>Expired</th>
                  {/* <th>Address</th>
                   <th>City</th> 
                  <th>Plan ID</th>
                  <th>Postal Code</th> */}
                  <th>Created At</th>
                </tr>
              </thead>
              <tbody>
                {records.map((payment) => (
                  <tr key={payment.id}>   
                    <td>{payment.name}</td>
                    <td>{payment.email}</td>
                    <td>${payment.amount}</td>
                    <td></td>
                    {/* <td>{payment.address}</td>
                     <td>{payment.city}</td>
                   
                    <td>{payment.planId}</td>
                    <td>{payment.postcode}</td> */}
                    <td>{payment.created_at}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </Dashbaord>
    </>
  );
};

export default PaymentPage;
