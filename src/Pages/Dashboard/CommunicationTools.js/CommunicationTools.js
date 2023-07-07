import React, { useState } from 'react';
import './CommunicationTools.css';
import Dashbaord from '../Dashboard/Dashboard';
import FromCommToolsCard from '../../../Components/FormCommunicationToolCard/FromCommToolsCard';
import { baseURL } from '../../../config';
import { useEffect } from 'react';

function CommunicationTools() {

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
          { cardicon: "bi bi-envelope-at fs-3 text-primary",
            title : 'Parent Emails',
            p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'Topics or Lesson Content',
            inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
            agelabel: 'Describe content to include.',
            inputAgePlaceH: 'Example: Describe want you want communicated to pupils,  parents or staff.',
            toneLable: 'Tone:',
            inputTone: 'Example: formal, informative, conversational, persuasive, empathetic, humorous', 
            paratext: 'Want to keep parents up to date with students progress, or the weekly email.',
            namebtn: 'Luanch',
            Notes_content: `<div>
            <p>Automatically generate emails for students, parents, and staff that are well written, thoughtful, and personalized. Here are some examples: Welcome emails, progress updates, behavior reports, events and activities notifications, etc.</p>

            <p>Example:</p>
            <p>An email to parents to consider:</p>
            <ol>
              <li>Content and purpose of the email</li>
              <li>Background information</li>
              <li>Important Information</li>
              <li>Specify Timeline if appropriate</li>
              <li>End with a positive note</li>
            </ol>
            
            <p>Review the draft in the text editor on the right and make any necessary adjustments to ensure it reflects your intended message and tone.</p></div>`,
            isPdf: true,
            parentEmail: true,
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
            p1:" prompt: `Primary Prompt: I want you to create a written report for a classroom teacher the subject is [Subject], the students name is [Name], their strengths are [Strengths]. The area for improvement is [Improvement]. The report is being written for a student who is [Age]. This report should have a word count of [Word Count]. ",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'The Subject',
            inputPlaceH: 'Example: English, Computer Science, History',
            agelabel: 'Pupil Name',
            inputAgePlaceH: 'Example: Person A',
            areastrenghtLabel: 'Area of strength',
            inputareastrenghtPlaceH: 'Example:: skills development, content mastery, academic progress',
            areaimprlabel: 'Area of Improvement',
            inputareaimprPlaceH: 'Example:: class participation, learner attitude',
            audienceLabel: 'Audience',
            inputaudiencePlaceH: 'Example:: Year 9.',
            wordcountLabel: 'Word Count',
            inputwordcountPlaceH: 'Example: 200 words, 300 words.', 
            paratext: 'Generate subject reports that are accurate, comprehensive and well written.',
            namebtn: 'Luanch',
            Notes_content: `<div>
            <p>When writing subject reports, consider the following key areas:</p>
            <ul>
              <li>Academic Progress (e.g., notable achievement)</li>
              <li>Content Mastery (e.g., knowledge, comprehension, analysis)</li>
              <li>Skills Development (e.g., critical thinking, problem solving)</li>
              <li>Class Participation (e.g., activities, group work, discussions)</li>
              <li>Homework and Assignments (e.g., consistency, effort, meeting deadlines)</li>
              <li>Assessments and Examinations (e.g., ability to apply knowledge)</li>
              <li>Learning Attitude (e.g., motivation, willingness)</li>
              <li>Area for Improvement (e.g., provide constructive feedback)</li>
              <li>Goals and Recommendations (e.g., further improvement, enrichment opportunities)</li>
              <li>Parent/Teacher Collaboration (e.g., pupil's progress, challenges or achievements)</li>
            </ul>
            </div>`,
            isPdf:true,
            subjectReport: true,
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
            p1:" prompt: `Primary Prompt: I am a teacher can you help me to create content for an assembly I will be delivering. The topic is [TOPIC], be sure to include the following content [CONTENT]. The assembly must be suitable for pupils aged [AGE].The output should include content that can be copied directly into a powerpoint.",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'Content to Include:',
            inputPlaceH: 'Example:top tips to avoid exam stress',
            contentlabel: 'Content to Include:',
            inputcontentPlaceH: 'Example: top tips to avoid exam stress',
            agelabel: 'Pupils Age:',
            inputAgePlaceH: 'Example: Year 11 or Aged 16', 
            paratext: 'Generate content and ideas to help prepare your assembly presentation in minutes',
            namebtn: 'Luanch',
            Notes_content: `<div>
            <p>Want some ideas? Consider the following:</p>
            <ul>
              <li>Building Resilience</li>
              <li>Cyberbullying Awareness</li>
              <li>Mental Health and Well-being</li>
              <li>Career Exploration</li>
              <li>Cultural Diversity and Inclusion</li>
              <li>Environmental Awareness</li>
              <li>Healthy Lifestyle Choices</li>
              <li>Goal Setting and Motivation</li>
              <li>Peer Pressure and Making Positive Choices</li>
              <li>Anti-Bullying and Respect</li>
            </ul>
            </div>`,
            isPdf:true,
            assemblyIdeas: true,
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
            p1:" prompt: `Primary Prompt: I am a school teacher can you help to structure my [Meeting]. The [Meeting] will cover [description] and should last for approximately [Length]. Consider that the [Meeting] should be suitable for pupils aged [AGE] ",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            meetinglable: 'Meeting',
            inputmeetingPlaceH: 'Example:parents evening, parent meeting, open evening',
            descriptionLable: 'Description:',
            inputDescPlaceH: 'Example 1: Parents evening to discuss students progress in English Example 2: Parents meeting to discuss poor behaviour in lessons',
            lenghtLable: 'Length:',
            inputLenghtPlaceH: 'Example 1: 7 minutes Example 2: 30 minutes',
            agelabel: 'Age',
            inputAgePlaceH: 'Example 1: Aged 12, Aged 16', 
            paratext: 'Use this too to help you structure your parents evening or parental meeting',
            namebtn: 'Luanch',
            Notes_content: `<div>
            <p>Take the time to add whether it is a parents evening or a parent meeting. Within the description area, add key content you want to discuss during the meeting. For example:</p>
            <ul>
              <li>Academic progress</li>
              <li>Learning goals</li>
              <li>Individual student needs</li>
              <li>Behaviour and Discipline</li>
              <li>Attendance and punctuality</li>
              <li>Support services</li>
            </ul>

            <p>Review the draft in the text editor on the right and make any necessary adjustments to ensure it reflects your intended message and tone.</p>
            </div>`,
            isPdf:true,
            parentsEvening: true,
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
            p1:" prompt: `Primary Prompt: I want you to create a friendly school newsletter. It should be targeted at [Audience] and will need to include [Description]. It should be written in a [Tone] tone. The newsletter will be output with a word count of [Count]. ",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            targetLable: 'Target Audience:',
            inputtargetPlaceH: 'Example: pupils, staff or parents',
            descLable: 'Description (Content to Include):',
            inputdescPlaceH: 'Example: upcoming sports day, spelling bee competition, parents evening',
            toneLable: 'Tone',
            inputTonePlaceH: 'Example: formal, informative, conversational, persuasive, empathetic, humorous',
            wordlabel: 'Word Count:',
            inputwordPlaceH: 'Example: 350 words, 450 words, 600 words', 
            paratext: 'Want help to write that school newsletter or article then click here',
            namebtn: 'Luanch',
            Notes_content: `<div>
            <p>When writing the school newsletter, think about the following content:</p>
            <ul>
              <li>Upcoming events or important dates (add dates)</li>
              <li>Recent achievements by pupils, staff, or parents</li>
              <li>Any special programs or initiatives to inform parents about</li>
              <li>Any changes to school policies or procedures</li>
              <li>Noteworthy collaborations, partnerships, or community engagements</li>
              <li>Student or teacher spotlights showcasing talents or contributions</li>
              <li>Important reminders or announcements</li>
              <li>Upcoming parent-teacher meetings, workshops</li>
              <li>Articles or resources for parenting or child development</li>
            </ul>

            <p>Review the draft in the text editor on the right and make any necessary adjustments to ensure it reflects your intended message and tone.</p>
            </div>`,
            isPdf:true,
            schoolNewsLetter: true,
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
            p1:" prompt: `Primary Prompt: I am a school leader and want you to prepare a permission slip for [Audience]. The permission slip will need to include [Description]",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'Target Audience:',
            inputPlaceH: 'Example: pupils, staff or parents',
            agelabel: 'Description (Content to Include):',
            inputAgePlaceH: 'Example: Permission from parents to use their photos in newsletter', 
            paratext: 'Want to prepare a permission slip ready to be copied and printed',
            namebtn: 'Luanch',
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
            targetLable: 'Target Audience:',
            inputtargetPlaceH: 'Example: pupils, staff or parents',
            descLable: 'Description (Content to Include):',
            inputdescPlaceH: 'Example: Positive attitude to learning, running an extracurricular activity, volunteering ',
            toneLable: 'Tone:',
            inputTonePlaceH: 'Example: formal, informative, conversational, persuasive, empathetic, humorous',
            wordlabel: 'Word Count',
            inputwordPlaceH: 'Example 50 words, 100 words, 150 words', 
            paratext: 'Want to generate a positive message to share with pupils, parents or colleagues.',
            namebtn: 'Luanch',
            Notes_content: `<div>
            <p>Would you like some ideas of potential positive messages? Look at these examples:</p>

            <ul>
              <li>Encouragement for hard work</li>
              <li>Recognition of improvement</li>
              <li>Appreciation for positive attitude</li>
              <li>Support during difficult times</li>
              <li>Attendance and punctuality</li>
              <li>Support services</li>
              <li>Recognition of Innovative Teaching</li>
              <li>Gratitude for mentorship</li>
              <li>Recognition of Leadership</li>
              <li>Sharing inspirational resources</li>
            </ul>
            
            <p>Review the draft in the text editor on the right and make any necessary adjustments to ensure it reflects your intended message and tone.</p>
            </div>`,
            isPdf:true,
            schoolNewsLetter: true,
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
            p1:" prompt: `Primary Prompt: I am a school teacher and I want you to create a social media post on the schools social media channels. The post will be shared with [Audience] and will include [Description]. It should be written in a [Tone] tone. Can you create an output for [SocialMedia] with a word count of [Count].  ",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            targetlable: 'Target Audience:',
            inputtargetPlaceH: 'Example: pupils, staff, parents, school community',
            desclable: 'Description (Content to Include):',
            inputdescPlaceH: 'Example: upcoming sports day, spelling bee competition, parents evening',
            tonelable: 'Tone:',
            inputTonePlaceH: 'Example: formal, informative, conversational, persuasive, empathetic, humorous',
            socialLable: 'Social Media Platform',
            inputSocialPlaceH: 'Example: Twitter, Facebook, Instagram', 
            wordlabel: 'Word Count',
            inputwordPlaceH: 'Example 50 words, 100 words, 150 words',
            paratext: 'Generate a social media post that is accurate, comprehensive and well written.',
            namebtn: 'Luanch',
            Notes_content: `<div>
            <p>When writing the social media post, be sure to add a clear description and consider the tone of the message. Want some examples of content you could discuss? Consider:</p>

            <ul>
              <li>Sharing an announcement</li>
              <li>Promoting an event</li>
              <li>Providing educational content</li>
              <li>Community Outreach e.g. charity</li>
              <li>School news and updates</li>
            </ul>

            <p>Note: Want to share your post across multiple platforms? Then type them all in the 'social media platform' section.</p>

            <p>Review the draft in the text editor on the right and make any necessary adjustments to ensure it reflects your intended message and tone.</p>
            In this HTML version, the text is wrapped in appropriate HTML tags. The examples of content you could discuss are listed using an unordered list <ul> with each item represented by <li> tags. The text outside the list is enclosed in <p> tags for paragraphs.
            </div>`,
            isPdf:true,
            socialMediaPost: true,
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
                            <FromCommToolsCard planStatus={isPaid} formcommtoolCard ={[...formtutorcarditems1]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FromCommToolsCard planStatus={isPaid} formcommtoolCard ={[...formtutorcarditems2]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FromCommToolsCard planStatus={isPaid} formcommtoolCard ={[...formtutorcarditems3]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FromCommToolsCard planStatus={isPaid} formcommtoolCard ={[...formtutorcarditems4]}/>
                        </div>
                    </div>
                    <div className='row my-lg-3 my-md-3'>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex  align-items-stretch'>
                            <FromCommToolsCard planStatus={isPaid} formcommtoolCard ={[...formtutorcarditems5]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FromCommToolsCard planStatus={isPaid} formcommtoolCard ={[...formtutorcarditems6]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FromCommToolsCard planStatus={isPaid} formcommtoolCard ={[...formtutorcarditems7]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <FromCommToolsCard planStatus={isPaid} formcommtoolCard ={[...formtutorcarditems8]}/>
                        </div>
                    </div>
                </div>
            </div>
        </Dashbaord>
    </>
  )
}

export default CommunicationTools