import React, { useEffect, useState } from 'react';
import './ProUpgrade.css';
import Dashbaord from '../Dashboard/Dashboard';
import { parse } from 'popper/farms/saucelabs';

function ProUpgrade() {
//       const [topicvalue, setTopicValue] = useState();
//       const [ageValue, setAgeValue] = useState();

//       const myObjData = {
//            topicvalue: topicvalue,
//            agevalue: ageValue
//       }

      
// const API_KEY ="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"
//     const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
//       "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
//     } 
//       const submitMyObj = async() => {
//         const apiRequestBody = {
//           "model": "gpt-3.5-turbo",
//           "messages": [
//             systemMessage,  // The system message DEFINES the logic of our chatGPT
//             { role: "user", content: "hellow "}
//           ]
//         }
//         await fetch("https://api.openai.com/v1/chat/completions", 
//           {
//             method: "POST",
//             headers: {
//               "Authorization": "Bearer " + API_KEY,
//               "Content-Type": "application/json"
//             },
//             body: JSON.stringify(apiRequestBody)
//         }).then((data) => {
//           return data.json();
//         }).then((data) => {
//           console.log(data, 'fff'); 
//         }); 
//     }
      
  

  return (
    <>
        <Dashbaord>
            <div className="px-5 py-5">
              <h3 className="fw-bold">
                Some cool things comming
              </h3>
              <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-success" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-info" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-light" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-dark" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>

            {/* <div>
              <label>Topics</label>
              <input type='text' value={topicvalue} onChange={(e) => setTopicValue(e.target.value)}/>
              <br/>
              <label>Age</label>
              <input type='text' value={ageValue} onChange={(e) => setAgeValue(e.target.value)}/>
              <br/>
              <button type='button' onClick={submitMyObj}>Submit</button>

              <div>

              </div>
            </div> */}
        </Dashbaord>
    </>
  )
}

export default ProUpgrade