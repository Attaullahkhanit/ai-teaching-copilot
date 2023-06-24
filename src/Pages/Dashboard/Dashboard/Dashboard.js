import React from 'react'
import './Dashboard.css';
import SideBar from './SideBar';
import { Route, Routes } from 'react-router-dom';
import CreateAndPlay from '../Create&Play/CreateAndPlay';
import Downloads from '../Downloads/Downloads';
import Profile from '../Profile/Profile';

function Dashbaord(props) {
localStorage.setItem("jwt-token","9IpbaKhkiaRGjrdRqfIsRlShCsMVQUH9bTw_1S12")
  

  return (
    <>
        
        <div className='container-fluid'>
          <div className='row flex-nowrap'>
            <div className='bg-dark border-right-3 col-lg-2 col-xl-2 col-auto px-sm-2 px-0'>
                <SideBar />
            </div>
            <div className='col py-3 min-vh-100'>
                {props.children}
            </div>
          </div>
        </div>
    </>
  )
}

export default Dashbaord