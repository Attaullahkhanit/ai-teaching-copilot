import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { baseURL } from '../../config';
  
function CreateAndPlayCards() { 
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


        const createandplaycardsitems1 = [
            { cardicon: "bi bi-calendar-event fs-3 text-primary",
              tooltitle: 'Classroom',
              title : 'Lesson Plan',
              p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"",
              labletopics: 'Topics or Lesson Content',
              inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
              agelabel: 'Audience Age',
              inputAgePlaceH: 'Example: Year 7, Aged 12', 
              paratext: 'Save yourself time by creating a lesson plan for a topic of your choice. Be sure to consider the topic, learning objectives and pupils ability.',
              namebtn: 'Launch',
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
        const createandplaycardsitems2 = [
            { cardicon: "bi bi-alarm fs-3 text-primary",
              tooltitle: 'Classroom',
              title : 'Quiz Time',
              p1:"Can you prepare a multiple choice quiz: ",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"Third Prompt: The quiz will include 8 multiple choice questions with 4 possible answers, the correct answer will be highlighted and explained in detail.",
              labletopics: 'Topics or Quiz Content',
              inputPlaceH: 'Default: Plant Cells, Macbeth, Rounding, Romans',
              agelabel: 'Audience Age', 
              inputAgePlaceH: 'Example: Year 7, Aged 12',
              paratext: 'Create a quiz in no time to help assess pupils learning. This can be used for both formative and summative assessments.',
              namebtn: 'Launch',
              Notes_content: `<div> 
              <p>Create multiple choice questions on a topic of your choice. For each question, provide 8 responses with distractors that are plausible but incorrect. <br/>Be sure to add sufficient details within the topic section.</p>
            </div>`,
              isPdf:false,
              chatGPTOption:{ 
                    name: "Q&A",
                    id: "q&a",
                    description: "Answer questions based on existing knowledge",
                    option: {
                      model: "gpt-3.5-turbo",
                      temperature: 0,
                      max_tokens: 1000,
                      top_p: 1,
                      frequency_penalty: 0.0,
                      presence_penalty: 0.0,
                    }, 
                },
            }
        ]
        const createandplaycardsitems3 = [
            { cardicon: 'bi bi-filetype-rb fs-3 text-primary',
              tooltitle: 'Classroom',
              title : 'Assessment Rubric',
              p1:"Primary Prompt: Below I will identify the skills or competencies to be assessed",
              p2:"Secondary Prompt: The age of the students is identified below:",
              p3:"Third Prompt: The level of performance for each area will be identified below",
              labletopics: 'Skills and Competencies',
              inputPlaceH: 'Default: proper grammar, organisation, clarity',
              input3title: 'Level of Performance',
              input3PlaceH: 'Excellent, good, fair, poor',
              agelabel: 'Audience Age', 
              inputAgePlaceH: 'Example: Year 7, Aged 12',
              paratext: 'Want to assess students learning, create a rubric. It will even help you to determine levels of performance.',
              namebtn: 'Launch',
              Notes_content: `<div> 
                  <p>The results will be displayed in a table format, with each row representing a different competency being assessed, and each column representing a different level of performance. The table is organised in a way that makes it easy to compare and contrast the different levels of performance across the different competencies.</p>
                </div>`,
              isPdf:true,
              threeInput: true,
              chatGPTOption:{
                    name: "Assessment Rubric",
                    id: "assessmentrubric",
                    description: "Want to assess students learning, create a rubric. It will even help you to determine levels of performance.",
                    option: {
                    model: "gpt-3.5-turbo",
                    temperature: 0,
                    max_tokens: 100,
                    top_p: 1,
                    frequency_penalty: 0.0,
                    presence_penalty: 0.0,
                    },
                },
            }
        ]
        const createandplaycardsitems4 = [
            { cardicon: 'bi bi-activity fs-3 text-primary',
              tooltitle: 'Classroom',
              title : 'Idea Generator',
              p1:"Primary Prompt: I am a school teacher, can you generate ideas for the following topic [Topic]. The ideas generated must be suitable for pupils aged [AGE].",
              p2:"Secondary Prompt: The age of the students is identified below:",
              p3:"",
              labletopics: `Choose a Topic (to generate idea for)`,
              agelabel: 'Audience Age', 
              inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
              inputAgePlaceH: 'Default: Aged 11',
              paratext: 'Generate ideas for activities , homework or just about anything else.',
              namebtn: 'Launch',
              Notes_content: `<div> 
                The generator will brainstorm and describe different ways to present topics, whether that be interactive 3D models, virtual field trips or DIY projects. Give it a try.</div>`,
              isPdf:false,
              chatGPTOption:{
                    name: "Idea Generator",
                    id: "ideagenerator",
                    description: "Generate ideas for activities , homework or just about anything else.",
                    option: {
                    model: "gpt-3.5-turbo",
                    temperature: 0,
                    max_tokens: 100,
                    top_p: 1,
                    frequency_penalty: 0.0,
                    presence_penalty: 0.0,
                    },
                },
            }
        ]

        const createandplaycardsitems5 = [
            { cardicon: 'bi bi-envelope-at fs-3 text-primary',
              tooltitle: 'Classroom',
              title : 'Parent Emails',
              p1:"Primary Prompt: Can you prepare an email for: ",
              p2:"Secondary Prompt: The email will need to include:",
              p3:"",
              labletopics: 'Who are the intended recipients?',
              inputPlaceH: 'Default: Students, Parents, Staff ',
              agelabel: 'Describe content to include.',
              inputAgePlaceH: 'Default: Describe want you want communicated to students, parents or staff.',
              paratext: 'Want to keep parents up to date with students progress, or the weekly email.',
              namebtn: 'Launch', 
              Notes_content: `<div> 
                  <p>Automatically generate emails for students, parents of staff that are well written, thoughtful and personalised. Here are some examples: Welcome emails, progress, behaviour, events and activities, etc.
                  Example:
                  An email home to parents to 
                  Consider: 
                    <ol>
                      <li>
                        Content and purpose of the email
                      </li>
                      <li>
                        Background information
                      </li>
                      <li>
                        Important Information
                      </li>
                      <li>
                        Specify Timeline if appropriate
                      </li>
                      <li>
                        End with a positive note
                      </li>
                    </ol>
                      Review the draft in the text editor on the right and make any necessary adjustments to ensure it reflect your intended message and tone.
                  </p>
                </div>`,
              isPdf:false,
              chatGPTOption:{
                    name: "Parent Emails",
                    id: "parentemails",
                    description: "Want to keep parents up to date with students progress, or the weekly email.",
                    option: {
                    model: "gpt-3.5-turbo",
                    temperature: 0,
                    max_tokens: 100,
                    top_p: 1,
                    frequency_penalty: 0.0,
                    presence_penalty: 0.0,
                    },
                },
            }
        ]
        const createandplaycardsitems6 = [
            { cardicon: 'bi bi-chat-dots fs-3 text-primary',
            tooltitle: 'Classroom',
            title : 'Discussion Questions',
            p1:"Primary Prompt: Below I will identify the topic or concept that I would like you to create a numbered list of ten thought provoking questions.",
            p2:"Secondary Prompt: The age of the students is identified below:",
            p3:"",
            labletopics: 'Audience',
            inputPlaceH: 'Default: Creative Writing, Careers, Percentages, Sustainability, Healthy Eating',
            agelabel: 'Audience Age', 
            inputAgePlaceH: 'Default: Aged 11',
            paratext: 'Want a range of thought provoking discussion questions to engage your pupils, just add a topic.',
            namebtn: 'Launch',
            Notes_content: `<p>Generate ten thought provoking questions, they could be used as a starter or plenary activity, to encourage critical thinking and generate collaboration in the classroom.</p>
            `,
            isPdf:false,
            chatGPTOption:{
                  name: "Free Play",
                  id: "freeplay",
                  description: "Do you have an idea of your own and want to use our co-pilot without restrictions? Then let the fun begin.",
                  option: {
                  model: "gpt-3.5-turbo",
                  temperature: 0,
                  max_tokens: 100,
                  top_p: 1,
                  frequency_penalty: 0.0,
                  presence_penalty: 0.0,
                  },
              },
            }
        ]
        const createandplaycardsitems7 = [
            { cardicon: 'bi bi-ticket-detailed fs-3 text-primary',
              tooltitle: 'Classroom',
              title : 'Report Writing',
              p1:"Primary Prompt: I want you to create a written report for the classroom teacher consider, the students name, type of report, strength, area for improvement. Finally provide the amount of alternative written reports identified below:",
              p2:"",
              p3:"",
              labletopics: 'Choose a report style',
              inputPlaceH: 'Default: form tutor report, subject report, written report',
              agelabel: 'Pupil Name', 
              inputAgePlaceH: 'Default: Aged 11',
              input3label: 'Area of strength',
              input3PlaceH: 'Default: strength e.g. calculating percentage, organisation etc',
              input4label: 'Area of Improvement',
              input4PlaceH: 'Default: Improvement, ___ could benefit from more practice with [specific skill or concept].',
              input5label: 'Audience',  
              input5PlaceH: 'Default: Year 9.',
              input6label: 'Variations',
              input6PlaceH: 'Default: 2 or 3 variations e.g. High, Middle, Low',
              paratext: 'Want help to generate written reports that are accurate, comprehensive and well written.',
              namebtn: 'Launch',
              Notes_content: `<h5>Example statements that could be used in academic reports:</h5><ul>
              <li>The pupil has demonstrated a solid understanding of the material covered this term.</li>
              <li>The pupil consistently participates in class and contributes to discussions.</li>
              <li>The pupil has shown improvement in <em>[specific area of the subject]</em>.</li>
              <li>The pupil could benefit from more practice with <em>[specific skill or concept]</em>.</li>
              <li>The pupil should focus on <em>[specific area of improvement]</em> in order to continue to progress.</li>
              <li>The pupil’s work is consistently of a high standard and shows attention to detail.</li>
              <li>The pupil has shown initiative in <em>[specific area of the subject]</em>.</li>
              <li>The pupil should make an effort to <em>[specific area of improvement]</em> in order to reach their full potential in this subject.</li>
            </ul>
            `, 
              isPdf:false,
              reportWriting: true,
              chatGPTOption:{
                    name: "Report Writing",
                    id: "reportwriting",
                    description: "Want help to generate written reports that are accurate, comprehensive and well written.",
                    option: {
                    model: "gpt-3.5-turbo",
                    temperature: 0,
                    max_tokens: 100,
                    top_p: 1,
                    frequency_penalty: 0.0,
                    presence_penalty: 0.0,
                    },
                },
            }
        ]
        const createandplaycardsitems8 = [
            { cardicon: 'bi bi-file-play fs-3 text-primary',
              tooltitle: 'Classroom',
              title : 'Free Play',
              p1:"Look at the teacher tips below for some ideas",
              p2:"",
              p3:"",
              labletopics: 'Topics or Lesson Content',
              inputPlaceH: 'Look at the teacher tips below for some ideas',
              agelabel: 'Audience Age', 
              inputAgePlaceH: 'Example: Year 7, Aged 12',
              paratext: 'Do you have an idea of your own and want to use our co-pilot without restrictions? Then let the fun begin.',
              namebtn: 'Launch',
              Notes_content: ` 
              <p>Here are some ideas to get you started:</p>
                <ul>
                  <li>Create a differentiated worksheet on plant structures for year 7.</li>
                  <li>Can you analyze the character development in Macbeth.
                    Explain the difference between a protagonist and an antagonist to a year 10.</li>
                  <li>Give me a creative list of ideas that would encourage year 9 students to revise for an upcoming assessment.</li>
                  <li>Share with me 10 possible excuses students might come up with for not handing in their homework and then how I should respond.</li>
                </ul>
              <p>When writing a request, consider the length and whether you require variations. For example, provide 3 variations.</p>
`,
              isPdf:false,
              isForEditer:true,
              chatGPTOption:{
                    name: "Free Play",
                    id: "freeplay",
                    description: "Do you have an idea of your own and want to use our co-pilot without restrictions? Then let the fun begin.",
                    option: {
                    model: "gpt-3.5-turbo",
                    temperature: 0,
                    max_tokens: 100,
                    top_p: 1,
                    frequency_penalty: 0.0,
                    presence_penalty: 0.0,
                    },
                },
            }
        ]

        const createandplaycardsitems9 = [
            { cardicon: 'bi bi-alexa fs-3 text-primary',
              tooltitle: 'Classroom',
              title : 'Simplifying',
              p1:"Primary Prompt: Below I will identify the topic or concept that I would like you to break down so that it is easy to understand.",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"",
              labletopics: 'Topic',
              inputPlaceH: 'Default: Plant Cells, Macbeth, Rounding, Romans',
              agelabel: 'Audience Age', 
              inputAgePlaceH: 'Default: Aged 11',
              paratext: 'Break down a complex topic or concept  into smaller and more manageable parts.',
              namebtn: 'Launch',
              Notes_content: `
              <p>The ‘simplify topic’ will help take the topic and break into down into small manageable chunks that are easy to understand. It will identify the key components, used simplified language and where possible use analogies. Please enter the topic below with the term "simplified language" to indicate that you require a simplified version of the topic:</p>
               `,
              isPdf:false,
              chatGPTOption:{
                    name: "Free Play",
                    id: "freeplay",
                    description: "Do you have an idea of your own and want to use our co-pilot without restrictions? Then let the fun begin.",
                    option: {
                    model: "gpt-3.5-turbo",
                    temperature: 0,
                    max_tokens: 100,
                    top_p: 1,
                    frequency_penalty: 0.0,
                    presence_penalty: 0.0,
                    },
                },
            }
        ]
        const createandplaycardsitems10 = [
            { cardicon: 'bi bi-chat-dots fs-3 text-primary',
              tooltitle: 'Classroom',
              title : 'Discussion Questions',
              p1:"Primary Prompt: Below I will identify the topic or concept that I would like you to create a numbered list of ten thought provoking questions.",
              p2:"Secondary Prompt: The age of the students is identified below:",
              p3:"",
              labletopics: 'Audience',
              inputPlaceH: 'Default: Creative Writing, Careers, Percentages, Sustainability, Healthy Eating',
              agelabel: 'Audience Age', 
              inputAgePlaceH: 'Default: Aged 11',
              paratext: 'Want a range of thought provoking discussion questions to engage your pupils, just add a topic.',
              namebtn: 'Launch',
              Notes_content: `<p>Generate ten thought provoking questions, they could be used as a starter or plenary activity, to encourage critical thinking and generate collaboration in the classroom.</p>
              `,
              isPdf:false,
              chatGPTOption:{
                    name: "Free Play",
                    id: "freeplay",
                    description: "Do you have an idea of your own and want to use our co-pilot without restrictions? Then let the fun begin.",
                    option: {
                    model: "gpt-3.5-turbo",
                    temperature: 0,
                    max_tokens: 100,
                    top_p: 1,
                    frequency_penalty: 0.0,
                    presence_penalty: 0.0,
                    },
                },
            }
        ]

          const createandplaycardsitems11 = [
            { cardicon: 'bi bi-inbox-fill fs-3 text-primary',
              tooltitle: 'Classroom',
              title : 'Fill The Blanks',
              p1:"Primary Prompt: Below I will identify the topic or concept that I would like you to create a fill the blank worksheet with 8 answers. It will use a paragraph structure with underscores for the missing answer and the answer key will be placed at the bottom. The title of the worksheet should be placed at the top in bold",
              p2:"Secondary Prompt: The age of the students is identified below:",
              p3:"",
              labletopics: 'Lesson or Topic:',
              inputPlaceH: 'Default: Plant Cells, Macbeth, Rounding, Romans',
              agelabel: 'Pupil Age:', 
              inputAgePlaceH: 'Default: Aged 11',
              paratext: 'Create a fill the blanks worksheet to help improve students memory and comprehension.',
              namebtn: 'Launch',
              Notes_content: `<p>Create a fill the blank worksheet in seconds, here are some examples:</p>
              <ul>
                <li>Components of a system</li>
                <li>Elements of the  table</li>
                <li>Days and months in </li>
              </ul>
              <p>Within the description, please indicate whether you require any variations and consider the length of the fill-in-the-blank sections.</p>`,
              isPdf:false,
              chatGPTOption:{
                    name: "Free Play",
                    id: "freeplay",
                    description: "Do you have an idea of your own and want to use our co-pilot without restrictions? Then let the fun begin.",
                    option: {
                    model: "gpt-3.5-turbo",
                    temperature: 0,
                    max_tokens: 100,
                    top_p: 1,
                    frequency_penalty: 0.0,
                    presence_penalty: 0.0,
                    },
                },
            }
        ]
          const createandplaycardsitems12 = [
            { 
              cardicon: 'bi bi-escape fs-3 text-primary',
              tooltitle: 'Classroom',
              title : 'Escape Room',
              p1:"Primary Prompt: Below I will identify the topic or concept that I would like you to create a fill the blank worksheet with 8 answers. It will use a paragraph structure with underscores for the missing answer and the answer key will be placed at the bottom. The title of the worksheet should be placed at the top in bold",
              p2:"Secondary Prompt: The age of the students is identified below:",
              p3:"",
              labletopics: 'Topic',
              inputPlaceH: 'Default: Plant Cells, Macbeth, Rounding, Romans',
              agelabel: 'Audience Age', 
              inputAgePlaceH: 'Default: Aged 11',
              paratext: 'Engage students with an exciting escape room experience, where they solve puzzles and unravel mysteries together.',
              namebtn: 'Launch',
              Notes_content: `<p>Create a fill the blank worksheet in seconds, here are some examples:</p>
              <ul>
                <li>Components of a system</li>
                <li>Elements of the  table</li>
                <li>Days and months in </li>
              </ul>
              <p>Within the description, please indicate whether you require any variations and consider the length of the fill-in-the-blank sections.</p>`,
              isPdf:false,
              chatGPTOption:{
                    name: "Free Play",
                    id: "freeplay",
                    description: "Do you have an idea of your own and want to use our co-pilot without restrictions? Then let the fun begin.",
                    option: {
                    model: "gpt-3.5-turbo",
                    temperature: 0,
                    max_tokens: 100,
                    top_p: 1,
                    frequency_penalty: 0.0,
                    presence_penalty: 0.0,
                    },
                },
            }
        ]
        const createandplaycardsitems13 = [
          { cardicon: 'bi bi-youtube fs-3 text-danger',
            tooltitle: 'Classroom',
            title : 'Youtube Video',
            p1:"Primary Prompt: Below I will identify the topic or concept that I would like you to create a fill the blank worksheet with 8 answers. It will use a paragraph structure with underscores for the missing answer and the answer key will be placed at the bottom. The title of the worksheet should be placed at the top in bold",
            p2:"Secondary Prompt: The age of the students is identified below:",
            p3:"",
            labletopics: 'Topic',
            inputPlaceH: 'Default: Plant Cells, Macbeth, Rounding, Romans',
            agelabel: 'Audience Age', 
            inputAgePlaceH: 'Default: Aged 11',
            paratext: 'Create questions from YouTube video transcripts to help promote activity listening.',
            namebtn: 'Launch',
            Notes_content: `<p>Create a fill the blank worksheet in seconds, here are some examples:</p>
            <ul>
              <li>Components of a system</li>
              <li>Elements of the  table</li>
              <li>Days and months in </li>
            </ul>
            <p>Within the description, please indicate whether you require any variations and consider the length of the fill-in-the-blank sections.</p>`,
            isPdf:false,
            chatGPTOption:{
                  name: "Free Play",
                  id: "freeplay",
                  description: "Do you have an idea of your own and want to use our co-pilot without restrictions? Then let the fun begin.",
                  option: {
                  model: "gpt-3.5-turbo",
                  temperature: 0,
                  max_tokens: 100,
                  top_p: 1,
                  frequency_penalty: 0.0,
                  presence_penalty: 0.0,
                  },
              },
          }
      ]
        const createandplaycardsitems14 = [
          { cardicon: 'bi bi-motherboard fs-3 text-primary',
            tooltitle: 'Classroom',
            title : 'Ai Detection',
            p1:"Primary Prompt: Below I will identify the topic or concept that I would like you to create a fill the blank worksheet with 8 answers. It will use a paragraph structure with underscores for the missing answer and the answer key will be placed at the bottom. The title of the worksheet should be placed at the top in bold",
            p2:"Secondary Prompt: The age of the students is identified below:",
            p3:"",
            labletopics: 'Topic',
            inputPlaceH: 'Default: Plant Cells, Macbeth, Rounding, Romans',
            agelabel: 'Audience Age', 
            inputAgePlaceH: 'Default: Aged 11',
            paratext: 'Create a series of questions to assess if students coursework or assignment is their own.',
            namebtn: 'Launch',
            Notes_content: `<p>Create a fill the blank worksheet in seconds, here are some examples:</p>
            <ul>
              <li>Components of a system</li>
              <li>Elements of the  table</li>
              <li>Days and months in </li>
            </ul>
            <p>Within the description, please indicate whether you require any variations and consider the length of the fill-in-the-blank sections.</p>`,
            isPdf:false,
            chatGPTOption:{
                  name: "Free Play",
                  id: "freeplay",
                  description: "Do you have an idea of your own and want to use our co-pilot without restrictions? Then let the fun begin.",
                  option: {
                  model: "gpt-3.5-turbo",
                  temperature: 0,
                  max_tokens: 100,
                  top_p: 1,
                  frequency_penalty: 0.0,
                  presence_penalty: 0.0,
                  },
              },
          }
      ]
        const createandplaycardsitems15 = [
          { cardicon: 'bi bi-activity fs-3 text-primary',
            tooltitle: 'Classroom',
            title : 'Rhyme Generator',
            p1:"Primary Prompt: Below I will identify the topic or concept that I would like you to create a fill the blank worksheet with 8 answers. It will use a paragraph structure with underscores for the missing answer and the answer key will be placed at the bottom. The title of the worksheet should be placed at the top in bold",
            p2:"Secondary Prompt: The age of the students is identified below:",
            p3:"",
            labletopics: 'Topic',
            inputPlaceH: 'Default: Plant Cells, Macbeth, Rounding, Romans',
            agelabel: 'Audience Age', 
            inputAgePlaceH: 'Default: Aged 11',
            paratext: 'Use the Rhyme generator to entertain, engage and inspire pupils in the class. Just add keywords.',
            namebtn: 'Launch',
            Notes_content: `<p>Create a fill the blank worksheet in seconds, here are some examples:</p>
            <ul>
              <li>Components of a system</li>
              <li>Elements of the  table</li>
              <li>Days and months in </li>
            </ul>
            <p>Within the description, please indicate whether you require any variations and consider the length of the fill-in-the-blank sections.</p>`,
            isPdf:false,
            chatGPTOption:{
                  name: "Free Play",
                  id: "freeplay",
                  description: "Do you have an idea of your own and want to use our co-pilot without restrictions? Then let the fun begin.",
                  option: {
                  model: "gpt-3.5-turbo",
                  temperature: 0,
                  max_tokens: 100,
                  top_p: 1,
                  frequency_penalty: 0.0,
                  presence_penalty: 0.0,
                  },
              },
          }
        ]

        
  return (
    <>
    {console.log('isPaid', isPaid)}
        <div className='container-fluid'>
            <div className='row my-lg-3 my-md-3'>
                <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                    <Cards planStatus={isPaid}  createandplaycard ={[...createandplaycardsitems1]}/>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                    <Cards planStatus={isPaid} createandplaycard ={[...createandplaycardsitems2]}/>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                    <Cards planStatus={isPaid} createandplaycard ={[...createandplaycardsitems3]}/>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                    <Cards planStatus={isPaid} createandplaycard ={[...createandplaycardsitems4]}/>
                </div>
            </div>
            <div className='row my-lg-3 my-md-3'>
                <div className='col-lg-3 col-md-6 col-sm-6 d-flex  align-items-stretch'>
                    <Cards planStatus={isPaid} createandplaycard ={[...createandplaycardsitems5]}/>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                    <Cards planStatus={isPaid} createandplaycard ={[...createandplaycardsitems6]}/>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                    <Cards planStatus={isPaid} createandplaycard ={[...createandplaycardsitems7]}/>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                    <Cards planStatus={isPaid} createandplaycard ={[...createandplaycardsitems8]}/>
                </div>
            </div>
            <div className='row my-lg-3 my-md-3'>
                <div className='col-lg-3 col-md-6 col-sm-6 d-flex  align-items-stretch'>
                    <Cards planStatus={isPaid} createandplaycard ={[...createandplaycardsitems9]}/>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                    <Cards planStatus={isPaid} createandplaycard ={[...createandplaycardsitems10]}/>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                    <Cards planStatus={isPaid} createandplaycard ={[...createandplaycardsitems11]}/>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                    <Cards planStatus={isPaid} createandplaycard ={[...createandplaycardsitems12]}/>
                </div> 
            </div>
            <div className='row my-lg-3 my-md-3'>
                <div className='col-lg-3 col-md-6 col-sm-6 d-flex  align-items-stretch'>
                    <Cards planStatus={isPaid} createandplaycard ={[...createandplaycardsitems13]}/>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                    <Cards planStatus={isPaid} createandplaycard ={[...createandplaycardsitems14]}/>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                    <Cards planStatus={isPaid} createandplaycard ={[...createandplaycardsitems15]}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default CreateAndPlayCards