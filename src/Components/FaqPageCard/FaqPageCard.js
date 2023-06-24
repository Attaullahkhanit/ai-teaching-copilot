import React from 'react';
import './FaqPageCard.css';

function FaqPageCard({faqpagecarddata}) {
    return (
        <>  
            {faqpagecarddata.map((items) => (
            <div className='card h-400 border-0 mb-4 rounded-0 p-3 cardtophover'>
                <h5>{items?.title}</h5>
                <p>{items?.paratext}</p>
            </div>
            ))}
        </>
    )
}

export default FaqPageCard