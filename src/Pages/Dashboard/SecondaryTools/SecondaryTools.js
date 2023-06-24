import React from 'react'
import Dashbaord from '../Dashboard/Dashboard'
import CCard from '../../../Components/SecondaryToolsCard/CCard'
import ASPCard from '../../../Components/SecondaryToolsCard/ASPCard'
import LPCard from '../../../Components/SecondaryToolsCard/LPCard'

function SecondaryTools() {

        // Data of Secondary Creater
        const formSecondcreativecarditems1 = [
          { cardicon: "bi bi-layout-text-sidebar fs-3 text-primary",
            title : 'Summarise Text',
            p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'Topics or Lesson Content',
            inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
            agelabel: 'Audience Age',
            inputAgePlaceH: 'Example: Year 7, Aged 12', 
            paratext: 'Want to summarise text by extracting the main ideas , key points for quick understanding and decision-making.',
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

        const formSecondcreativecarditems2 = [
            { cardicon: "bi bi-file-text fs-3 text-primary",
              title : 'Poem Generator',
              p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"",
              labletopics: 'Topics or Lesson Content',
              inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
              agelabel: 'Audience Age',
              inputAgePlaceH: 'Example: Year 7, Aged 12', 
              paratext: 'Use the poem generator to engage and inspire students in the class. Just add keywords.',
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

            const formSecondcreativecarditems3 = [
            { cardicon: "bi bi-puzzle fs-3 text-primary",
              title : 'Cryptic Puzzle',
              p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"",
              labletopics: 'Topics or Lesson Content',
              inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
              agelabel: 'Audience Age',
              inputAgePlaceH: 'Example: Year 7, Aged 12', 
              paratext: 'Want to generate a cryptic puzzle to challenge students in the form a riddle',
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

            const formSecondcreativecarditems4 = [
            { cardicon: "bi bi-file-spreadsheet-fill fs-3 text-primary",
              title : 'Worksheet Generator',
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

        const formSecondcreativecarditems5 = [
          { cardicon: "bi bi-body-text fs-3 text-primary",
            title : 'Model Essay',
            p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'Topics or Lesson Content',
            inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
            agelabel: 'Audience Age',
            inputAgePlaceH: 'Example: Year 7, Aged 12', 
            paratext: 'Prepare a model essay on a topic of your choice and for the appropriate age.',
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

        const formSecondcreativecarditems6 = [
            { cardicon: "bi bi-file-break fs-3 text-primary",
              title : 'Icebreaker Generator',
              p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"",
              labletopics: 'Topics or Lesson Content',
              inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
              agelabel: 'Audience Age',
              inputAgePlaceH: 'Example: Year 7, Aged 12', 
              paratext: 'Generate a list of icebreakers to help create a relaxed atmosphere.',
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

            const formSecondcreativecarditems7 = [
            { cardicon: "bi bi-chat-text-fill fs-3 text-primary",
              title : 'Brain Break Ideas',
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

            const formSecondcreativecarditems8 = [
            { cardicon: "bi bi-emoji-laughing fs-3 text-primary",
              title : 'Joke Generator',
              p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"",
              labletopics: 'Topics or Lesson Content',
              inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
              agelabel: 'Audience Age',
              inputAgePlaceH: 'Example: Year 7, Aged 12', 
              paratext: 'Instant laughter at the touch of a button. Generating student friendly humor bringing smiles and joy.',
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

        // Section Assessment/Starters/Plenaries

        const formASPcarditems1 = [
          { cardicon: "bi bi-text-paragraph fs-3 text-primary",
            title : 'Sentence Starter',
            p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'Topics or Lesson Content',
            inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
            agelabel: 'Audience Age',
            inputAgePlaceH: 'Example: Year 7, Aged 12', 
            paratext: 'Want to create a prompt or phrase to initiate the beginning of a written or spoken sentence.',
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

        const formASPcarditems2 = [
            { cardicon: "bi bi-text-indent-left fs-3 text-primary",
              title : 'Fill the Blank',
              p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"",
              labletopics: 'Topics or Lesson Content',
              inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
              agelabel: 'Audience Age',
              inputAgePlaceH: 'Example: Year 7, Aged 12', 
              paratext: 'Get pupils to complete missing words by inserting the appropriate words or phrases.',
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

            const formASPcarditems3 = [
            { cardicon: "bi bi-ui-checks-grid fs-3 text-primary",
              title : 'True or False',
              p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"",
              labletopics: 'Topics or Lesson Content',
              inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
              agelabel: 'Audience Age',
              inputAgePlaceH: 'Example: Year 7, Aged 12', 
              paratext: 'A true of false activity to assess students learning through written statements',
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

            const formASPcarditems4 = [
            { cardicon: "bi bi-slash-circle-fill fs-3 text-primary",
              title : 'Mr Wrong',
              p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"",
              labletopics: 'Topics or Lesson Content',
              inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
              agelabel: 'Audience Age',
              inputAgePlaceH: 'Example: Year 7, Aged 12', 
              paratext: 'Generate incorrect statements and students have to explain or discuss the appropriate answer.',
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

        const formASPcarditems5 = [
          { cardicon: "bi bi-controller fs-3 text-primary",
            title : 'Pictionary Ideas',
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

        const formASPcarditems6 = [
            { cardicon: "bi bi-activity fs-3 text-primary",
              title : 'Assessment Ideas',
              p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"",
              labletopics: 'Topics or Lesson Content',
              inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
              agelabel: 'Audience Age',
              inputAgePlaceH: 'Example: Year 7, Aged 12', 
              paratext: 'Generate a list of assessment ideas to help measure pupils progress.',
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

            const formASPcarditems7 = [
            { cardicon: "bi bi-alarm fs-3 text-primary",
              title : 'Retrieval Quiz',
              p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"",
              labletopics: 'Topics or Lesson Content',
              inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
              agelabel: 'Audience Age',
              inputAgePlaceH: 'Example: Year 7, Aged 12', 
              paratext: 'Create an assessment to measure pupils ability to recall information from memory',
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

            const formASPcarditems8 = [
            { cardicon: "bi bi-radioactive fs-3 text-primary",
              title : 'Got an Idea',
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
        // Lesson Planning Data

        const formLessonPcarditems1 = [
          { cardicon: "bi bi-calendar2-check fs-3 text-primary",
            title : 'Lesson Planning',
            p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'Topics or Lesson Content',
            inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
            agelabel: 'Audience Age',
            inputAgePlaceH: 'Example: Year 7, Aged 12', 
            paratext: 'Save yourself time by creating a lesson plan for a topic of your choice.  Consider the topic, learning objectives and pupils ability.',
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

        const formLessonPcarditems2 = [
            { cardicon: "bi bi-textarea fs-3 text-primary",
              title : 'Topic Planner',
              p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"",
              labletopics: 'Topics or Lesson Content',
              inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
              agelabel: 'Audience Age',
              inputAgePlaceH: 'Example: Year 7, Aged 12', 
              paratext: 'Empowering Educators with Topic Ideas for Engaging and Relevant Classroom Lessons',
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

            const formLessonPcarditems3 = [
            { cardicon: "bi bi-activity fs-3 text-primary",
              title : 'Lesson Ideas',
              p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"",
              labletopics: 'Topics or Lesson Content',
              inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
              agelabel: 'Audience Age',
              inputAgePlaceH: 'Example: Year 7, Aged 12', 
              paratext: 'Generate ideas to make a boring lesson engaging and captivating for students active participation',
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

            const formLessonPcarditems4 = [
            { cardicon: "bi bi-file-earmark-easel fs-3 text-primary",
              title : 'Slide Generator',
              p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"",
              labletopics: 'Topics or Lesson Content',
              inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
              agelabel: 'Audience Age',
              inputAgePlaceH: 'Example: Year 7, Aged 12', 
              paratext: 'The slide generator will create a series of engaging slides for a dynamic presentation on any chosen topic or lesson',
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

        const formLessonPcarditems5 = [
          { cardicon: "bi bi-file-diff fs-3 text-primary",
            title : 'Differentiation',
            p1:" prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'Topics or Lesson Content',
            inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
            agelabel: 'Audience Age',
            inputAgePlaceH: 'Example: Year 7, Aged 12', 
            paratext: 'Want to differentiate a resource? Copy your text across and have it differentiated to suit your varied learners needs. ',
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
                    <h4 className=" text-white fw-bold py-2 px-3" style={{backgroundColor: '#036CFF'}}>Secondary Tools</h4>
                </div>
                {/* Section_Math */}
                <div className="Section-math">
                  <div className="container-fluid">
                    <div className='row my-lg-3 my-md-3'>
                        <h5 className='fw-bold px-3 py-3' style={{color: '#036CFF'}}>Secondary Tools/Creative</h5>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <CCard formsecondcreatercard ={[...formSecondcreativecarditems1]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <CCard formsecondcreatercard ={[...formSecondcreativecarditems2]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <CCard formsecondcreatercard ={[...formSecondcreativecarditems3]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <CCard formsecondcreatercard ={[...formSecondcreativecarditems4]}/>
                        </div>
                    </div>

                    <div className='row my-lg-3 my-md-3'>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <CCard formsecondcreatercard ={[...formSecondcreativecarditems5]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <CCard formsecondcreatercard ={[...formSecondcreativecarditems6]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <CCard formsecondcreatercard ={[...formSecondcreativecarditems7]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <CCard formsecondcreatercard ={[...formSecondcreativecarditems8]}/>
                        </div>
                    </div>

                    {/* Section Assessment/Starters/Plenaries */}

                    <div className='row my-lg-3 my-md-3'>
                        <h5 className='fw-bold px-3 py-3' style={{color: '#036CFF'}}>Secondary/Assessment/Starters/Plenaries</h5>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <ASPCard formASPcard ={[...formASPcarditems1]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <ASPCard formASPcard ={[...formASPcarditems2]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <ASPCard formASPcard ={[...formASPcarditems3]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <ASPCard formASPcard ={[...formASPcarditems4]}/>
                        </div>
                    </div>

                    <div className='row my-lg-3 my-md-3'>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <ASPCard formASPcard ={[...formASPcarditems5]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <ASPCard formASPcard ={[...formASPcarditems6]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <ASPCard formASPcard ={[...formASPcarditems7]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <ASPCard formASPcard ={[...formASPcarditems8]}/>
                        </div>
                    </div>
                  </div>
                </div>

                {/* Section Lesson Planning */}

                <div className='row my-lg-3 my-md-3'>
                        <h5 className='fw-bold px-3 py-3' style={{color: '#036CFF'}}>Secondary / Lesson Planning</h5>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <LPCard formLPcard ={[...formLessonPcarditems1]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <LPCard formLPcard ={[...formLessonPcarditems2]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <LPCard formLPcard ={[...formLessonPcarditems3]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <LPCard formLPcard ={[...formLessonPcarditems4]}/>
                        </div>
                    </div>

                    <div className='row my-lg-3 my-md-3'>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <LPCard formLPcard ={[...formLessonPcarditems5]}/>
                        </div>
                    </div>
                


            </div>
        </Dashbaord>
    </>
  )
}

export default SecondaryTools