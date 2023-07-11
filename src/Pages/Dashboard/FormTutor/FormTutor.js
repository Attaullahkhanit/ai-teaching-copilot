import React from 'react'
import Dashbaord from "../Dashboard/Dashboard";
import CreateAndPlayCards from '../../../Components/CreateAndPlayCards/CreateAndPlayCards';
import FTCard from '../../../Components/FormTutorCards/FTCard';
import { useState } from 'react';
import { useEffect } from 'react';
import { baseURL } from '../../../config';

function FormTutor() {

      const [isPaid, setPlanStatus] = useState(false);
      useEffect(() => {
        let loginResponse = localStorage.getItem("loginResponse");
            loginResponse = JSON.parse(loginResponse); 
              fetch(`https://copilot-bk-node-production.up.railway.app/track_user_free_credits/${loginResponse.userDetail._id}`, {method: 'GET',})
              .then(response => response.json())
              .then(FreeCreditResult =>{
                    fetch(baseURL+"check-plan-status/"+loginResponse.userDetail._id)
                    .then(response => response.json())
                    .then(result => {
                      setPlanStatus(FreeCreditResult?.trackcredits>0?true:result?.currentPlan_status?true:false)})
                    .catch(error => console.log('error', error)); 
                }).catch(error => console.log('error', error));
    }, [ ]);

    const formtutorcarditems1 = [
        { cardicon: "bi bi-controller fs-3 text-primary",
          tooltitle: 'Form Tutor',
          title : 'Pictionary',
          p1:" prompt: `Primary Prompt: I am a school teacher can you prepare a list of 20 words that can be used for Pictionary based on this topic [Topic]. I will identify the age which is [AGE] to ensure it is suitable for the audience.",
          p2:"Secondary Prompt: The age of the students is identified below: ",
          p3:"",
          labletopics: 'Topics or Lesson Content',
          inputPlaceH: 'Example:Movie Stars, Ancient Civilization, Forces and Motion, Healthy Living, General Knowledge',
          agelabel: 'Pupils Age',
          inputAgePlaceH: 'Example:Year 7, Aged 12', 
          paratext: 'Generate a topic-based list of keywords for students to draw in a Pictionary-style game. Lets play!',
          namebtn: 'Launch',
          Notes_content: `<div>
          <p>The generator will create 20 words for students to draw.</p>
          <p>If you want to increase the difficulty, increase the age and vice versa.</p>
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
          tooltitle: 'Form Tutor',
          title : 'Guessing Game',
          p1:" prompt: `Primary Prompt: I am a school teacher and for my form class I want to create a guessing game by giving 5 clues and then the answer at the bottom, consider the audiences age [AGE]: ",
          p2:"Secondary Prompt: The age of the students is identified below: ",
          p3:"",
          labletopics: 'Topics or Lesson Content',
          inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
          agelabel: 'Pupils Age',
          inputAgePlaceH: 'Example:Year 8, Aged 13', 
          paratext: 'Guess what I am thinking? Students receive 5 clues to identify an object/person/place.',
          namebtn: 'Launch',
          Notes_content: `<div>
          <p>This activity will get students thinking, consider adding points for getting the answer using fewer clues.</p>
          <p>Want to increase the difficulty? Just increase the age.</p>
        </div>`,
          isPdf:true,
          oneInput: true,
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
          tooltitle: 'Form Tutor',
          title : 'Thought of the Day',
          p1:" prompt: `Primary Prompt: I am a school teacher and for my form class I want to create a thought for the day based on [Category ] and they are [Age]. ",
          p2:"Secondary Prompt: The age of the students is identified below: ",
          p3:"",
          labletopics: 'Thought Focus:',
          inputPlaceH: 'Inspirational quote, mindfulness, diversity',
          agelabel: 'Pupils Age',
          inputAgePlaceH: 'Example: Year 7, Aged 12', 
          paratext: 'Inspirational message that is designed to provide individuals with encouragement, positivity, and motivation',
          namebtn: 'Launch',
          Notes_content: `<div>
          <p>Consider the following categories:</p>
          <ul>
              <li>Inspirational quotes</li>
              <li>Kindness and empathy</li>
              <li>Personal development</li>
              <li>Self-improvement</li>
              <li>Mindfulness and well-being</li>
              <li>Education and learning</li>
              <li>Success and determination</li>
              <li>Diversity and inclusivity</li>
              <li>Social awareness</li>
              <li>Gratitude and positivity</li>
          </ul>
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
          tooltitle: 'Form Tutor',
          title : 'Form Time Quiz',
          p1:" prompt: `Primary Prompt: Can you prepare a multiple choice quiz for the topic [Topic] and the age of the students is [AGE]. The quiz will include 8 multiple choice questions with 4 possible answers, the correct answer will be highlighted and explained in detail. ",
          p2:"Secondary Prompt: The age of the students is identified below: ",
          p3:"",
          labletopics: 'Topic or Lesson Content',
          inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
          agelabel: 'Pupils Age ',
          inputAgePlaceH: 'Example: Year 9, Aged 14', 
          paratext: 'Create a fun quiz to engage your form group on a subject or topic that interests them.',
          namebtn: 'Launch',
          Notes_content: `<div>
          
          <p>Create multiple choice questions for the form group on a topic of your choice, it will prepare 8 reponses with distractors that are plausible but incorrect.</p>
          
          <p>Within the topic section be sure to add sufficient details.</p>
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
          tooltitle: 'Form Tutor',
          title : 'Parent Emails',
          p1:" prompt: `Primary Prompt: I am a school leader can you prepare an email for: [Recipients] and can you include the following [Description]: ",
          p2:"Secondary Prompt: The email will need to include: ",
          p3:"",
          labletopics: 'Who are the intended recipients ?',
          inputPlaceH: 'Example: Students, Parents, Staff  ',
          agelabel: 'Describe content to include.',
          inputAgePlaceH: 'Example: Year 7, Aged 12', 
          paratext: 'Example: Describe want you want communicated to students, parents or staff.',
          namebtn: 'Launch',
          Notes_content: `<div>
          <p>Automatically Generate Emails for Students, Parents, and Staff
           that are well-written, thoughtful, and personalized. Here are some examples: Welcome emails, Progress updates, Behavior notifications, Events and activities etc </p>
          <p>Consider the following:</p>
          <ol>
              <li>Content and purpose of the email</li>
              <li>Background information</li>
              <li>Important information</li>
              <li>Specify timeline if appropriate</li>
              <li>End with a positive note</li>
              <li>Review the draft in the text editor on the right and make any necessary adjustments to ensure it reflects your intended message and tone.</li>
          </ol>
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
          tooltitle: 'Form Tutor',
          title : 'Phone Calls',
          p1:" prompt: `Primary Prompt: I am a school teacher and need to phone home to the parents of my tutee can you help me to structure my phone call. The current issue I have is [ Description]: ",
          p2:"Secondary Prompt: The age of the students is identified below: ",
          p3:"",
          labletopics: 'Description:',
          inputPlaceH: 'I need to discuss, academic performance, underperformance',
          agelabel: 'Pupils Age',
          inputAgePlaceH: 'Example: Year 7, Aged 12', 
          paratext: 'Guidance on how to structure phone call to parents delivering difficult new',
          namebtn: 'Launch',
          Notes_content: `<div>
          <p>What Might You Discuss at Home?</p>
          <ul>
              <li>Positive or negative feedback from teachers</li>
              <li>Behavior concerns</li>
              <li>Academic performance</li>
              <li>Project or assignment completion</li>
              <li>Recognition of awards</li>
              <li>Personal growth or milestones</li>
          </ul>
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
          tooltitle: 'Form Tutor',
          title : 'Form Reports',
          p1:" prompt: `Primary Prompt: I am school form tutor writing a written report can you include [Description ] and the pupil is [age].  The report will need to have a word count of [ word count ] . ",
          p2:"Secondary Prompt: The age of the students is identified below: ",
          p3:"",
          labletopics: 'Description.',
          inputPlaceH: 'Example: Describe want you want communicated within the report consider strengths and focus areas.',
          agelabel: 'Pupils Age:',
          inputAgePlaceH: 'Example: Aged 11', 
          input3title: 'Word Count:',
          input3PlaceH: 'Example: 200words, 450 words',
          paratext: 'Generate form tutor reports that are accurate, comprehensive and well written.',
          namebtn: 'Launch',
          Notes_content: `<div>
          <p>Automatically Generate Emails for Your Tutees</p>
          <p>Create well-written, thoughtful, and personalized emails. Consider the following:</p>
          <ol>
              <li>Content and purpose of the report</li>
              <li>Attendance, Academic Progress, Behavior and Conduct</li>
              <li>Personal and Social Development</li>
              <li>Individual goals and targets</li>
              <li>End with a positive note</li>
              <li>Review the draft in the text editor on the right and make any necessary adjustments to ensure it reflects your intended message and tone.</li>
          </ol>
          </div>`,
          isPdf:true,
          threeInput: true,
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
          tooltitle: 'Form Tutor',
          title : 'Free Play',
          p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
          p2:"Secondary Prompt: The age of the students is identified below: ",
          p3:"",
          labletopics: 'Default text:',
          inputPlaceH: 'Look at the teacher tips below for some ideas',
          agelabel: 'Audience Age',
          inputAgePlaceH: 'Example: Year 7, Aged 12', 
          paratext: 'Do you have an idea for your form group use our co-pilot without restrictions?  Try it out.',
          namebtn: 'Launch',
          Notes_content: `<div>
          
          <p>Write a report for my tutee who wants help looking for work experience</p>
            Help me write a letter of recommendation for my tutee.<br/>
            Create a list of ideas that would engage my form group at tutor time.<br/>
            Give me 3 quote that i could use to inspire my form group.<br/>
            Share 5 tips that i can give to my tutor group to support them through their assessments.<br/>
            
          <p>Feel free to have a play :-)</p>
        </div>`,
          isPdf:true,
          isForEditer: true,
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
          tooltitle: 'Form Tutor',
          title : 'Idea Generator',
          p1:" prompt: `Primary Prompt: I am a school form tutor and I want to generate ideas for [Description]. The students are aged [age]: ",
          p2:"Secondary Prompt: The age of the students is identified below: ",
          p3:"",
          labletopics: 'Description (to generate ideas for)',
          inputPlaceH: 'Example: talent show, art competition, show and tell.',
          agelabel: 'Pupils Age:',
          inputAgePlaceH: 'Example: Aged 11', 
          paratext: 'Generate ideas for form time to keep them engage or just about anything else.',
          namebtn: 'Launch',
          Notes_content: `<div>
          <p>The Generator's Suggestions to Engage and Inspire Your Students</p>
          <p>Here are some examples:</p>
          <ul>
              <li>An upcoming talent show</li>
              <li>Ways to engage boys at form</li>
              <li>Increase attendance to form time</li>
              <li>Get the tutees communicating effectively</li>
          </ul>
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
          tooltitle: 'Form Tutor',
          title : 'Student Wellbeing',
          p1:" prompt: `Primary Prompt: I am a school form tutor and I want to support with student well being with a focus on  [Description]. The students are aged [age].: ",
          p2:"Secondary Prompt: The age of the students is identified below: ",
          p3:"",
          labletopics: 'Description',
          inputPlaceH: 'Examples: promote good hygiene, anxiety, stress',
          agelabel: 'Pupils Age:',
          inputAgePlaceH: 'Example: Year 7, Aged 12', 
          paratext: 'Guidance on how to support tutee wellbeing to ensure they are healthy, happy, and content with school life.',
          namebtn: 'Launch',
          Notes_content: `<div>
          
          <p>Want some ideas for student wellbeing consider?</p>
          <ul>
            <li>Group management strategies</li>
            <li>Team building activities</li>
            <li>Social and emotional learning</li>
            <li>Personal and academic support</li>
            <li>Communicating with parents</li>
            <li>Mental health and wellbeing</li>
            <li>Celebrating achievements</li>
          </ul></div>`,
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
          tooltitle: 'Form Tutor',
          title : 'Word of the Day',
          p1:" prompt: `Primary Prompt: I am a school form tutor and I want to support pupils with literacy, can you give me a three words for the day, share their meaning and take into consider they are aged [Age].",
          p2:"Secondary Prompt: The age of the students is identified below: ",
          p3:"",
          labletopics: 'Pupils Age:',
          inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
          agelabel: 'Pupils Age:',
          inputAgePlaceH: 'Example: Year 9, Aged 14', 
          paratext: 'Introducing new words daily expands vocabulary, broadens language skills, and enriches students word bank.',
          namebtn: 'Launch',
          Notes_content: `<div>
          <p>
              Just add the pupils age, click generate and three words will be generated with a description of its meaning and usage.
          </p>
          </div>`,
          isPdf:true,
          oneInput: true,
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
          tooltitle: 'Form Tutor',
          title : 'Tool Idea',
          p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
          p2:"Secondary Prompt: The age of the students is identified below: ",
          p3:"",
          labletopics: 'Topics or Lesson Content',
          inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
          agelabel: 'Audience Age',
          inputAgePlaceH: 'Example: Year 7, Aged 12', 
          paratext: 'If you have an awesome tool idea, be sure to share it with us via the contact page.',
          namebtn: 'Launch',
          navigatetoToolIdea: '/toolidea',
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
          toolIdea: true,
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
                    <h4 className="text-white fw-bold py-2 px-3" style={{backgroundColor: '#036CFF'}}>Form Tutor Tools</h4>
                </div> 
                <div className='container-fluid'>
                    <div className='row my-lg-3 my-md-3'>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FTCard planStatus={isPaid} formtutorcard ={[...formtutorcarditems1]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FTCard planStatus={isPaid} formtutorcard ={[...formtutorcarditems2]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FTCard planStatus={isPaid} formtutorcard ={[...formtutorcarditems3]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FTCard planStatus={isPaid} formtutorcard ={[...formtutorcarditems4]}/>
                        </div>
                    </div>
                    <div className='row my-lg-3 my-md-3'>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex  align-items-stretch'>
                            <FTCard planStatus={isPaid} formtutorcard ={[...formtutorcarditems5]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FTCard planStatus={isPaid} formtutorcard ={[...formtutorcarditems6]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FTCard planStatus={isPaid} formtutorcard ={[...formtutorcarditems7]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FTCard planStatus={isPaid} formtutorcard ={[...formtutorcarditems8]}/>
                        </div>
                    </div>
                    <div className='row my-lg-3 my-md-3'>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex  align-items-stretch'>
                            <FTCard planStatus={isPaid} formtutorcard ={[...formtutorcarditems9]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FTCard planStatus={isPaid} formtutorcard ={[...formtutorcarditems10]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FTCard planStatus={isPaid} formtutorcard ={[...formtutorcarditems11]}/>
                        </div>
                        {/* <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FTCard planStatus={isPaid} formtutorcard ={[...formtutorcarditems12]}/>
                        </div>  */}
                    </div>
                </div>  
            </div>
        </Dashbaord>
    </>
  )
}

export default FormTutor