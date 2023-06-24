import React from 'react';
import './Navbar.css';
import { useState } from 'react';
import { getFileSrcFromPublicimg } from '../../utils';
import { Link } from 'react-router-dom';



function Navbar() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className='container-fluid'>
                <Link className='navbar-brand' to="/"><img src={getFileSrcFromPublicimg("t-c-logo.png")} type="logotc"  width="100px" height="55px"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-between`} id="navbarsExample09">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item px-4 navbarList">
                            <Link className="nav-link text-dark fw-bolder" to="/">Home</Link>
                        </li>
                        <li className="nav-item px-4">
                            <Link className="nav-link text-dark fw-bolder" to="/about">About</Link>
                        </li>
                        <li className="nav-item px-4">
                            <Link className="nav-link text-dark fw-bolder" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item px-4">
                            <Link className="nav-link text-dark fw-bolder" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item px-3">
                            <Link className="nav-link text-dark fw-bolder" to="/">Sign in</Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link className="nav-link text-dark fw-bolder" to="/register">Register</Link>
                        </li>
                    </ul>             
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar