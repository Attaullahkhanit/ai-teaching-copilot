import React from 'react'
import Dashbaord from "../Dashboard/Dashboard";
import CreateAndPlayCards from '../../../Components/CreateAndPlayCards/CreateAndPlayCards';
import FTCard from '../../../Components/FormTutorCards/FTCard';

function FormTutor() {

    const formtutorcarditems1 = [
        { cardicon: "bi bi-controller fs-3 text-primary",
          title : 'Pictionary',
          p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
          p2:"Secondary Prompt: The age of the students is identified below: ",
          p3:"",
          labletopics: 'Topics or Lesson Content',
          inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
          agelabel: 'Audience Age',
          inputAgePlaceH: 'Example: Year 7, Aged 12', 
          paratext: 'Generate a topic-based list of keywords for students to draw in a Pictionary-style game. Lets play!',
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
        { cardicon: "bi bi-calculator fs-3 text-primary",
          title : 'Guessing Game',
          p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
          p2:"Secondary Prompt: The age of the students is identified below: ",
          p3:"",
          labletopics: 'Topics or Lesson Content',
          inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
          agelabel: 'Audience Age',
          inputAgePlaceH: 'Example: Year 7, Aged 12', 
          paratext: 'Guess what I am thinking? Students receive 5 clues to identify an object/person/place.',
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
        { cardicon: "bi bi-chat-dots-fill fs-3 text-primary",
          title : 'Thought of the Day',
          p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
          p2:"Secondary Prompt: The age of the students is identified below: ",
          p3:"",
          labletopics: 'Topics or Lesson Content',
          inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
          agelabel: 'Audience Age',
          inputAgePlaceH: 'Example: Year 7, Aged 12', 
          paratext: 'Inspirational message that is designed to provide individuals with encouragement, positivity, and motivation',
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
        { cardicon: "bi bi-alarm fs-3 text-primary",
          title : 'Form Time Quiz',
          p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
          p2:"Secondary Prompt: The age of the students is identified below: ",
          p3:"",
          labletopics: 'Topics or Lesson Content',
          inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
          agelabel: 'Audience Age',
          inputAgePlaceH: 'Example: Year 7, Aged 12', 
          paratext: 'Create a fun quiz to engage your form group on a subject or topic that interests them.',
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
        { cardicon: "bi bi-envelope-at fs-3 text-primary",
          title : 'Parent Emails',
          p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
          p2:"Secondary Prompt: The age of the students is identified below: ",
          p3:"",
          labletopics: 'Topics or Lesson Content',
          inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
          agelabel: 'Audience Age',
          inputAgePlaceH: 'Example: Year 7, Aged 12', 
          paratext: 'What to keep parents up to date with students progress, or the weekly email.',
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
        { cardicon: "bi bi-telephone-fill fs-3 text-primary",
          title : 'Phone Calls',
          p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
          p2:"Secondary Prompt: The age of the students is identified below: ",
          p3:"",
          labletopics: 'Topics or Lesson Content',
          inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
          agelabel: 'Audience Age',
          inputAgePlaceH: 'Example: Year 7, Aged 12', 
          paratext: 'Guidance on how to structure phone call to parents delivering difficult new',
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
        { cardicon: "bi bi-view-list fs-3 text-primary",
          title : 'Form Reports',
          p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
          p2:"Secondary Prompt: The age of the students is identified below: ",
          p3:"",
          labletopics: 'Topics or Lesson Content',
          inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
          agelabel: 'Audience Age',
          inputAgePlaceH: 'Example: Year 7, Aged 12', 
          paratext: 'Generate form tutor reports that are accurate, comprehensive and well written.',
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
        { cardicon: "bi bi-file-play fs-3 text-primary",
          title : 'Free Play',
          p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
          p2:"Secondary Prompt: The age of the students is identified below: ",
          p3:"",
          labletopics: 'Topics or Lesson Content',
          inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
          agelabel: 'Audience Age',
          inputAgePlaceH: 'Example: Year 7, Aged 12', 
          paratext: 'Do you have an idea for your form group use our co-pilot without restrictions?  Try it out.',
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
    const formtutorcarditems9 = [
        { cardicon: "bi bi-activity fs-3 text-primary",
          title : 'Idea Generator',
          p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
          p2:"Secondary Prompt: The age of the students is identified below: ",
          p3:"",
          labletopics: 'Topics or Lesson Content',
          inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
          agelabel: 'Audience Age',
          inputAgePlaceH: 'Example: Year 7, Aged 12', 
          paratext: 'Generate ideas for form time to keep them engage or just about anything else.',
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
    const formtutorcarditems10 = [
        { cardicon: "bi bi-mortarboard-fill fs-3 text-primary",
          title : 'Student Wellbeing',
          p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
          p2:"Secondary Prompt: The age of the students is identified below: ",
          p3:"",
          labletopics: 'Topics or Lesson Content',
          inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
          agelabel: 'Audience Age',
          inputAgePlaceH: 'Example: Year 7, Aged 12', 
          paratext: 'Guidance on how to support tutee wellbeing to ensure they are healthy, happy, and content with school life.',
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
    const formtutorcarditems11 = [
        { cardicon: "bi bi-file-word fs-3 text-primary",
          title : 'Word of the Day',
          p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
          p2:"Secondary Prompt: The age of the students is identified below: ",
          p3:"",
          labletopics: 'Topics or Lesson Content',
          inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
          agelabel: 'Audience Age',
          inputAgePlaceH: 'Example: Year 7, Aged 12', 
          paratext: 'Engaging puzzles to challenge and develop the tutees critical thinking skills.',
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
    const formtutorcarditems12 = [
        { cardicon: "bi bi-tools fs-3 text-primary",
          title : 'Tool Idea',
          p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
          p2:"Secondary Prompt: The age of the students is identified below: ",
          p3:"",
          labletopics: 'Topics or Lesson Content',
          inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
          agelabel: 'Audience Age',
          inputAgePlaceH: 'Example: Year 7, Aged 12', 
          paratext: 'If you have an awesome tool idea, be sure to share it with us via the contact page.',
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
                    <h4 className=" text-white fw-bold py-2 px-3" style={{backgroundColor: '#036CFF'}}>Form Tutor</h4>
                </div>
                <div className='container-fluid'>
                    <div className='row my-lg-3 my-md-3'>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FTCard formtutorcard ={[...formtutorcarditems1]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FTCard formtutorcard ={[...formtutorcarditems2]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FTCard formtutorcard ={[...formtutorcarditems3]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FTCard formtutorcard ={[...formtutorcarditems4]}/>
                        </div>
                    </div>
                    <div className='row my-lg-3 my-md-3'>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex  align-items-stretch'>
                            <FTCard formtutorcard ={[...formtutorcarditems5]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FTCard formtutorcard ={[...formtutorcarditems6]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FTCard formtutorcard ={[...formtutorcarditems7]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FTCard formtutorcard ={[...formtutorcarditems8]}/>
                        </div>
                    </div>
                    <div className='row my-lg-3 my-md-3'>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex  align-items-stretch'>
                            <FTCard formtutorcard ={[...formtutorcarditems9]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FTCard formtutorcard ={[...formtutorcarditems10]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FTCard formtutorcard ={[...formtutorcarditems11]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FTCard formtutorcard ={[...formtutorcarditems12]}/>
                        </div> 
                    </div>
                </div>  
            </div>
        </Dashbaord>
    </>
  )
}

export default FormTutor