import React from 'react';
import './HomePage.css';
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer'
import SigninCard from '../../Components/SigninCard/SigninCard'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import { BsWhatsapp } from 'react-icons/bs';

function HomePage() {
  return (
    <>
      <Navbar/>
      <section className='mb-4'>
        <div className='container'>
          <div className='row'>
            <h6 className='mt-5'>"Ready to ditch the endless hours of lesson planning and paperwork? Our AI-powered education platform is here to help you work smarter, not harder.</h6>
            <div className='col-lg-8'>
              <VideoPlayer />

            </div>
            <div className='col-lg-4'>
              <SigninCard />
            </div>
          </div>
        </div>
          <Link to="https://api.whatsapp.com/send?phone=971581828500&text=Hello I am from Copilot Websit. I need Your Help." className="float" target="_blank">
            <BsWhatsapp className="my-float "/>
          </Link>
      </section>
      <Footer/>
    </>
  )
}

export default HomePage