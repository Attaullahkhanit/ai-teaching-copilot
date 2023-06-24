import React from 'react';
import './Pricing.css';
import PricingCard from '../../Components/PricingCard/PricingCard';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function Pricing() {
      const [alignment, setAlignment] = React.useState('Monthly');

      const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
      }


    const listpricingCard1Data =
      [
        {
          title: 'Free Trial',
          price: 'Free',
          trialHints:[ 'Immediate Access', 'Advance Tools', '10 Free Credits'],
          btntext: 'LOGIN',
          navigat: '/'
        }
      ]
    const listpricingCard2Data =
      [
        {
          title: 'For Teachers',
          price: '£6.99 / £60 Annual',
          trialHints:[ 'Full Access','Email Support','Premium Tools','Access Latest Features','Pro Storage','Cancel Any Time','500 Credits'],
          btntext: 'GO PRO',
          navigat: '/CheckoutForm'
        }
      ]
    const listpricingCard3Data =
      [
        {
          title: 'For Schools',
          price: 'Contact Us',
          trialHints:['Wholeschool Training','Full Access','Text Editor','Email Support','Seamless Integration'],
          btntext: 'CONTACT',
          navigat: '/contact'
        }
      ]
    return (

      <>
        <Navbar />
        <section className='backimg pb-4 mb-3'>
        <div className='container text-center justify-content-center pb-5'>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className='py-3'>
                <div>
                  <h2 className='fw-bold pb-3 pt-2'>Choose Your Plan</h2>
                </div>
                <div>
                  <p className='pb-3 pt-2'>
                    Teaching is hard enough, but with our AI tools at your fingertips, 
                    saving time is a breeze - upgrade <br/>now and enjoy a life beyond the classroom
                  </p>
                </div>

                {/* <ToggleButtonGroup
                  className='togglebuttongroup mb-4'
                  style={{ borderRadius: '25px'}}
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleChange}
                  aria-label="Platform"
                >
                  <ToggleButton className='togglebutton' value="Monthly" style={{borderRadius: '25px'}}>Monthly</ToggleButton>
                  <ToggleButton className='togglebutton' value="Annualy" style={{borderRadius: '25px',}}>Annualy</ToggleButton>
                </ToggleButtonGroup> */}

                {/* <div className='pb-5'>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div> */}
              </div>
              <div className='row pb-5'>
                <div className='col-lg-4 col-md-12 col-md-12 d-flex align-items-stretch'>
                  <PricingCard pricingCardData={listpricingCard1Data} />
                </div>
                <div className='col-lg-4 col-md-12 col-md-12 d-flex align-items-stretch'>
                  <PricingCard pricingCardData={listpricingCard2Data} />
                </div>
                <div className='col-lg-4 col-md-12 col-md-12 d-flex align-items-stretch'>
                  <PricingCard pricingCardData={listpricingCard3Data} />
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        <Footer />
      </>
    )
  }

  export default Pricing