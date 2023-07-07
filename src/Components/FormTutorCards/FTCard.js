import React from 'react'
import { useNavigate } from 'react-router-dom';

function FTCard({formtutorcard, planStatus}) {

    const navigate = useNavigate()
  function goToLessonPlan (cardData) {
      navigate('/lessonplan',{state:cardData} );
  }
  return (
    <>
        {formtutorcard.map((cardObj) => (
        <div className='card p-1 px-sm-0 my-2 text-center border-0 rounded-1 shadow-sm cardbgcss pb-2 d-flex flex-column justify-content-between'>
            <div>
              {console.log(cardObj,formtutorcard, 'createandplaycard')}
              <i className={cardObj?.cardicon}></i>
              <h5 className=''>{cardObj?.title}</h5></div>
            <div><p className=''>{cardObj?.paratext}</p></div>
            <div class="d-grid gap-3 col-11 mx-auto"> 

            {planStatus?
             <button className="btn btn-outline-warning p-1" type="button" onClick={()=>goToLessonPlan(cardObj)}>{cardObj?.namebtn}</button>:
            <button className="btn btn-outline-warning p-1" type="button" onClick={()=>navigate('/upgrade')}>Go to Paid plan</button>}
          </div>
        </div>
        ))}
    </>
  )
}

export default FTCard