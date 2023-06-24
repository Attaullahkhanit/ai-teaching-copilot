import React from 'react'
import Dashbaord from '../Dashboard/Dashboard'
import MCard from '../../../Components/PrimarytoolsCard/MCard'
import LCard from '../../../Components/PrimarytoolsCard/LCard'
import CCards from '../../../Components/PrimarytoolsCard/CCards'

function PrimaryTools() {

          //  Data of From Math
        const formmathcarditems1 = [
          { cardicon: "bi bi-clock fs-3 text-primary",
            title : 'Times Tables',
            p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'Topics or Lesson Content',
            inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
            agelabel: 'Audience Age',
            inputAgePlaceH: 'Example: Year 7, Aged 12', 
            paratext: 'Want to create a series of random times tables question? Just click to start.',
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

      const formmathcarditems2 = [
          { cardicon: "bi bi-plus-slash-minus fs-3 text-primary",
            title : 'Maths Starter',
            p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'Topics or Lesson Content',
            inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
            agelabel: 'Audience Age',
            inputAgePlaceH: 'Example: Year 7, Aged 12', 
            paratext: 'Maths starters questions to engage minds, focus attention and problem solve',
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

          const formmathcarditems3 = [
          { cardicon: "bi bi-person-vcard fs-3 text-primary",
            title : 'Teaching Strategies',
            p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'Topics or Lesson Content',
            inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
            agelabel: 'Audience Age',
            inputAgePlaceH: 'Example: Year 7, Aged 12', 
            paratext: 'Generate diverse teaching strategies to engage students in math and enhance their learning experience.',
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

          const formmathcarditems4 = [
          { cardicon: "bi bi-file-play fs-3 text-primary",
            title : 'Maths Free Play',
            p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'Topics or Lesson Content',
            inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
            agelabel: 'Audience Age',
            inputAgePlaceH: 'Example: Year 7, Aged 12', 
            paratext: 'Do you have an idea of your own and want to use our co-pilot without restrictions? Then let the fun begin.',
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

          // Data of form Literacy card

          const formliteracycarditems1 = [
            { cardicon: "bi bi-spellcheck fs-3 text-primary",
              title : 'Spellings',
              p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"",
              labletopics: 'Topics or Lesson Content',
              inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
              agelabel: 'Audience Age',
              inputAgePlaceH: 'Example: Year 7, Aged 12', 
              paratext: 'Generate random spelling questions instantly. Click to start and test your pupils spelling skills with varied exercises.',
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

          const formliteracycarditems2 = [
              { cardicon: "bi bi-sign-turn-slight-left fs-3 text-primary",
                title : 'Concept Navigator',
                p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
                p2:"Secondary Prompt: The age of the students is identified below: ",
                p3:"",
                labletopics: 'Topics or Lesson Content',
                inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
                agelabel: 'Audience Age',
                inputAgePlaceH: 'Example: Year 7, Aged 12', 
                paratext: 'Want helping explaining concepts, use this tool to prepare a definition, examples and activity.',
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

              const formliteracycarditems3 = [
              { cardicon: "bi bi-person-vcard fs-3 text-primary",
                title : 'Teaching Strategies',
                p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
                p2:"Secondary Prompt: The age of the students is identified below: ",
                p3:"",
                labletopics: 'Topics or Lesson Content',
                inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
                agelabel: 'Audience Age',
                inputAgePlaceH: 'Example: Year 7, Aged 12', 
                paratext: 'Generate diverse teaching strategies to engage students in math and enhance their learning experience.',
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

              const formliteracycarditems4 = [
              { cardicon: "bi bi-file-play fs-3 text-primary",
                title : 'Literacy Free Play',
                p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
                p2:"Secondary Prompt: The age of the students is identified below: ",
                p3:"",
                labletopics: 'Topics or Lesson Content',
                inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
                agelabel: 'Audience Age',
                inputAgePlaceH: 'Example: Year 7, Aged 12', 
                paratext: 'Do you have an idea of your own and want to use our co-pilot without restrictions? Then let the fun begin.',
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

          // Data of form Creative card

          const formcreativecarditems1 = [
            { cardicon: "bi bi-journal-text fs-3 text-primary",
              title : 'Text Simplifier',
              p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"",
              labletopics: 'Topics or Lesson Content',
              inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
              agelabel: 'Audience Age',
              inputAgePlaceH: 'Example: Year 7, Aged 12', 
              paratext: 'Want to simplify text by extracting the main ideas , key points for quick understanding and decision-making.',
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

          const formcreativecarditems2 = [
              { cardicon: "bi bi-file-text fs-3 text-primary",
                title : 'Poem Creator',
                p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
                p2:"Secondary Prompt: The age of the students is identified below: ",
                p3:"",
                labletopics: 'Topics or Lesson Content',
                inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
                agelabel: 'Audience Age',
                inputAgePlaceH: 'Example: Year 7, Aged 12', 
                paratext: 'Use the poem creator to engage and inspire students in the class. Just add keywords.',
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

              const formcreativecarditems3 = [
              { cardicon: "bi bi-puzzle-fill fs-3 text-primary",
                title : 'Secret Puzzle',
                p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
                p2:"Secondary Prompt: The age of the students is identified below: ",
                p3:"",
                labletopics: 'Topics or Lesson Content',
                inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
                agelabel: 'Audience Age',
                inputAgePlaceH: 'Example: Year 7, Aged 12', 
                paratext: 'Want to generate a secret puzzle to challenge pupils in the form a riddle',
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

              const formcreativecarditems4 = [
              { cardicon: "bi bi-activity fs-3 text-primary",
                title : 'Activity Generator',
                p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
                p2:"Secondary Prompt: The age of the students is identified below: ",
                p3:"",
                labletopics: 'Topics or Lesson Content',
                inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
                agelabel: 'Audience Age',
                inputAgePlaceH: 'Example: Year 7, Aged 12', 
                paratext: 'Create  a worksheet to complete various tasks or activities on  a topic of your choice.',
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

          const formcreativecarditems5 = [
            { cardicon: "bi bi-pen fs-3 text-primary",
              title : 'Writing Exemplar',
              p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"",
              labletopics: 'Topics or Lesson Content',
              inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
              agelabel: 'Audience Age',
              inputAgePlaceH: 'Example: Year 7, Aged 12', 
              paratext: 'Prepare a writing exemplar on a topic of your choice and for the appropriate age',
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

          const formcreativecarditems6 = [
              { cardicon: "bi bi-escape fs-3 text-primary",
                title : 'Escape Room',
                p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
                p2:"Secondary Prompt: The age of the students is identified below: ",
                p3:"",
                labletopics: 'Topics or Lesson Content',
                inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
                agelabel: 'Audience Age',
                inputAgePlaceH: 'Example: Year 7, Aged 12', 
                paratext: 'Engage students with an exciting escape room experience, where they solve puzzles and unravel mysteries together.',
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

              const formcreativecarditems7 = [
              { cardicon: "bi bi-bullseye fs-3 text-primary",
                title : 'Focus Restorer',
                p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
                p2:"Secondary Prompt: The age of the students is identified below: ",
                p3:"",
                labletopics: 'Topics or Lesson Content',
                inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
                agelabel: 'Audience Age',
                inputAgePlaceH: 'Example: Year 7, Aged 12', 
                paratext: 'Quick mindfulness activities or games to refresh and refocus during learning or work.',
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

              const formcreativecarditems8 = [
              { cardicon: "bi bi-emoji-laughing fs-3 text-primary",
                title : 'Joke Creator',
                p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
                p2:"Secondary Prompt: The age of the students is identified below: ",
                p3:"",
                labletopics: 'Topics or Lesson Content',
                inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
                agelabel: 'Audience Age',
                inputAgePlaceH: 'Example: Year 7, Aged 12', 
                paratext: 'Instant laughter at the touch of a button. Generating pupil friendly humor bringing smiles and joy.',
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
                    <h4 className=" text-white fw-bold py-2 px-3" style={{backgroundColor: '#036CFF'}}>Primary Tools</h4>
                </div>
                {/* Section_Math */}
                <div className="Section-math">
                  <div className="container-fluid">
                    <div className='row my-lg-3 my-md-3'>
                        <h5 className='fw-bold px-3 py-3' style={{color: '#036CFF'}}>Primary Tools/Math</h5>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <MCard formmathcard ={[...formmathcarditems1]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <MCard formmathcard ={[...formmathcarditems2]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <MCard formmathcard ={[...formmathcarditems3]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <MCard formmathcard ={[...formmathcarditems4]}/>
                        </div>
                    </div>
                  </div>
                </div>

                {/* Section-Literacy */}

                <div className="Section-literacy">
                  <div className="container-fluid">
                    <div className='row my-lg-3 my-md-3'>
                        <h5 className='fw-bold px-3 py-3' style={{color: '#036CFF'}}>Primary Tools/Literacy</h5>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <LCard formliteracycard ={[...formliteracycarditems1]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <LCard formliteracycard ={[...formliteracycarditems2]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <LCard formliteracycard ={[...formliteracycarditems3]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <LCard formliteracycard ={[...formliteracycarditems4]}/>
                        </div>
                    </div>
                  </div>
                </div>

                {/* Section-creative */}

                <div className="Section-literacy">
                  <div className="container-fluid">
                    <div className='row my-lg-3 my-md-3'>
                        <h5 className='fw-bold px-3 py-3' style={{color: '#036CFF'}}>Primary Tools/Creative</h5>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <CCards formcreativecard ={[...formcreativecarditems1]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <CCards formcreativecard ={[...formcreativecarditems2]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <CCards formcreativecard ={[...formcreativecarditems3]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <CCards formcreativecard ={[...formcreativecarditems4]}/>
                        </div>
                    </div>

                    <div className='row my-lg-3 my-md-3'>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <CCards formcreativecard ={[...formcreativecarditems5]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <CCards formcreativecard ={[...formcreativecarditems6]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <CCards formcreativecard ={[...formcreativecarditems7]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <CCards formcreativecard ={[...formcreativecarditems8]}/>
                        </div>
                    </div>
                  </div>
                </div>

            </div>
        </Dashbaord>
    </>
  )
}

export default PrimaryTools