import React, { Suspense } from 'react'
import { FcPlus } from 'react-icons/fc'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom';
import { getFileSrcFromPublicimg } from '../../utils';
import './About.css';



function About() {
  return (
    <>
      <Navbar/>
      <section className='mb-4 mt-5'>
        <div className='container'>
          <div>
            <h5>Teaching Copilot: AI & platform built by active teachers to power up your classroom with trusted expertise.</h5>
          </div>
          <div className='row py-5'>
            <div className='col-lg-5 col-md-12 col-sm-12'>
              <div className='card px-lg-5 py-lg-5 px-sm-2  border-0'>
                <h3 className='fw-bold'>About Us</h3>
                <p>
                  At Teacher Copilot, we are proud to say that our AI platform is developed by teachers for teachers. Our team of experienced educators understands the unique challenges that come with teaching and creating effective lesson plans, quizzes, and writing prompts. That's why we're committed to developing and improving our platform to better serve the needs of teachers and their students. Our mission is to provide high-quality resources and tools that save teachers time and help them focus on what really matters - fostering a love of learning and building relationships with their students. We believe that by leveraging the power of AI, we can make a meaningful impact on the education system. Join us today and let our AI platform help you transform your teaching and achieve better outcomes for your students!"
                </p>
              </div>
            </div>
            <div className='col-lg-7 col-md-12 col-sm-12'>
                <div className='mt-4'>
                  <div className='card h-300 border-0 rounded-0 p-3 cardtophover'>
                    <h5>Mr C Yalluri</h5>
                    <p>
                      Since I started using Teaching Copilot's lesson planning tools, I've been able to create engaging lessons in less time. The platform's easy-to-use interface and downloaded templates have saved me countless hours of planning and helped me deliver exciting lessons that my students love. Thank you for making teaching so much easier!
                    </p>
                  </div>

                  <div className='card h-300 border-0 rounded-0 p-3 cardtophover'>
                    <h5>Miss J Daly</h5>
                    <p>
                      As a teacher, I know how important it is to assess student learning. With Teaching Copilot's multiple choice quiz feature, I can create and adapt quizzes in minutes. My students love the interactive experience, and I love the time it saves me. Highly recommend!
                    </p>
                  </div>

                  <div className='card h-300 border-0 rounded-0 p-3 cardtophover'>
                    <h5>Mr S Khan</h5>
                    <p>
                    Writing reports used to be a time-consuming and stressful process, but Teaching Copilot has made it so much easier. With their intuitive report writing tools, I can easily organize my thoughts and create professional reports that accurately reflect my students' progress. Thank you for making my life as a teacher much less stressful!
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
        </section>
        <Footer/>
    </>
  )
}

export default About