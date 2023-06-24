import React from 'react';
import './PricingCard.css';
import { useNavigate } from 'react-router-dom';

function PricingCard({pricingCardData}) {
    const navigation= useNavigate()
    return (
        <>
        {pricingCardData.map((item) => (
            <div className='card shadow border-0 mb-4 justify-content-between' style={{width: '90%', height: 'auto'}}>
                <div className='py-3'>
                    <h5 className='fw-bold'>{item?.title}</h5>
                    <h4 className='fw-bold'>{item?.price}</h4>
                </div>
                <div className='mypricecardlist px-3 pb-5 mb-2'>
                    <ul>
                        {item?.trialHints?.map((eachString)=>(<li>
                            {eachString}
                        </li>))}  
                    </ul>
                </div>
                <div className='text-center'>
                    <button onClick={()=>navigation(`${item?.navigat}`)} className=' btn btn-primary fw-bold createaccountbtn px-4'>
                        {item?.btntext}
                    </button>
                </div>
            </div>
        ))}
        </>
    )
}

export default PricingCard