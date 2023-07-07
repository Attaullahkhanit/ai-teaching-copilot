import React from 'react'
import './Footer.css'
import { Icon } from 'react-animated-fa'
import { Link } from 'react-router-dom';
import {RiFacebookFill} from 'react-icons/ri'
import { AiFillYoutube } from 'react-icons/ai';

function Footer() {
    return (
        <>
            <footer className="bg-light text-center text-white mt-auto">
                <div className="container pb-0">
                    <section className="mb-4">
                        <Link
                            className="btn text-white btn-floating shadow m-1"
                            style={{backgroundColor: '#1778f2'}}
                            to="https://www.facebook.com/profile.php?id=100092227787152"
                            target="_blank"
                            role="button"
                        ><RiFacebookFill size={25}/>
                        </Link>
                        
                        <Link
                            className="btn text-white btn-floating shadow m-1"
                            style={{backgroundColor: '#FF0000'}}
                            to="https://www.youtube.com/@TeachingCopilot/featured"
                            target="_blank"
                            role="button"
                        ><AiFillYoutube size={25}/>
                        </Link>

                    </section>
                </div>
                <div className="text-center d-flex flex-row justify-content-between py-lg-3 px-lg-5 py-sm-0 footerbottomtext" style={{backgroundColor: '#000000'}}>
                    <div>
                        © 2023 WebTriX:
                        <Link className="text-primary text-decoration-none px-3 px-sm-1   " to="#!"> All Right Reserved</Link>
                     </div>
                     <div>
                        <Link className="text-primary text-decoration-none px-4 px-sm-1" to="/termofuse"> Terms of use</Link>
                        <Link className="text-primary text-decoration-none px-sm-1" to="/privacypolicy"> Privacy Policy</Link>
                     </div>
                </div>
            </footer>
        </>
    )
}

export default Footer