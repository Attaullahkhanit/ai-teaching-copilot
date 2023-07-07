import React, { useState } from 'react'
import Pagination from 'react-js-pagination';
import { baseURL } from '../../config';
import { useEffect } from 'react';
import './styles.css';
import Dashbaord from '../Dashboard/Dashboard/Dashboard';

function PaymentTransectionList() {
    const [activePage, setCurrentPage] = React.useState(1);
    const [paymentList, setPaymentList] = useState([])
    
    useEffect(() => {
        fetch(baseURL+"get_all_payments")
          .then((response) => response.json())
          .then((data) => setPaymentList(data?.payment))
          .catch((error) => console.log(error));
      }, []);
        
      console.log(paymentList, 'paymentfsdfsd')
      
            
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
    

    
    const todos = paymentList;
    const perPage = 12;
    const detectLastIndexOfList = activePage * perPage;
    const detectFistIndexOfList = detectLastIndexOfList - perPage;
    const currentList = todos.slice(detectFistIndexOfList, detectLastIndexOfList);
    
    const handlePageChange = (pageNumber) => {
            setCurrentPage(pageNumber)
    }
    
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
                {currentList?.map((payment) => (
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
                <div className='paginationcls'> 
                <Pagination
                activePage={ activePage }
                itemsCountPerPage={ 12 }
                totalItemsCount={ todos?.length }
                pageRangeDisplayed={ 3 }
                onChange={ handlePageChange }
                />
                </div>
            </div>
          </div>
        </div>
      </Dashbaord>
            
          
        </>
  )
}

export default PaymentTransectionList