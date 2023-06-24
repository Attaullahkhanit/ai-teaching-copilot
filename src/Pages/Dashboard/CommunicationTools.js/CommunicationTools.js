import React from 'react';
import './CommunicationTools.css';
import Dashbaord from '../Dashboard/Dashboard';
import FromCommToolsCard from '../../../Components/FormCommunicationToolCard/FromCommToolsCard';

function CommunicationTools() {

        const formtutorcarditems1 = [
          { cardicon: "bi bi-envelope-at fs-3 text-primary",
            title : 'Parent Emails',
            p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'Topics or Lesson Content',
            inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
            agelabel: 'Audience Age',
            inputAgePlaceH: 'Example: Year 7, Aged 12', 
            paratext: 'Want to keep parents up to date with students progress, or the weekly email.',
            namebtn: 'Coming Soon',
            Notes_content: `<div>
            
            <p>Take the time to create a lesson or topic, some examples:</p>
            <ul>
              <li>What makes up a plant cell?</li>
              <li>Create a lesson on the themes that appear in Macbeth</li>
              <li>How to round whole numbers?</li>
              <li>The history of the Romans?</li>
            </ul>
            <p>Within the description you could also consider the length of the lesson in minutes.</p>
          </div>`,
            isPdf:true,
            chatGPTOption:{
              model: "gpt-3.5-turbo",
              temperature: 0,
              max_tokens: 1000,
              top_p: 1,
              frequency_penalty: 0.0,
              presence_penalty: 0.0,  
            }
          }
      ]

      const formtutorcarditems2 = [
          { cardicon: "bi bi-view-list fs-3 text-primary",
            title : 'Subject Reports',
            p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'Topics or Lesson Content',
            inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
            agelabel: 'Audience Age',
            inputAgePlaceH: 'Example: Year 7, Aged 12', 
            paratext: 'Generate subject reports that are accurate, comprehensive and well written.',
            namebtn: 'Coming Soon',
            Notes_content: `<div>
            
            <p>Take the time to create a lesson or topic, some examples:</p>
            <ul>
              <li>What makes up a plant cell?</li>
              <li>Create a lesson on the themes that appear in Macbeth</li>
              <li>How to round whole numbers?</li>
              <li>The history of the Romans?</li>
            </ul>
            <p>Within the description you could also consider the length of the lesson in minutes.</p>
          </div>`,
            isPdf:true,
            chatGPTOption:{
              model: "gpt-3.5-turbo",
              temperature: 0,
              max_tokens: 1000,
              top_p: 1,
              frequency_penalty: 0.0,
              presence_penalty: 0.0,  
            }
          }]

          const formtutorcarditems3 = [
          { cardicon: "bi bi-activity fs-3 text-primary",
            title : 'Assembly Ideas',
            p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'Topics or Lesson Content',
            inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
            agelabel: 'Audience Age',
            inputAgePlaceH: 'Example: Year 7, Aged 12', 
            paratext: 'Generate content and ideas to help prepare your assembly presentation in minutes',
            namebtn: 'Coming Soon',
            Notes_content: `<div>
            
            <p>Take the time to create a lesson or topic, some examples:</p>
            <ul>
              <li>What makes up a plant cell?</li>
              <li>Create a lesson on the themes that appear in Macbeth</li>
              <li>How to round whole numbers?</li>
              <li>The history of the Romans?</li>
            </ul>
            <p>Within the description you could also consider the length of the lesson in minutes.</p>
          </div>`,
            isPdf:true,
            chatGPTOption:{
              model: "gpt-3.5-turbo",
              temperature: 0,
              max_tokens: 1000,
              top_p: 1,
              frequency_penalty: 0.0,
              presence_penalty: 0.0,  
            }
          }
      ]

          const formtutorcarditems4 = [
          { cardicon: "bi bi-people-fill fs-3 text-primary",
            title : 'Parents Evening',
            p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'Topics or Lesson Content',
            inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
            agelabel: 'Audience Age',
            inputAgePlaceH: 'Example: Year 7, Aged 12', 
            paratext: 'Use this too to help you structure your parents evening or parental meeting',
            namebtn: 'Coming Soon',
            Notes_content: `<div>
            
            <p>Take the time to create a lesson or topic, some examples:</p>
            <ul>
              <li>What makes up a plant cell?</li>
              <li>Create a lesson on the themes that appear in Macbeth</li>
              <li>How to round whole numbers?</li>
              <li>The history of the Romans?</li>
            </ul>
            <p>Within the description you could also consider the length of the lesson in minutes.</p>
          </div>`,
            isPdf:true,
            chatGPTOption:{
              model: "gpt-3.5-turbo",
              temperature: 0,
              max_tokens: 1000,
              top_p: 1,
              frequency_penalty: 0.0,
              presence_penalty: 0.0,  
            }
          }
      ]
      const formtutorcarditems5 = [
          { cardicon: "bi bi-newspaper fs-3 text-primary",
            title : 'School Newsletters',
            p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'Topics or Lesson Content',
            inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
            agelabel: 'Audience Age',
            inputAgePlaceH: 'Example: Year 7, Aged 12', 
            paratext: 'Want help to write that school newsletter or article then click here',
            namebtn: 'Coming Soon',
            Notes_content: `<div>
            
            <p>Take the time to create a lesson or topic, some examples:</p>
            <ul>
              <li>What makes up a plant cell?</li>
              <li>Create a lesson on the themes that appear in Macbeth</li>
              <li>How to round whole numbers?</li>
              <li>The history of the Romans?</li>
            </ul>
            <p>Within the description you could also consider the length of the lesson in minutes.</p>
          </div>`,
            isPdf:true,
            chatGPTOption:{
              model: "gpt-3.5-turbo",
              temperature: 0,
              max_tokens: 1000,
              top_p: 1,
              frequency_penalty: 0.0,
              presence_penalty: 0.0,  
            }
          }
      ]
      const formtutorcarditems6 = [
          { cardicon: "bi bi-card-checklist fs-3 text-primary",
            title : 'Permission Slips',
            p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'Topics or Lesson Content',
            inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
            agelabel: 'Audience Age',
            inputAgePlaceH: 'Example: Year 7, Aged 12', 
            paratext: 'Want to prepare a permission slip ready to be copied and printed',
            namebtn: 'Coming Soon',
            Notes_content: `<div>
            
            <p>Take the time to create a lesson or topic, some examples:</p>
            <ul>
              <li>What makes up a plant cell?</li>
              <li>Create a lesson on the themes that appear in Macbeth</li>
              <li>How to round whole numbers?</li>
              <li>The history of the Romans?</li>
            </ul>
            <p>Within the description you could also consider the length of the lesson in minutes.</p>
          </div>`,
            isPdf:true,
            chatGPTOption:{
              model: "gpt-3.5-turbo",
              temperature: 0,
              max_tokens: 1000,
              top_p: 1,
              frequency_penalty: 0.0,
              presence_penalty: 0.0,  
            }
          }
      ]
      const formtutorcarditems7 = [
          { cardicon: "bi bi-wechat fs-3 text-primary",
            title : 'Positive Message',
            p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'Topics or Lesson Content',
            inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
            agelabel: 'Audience Age',
            inputAgePlaceH: 'Example: Year 7, Aged 12', 
            paratext: 'Want to generate a positive message to share with pupils, parents or colleagues.',
            namebtn: 'Coming Soon',
            Notes_content: `<div>
            
            <p>Take the time to create a lesson or topic, some examples:</p>
            <ul>
              <li>What makes up a plant cell?</li>
              <li>Create a lesson on the themes that appear in Macbeth</li>
              <li>How to round whole numbers?</li>
              <li>The history of the Romans?</li>
            </ul>
            <p>Within the description you could also consider the length of the lesson in minutes.</p>
          </div>`,
            isPdf:true,
            chatGPTOption:{
              model: "gpt-3.5-turbo",
              temperature: 0,
              max_tokens: 1000,
              top_p: 1,
              frequency_penalty: 0.0,
              presence_penalty: 0.0,  
            }
          }
      ]
      const formtutorcarditems8 = [
          { cardicon: "bi bi-telegram fs-3 text-primary",
            title : 'Social Media Post',
            p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'Topics or Lesson Content',
            inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
            agelabel: 'Audience Age',
            inputAgePlaceH: 'Example: Year 7, Aged 12', 
            paratext: 'Generate a social media post that is accurate, comprehensive and well written.',
            namebtn: 'Coming Soon',
            Notes_content: `<div>
            
            <p>Take the time to create a lesson or topic, some examples:</p>
            <ul>
              <li>What makes up a plant cell?</li>
              <li>Create a lesson on the themes that appear in Macbeth</li>
              <li>How to round whole numbers?</li>
              <li>The history of the Romans?</li>
            </ul>
            <p>Within the description you could also consider the length of the lesson in minutes.</p>
          </div>`,
            isPdf:true,
            chatGPTOption:{
              model: "gpt-3.5-turbo",
              temperature: 0,
              max_tokens: 1000,
              top_p: 1,
              frequency_penalty: 0.0,
              presence_penalty: 0.0,  
            }
          }
      ]


  return (
    <>
        <Dashbaord>
            <div className="min-vh-100" style={{ backgroundColor: "#f0f8ff" }}>
                <div>
                    <h4 className=" text-white fw-bold py-2 px-3" style={{backgroundColor: '#036CFF'}}>Communication Tools</h4>
                </div>
                <div className='container-fluid'>
                    <div className='row my-lg-3 my-md-3'>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FromCommToolsCard formcommtoolCard ={[...formtutorcarditems1]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FromCommToolsCard formcommtoolCard ={[...formtutorcarditems2]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FromCommToolsCard formcommtoolCard ={[...formtutorcarditems3]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FromCommToolsCard formcommtoolCard ={[...formtutorcarditems4]}/>
                        </div>
                    </div>
                    <div className='row my-lg-3 my-md-3'>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex  align-items-stretch'>
                            <FromCommToolsCard formcommtoolCard ={[...formtutorcarditems5]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FromCommToolsCard formcommtoolCard ={[...formtutorcarditems6]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FromCommToolsCard formcommtoolCard ={[...formtutorcarditems7]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FromCommToolsCard formcommtoolCard ={[...formtutorcarditems8]}/>
                        </div>
                    </div>
                </div>
            </div>
        </Dashbaord>
    </>
  )
}

export default CommunicationTools