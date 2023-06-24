import React from 'react';
import SigninCard from '../../Components/SigninCard/SigninCard';
import './signin.css';
import { getFileSrcFromPublicimg } from '../../utils';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';


function SignIn() {

          
 const pOnchnage =(e) => {
   console.log(e.target.value)
  }
  return (
    <>
    <Navbar/>
    <section className='mb-5 mt-3'>
      <div className='container'>
        <div className='row'>
          <div className="col-lg-8">
            <div className='d-flex flex-column justify-content-center h-100 pb-3 signbgimg'>
              <div>
                <h1 className='text-dark' style={{textShadow: '5px 2px 5px #bbb'}}>Sign In to<br/>Reacharge Direct</h1>
              </div>
              <div className='pt-5'>
                <p className='text-secondary' style={{textShadow: '5px 2px 5px #bbb'}}>If you don't have an<br/>account you can<br/><Link to="/register" className='text-decoration-none'><span className='text-primary'>Register here!</span></Link></p>
              </div>
              {/* <div>
                <img src={getFileSrcFromPublicimg('falldownman.png')} alt='img'/>
              </div> */}
            </div>
          </div>
          <div className='col-lg-4'>
            <SigninCard passwordOnchange={pOnchnage} />
          </div>
        </div>

      </div>
      </section>
      <Footer/>
    </>
  )
}

export default SignIn