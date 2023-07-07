import React from 'react'
import Dashbaord from '../Dashboard/Dashboard'
import MCard from '../../../Components/PrimarytoolsCard/MCard'
import LCard from '../../../Components/PrimarytoolsCard/LCard'
import CCards from '../../../Components/PrimarytoolsCard/CCards'
import { useState } from 'react'
import { useEffect } from 'react'
import { baseURL } from '../../../config'

function PrimaryTools() {

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


          //  Data of From Math
        const formmathcarditems1 = [
          { cardicon: "bi bi-clock fs-3 text-primary",
            title : 'Times Tables',
            p1:" prompt: `Primary Prompt: I am a primary school teacher can you a series of mixed questions based on the timetables ranging from one to twelve. Can you include [Number] questions using numbers only and then the answers. Output the results into a table and include question number, question and then the answer. It must be suitable for pupils [Age]. ",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'How Many Question:',
            inputPlaceH: 'Example: 5, 10, 15, 20',
            agelabel: 'Pupils Age:',
            inputAgePlaceH: 'Example: Year 3, aged 7.', 
            paratext: 'Want to create a series of random times tables question? Just click to start.',
            namebtn: 'Launch',
            Notes_content: `<div>
            <p>This tool generates a series of mixed multiplication questions based on the timetables from one to twelve, </p>
          
            <p>Use it to reinforce multiplication skills and provide practice opportunities. Top tip: Encourage students to solve the questions mentally for quicker mental math development.</p>
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
            p1:" prompt: `Primary Prompt: I am a primary school teacher can you a series of mixed questions based on [Topic]. Can you include [Number] questions using numbers only and then the answers. Output the results into a table and include question number, question and then the answer. It must be suitable for pupils [Age]. ",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'Lesson or Topic:',
            inputPlaceH: 'Example: Adding, Subtracting, Factors, Shapes, Rounding',
            agelabel: 'Pupils Age:',
            inputAgePlaceH: 'Example: Year 4, aged 8', 
            input3title: 'How Many Question:',
            input3PlaceH: 'Example: 5, 10, 15, 20',
            paratext: 'Maths starters questions to engage minds, focus attention and problem solve',
            namebtn: 'Launch',
            Notes_content: `<div>
            
            <p>Active Participation: By answering a series of questions, students actively participate in the learning process, promoting engagement and involvement. It encourages them to think critically, apply their knowledge, and solve problems independently.
            </p>
            </div>`,
            isPdf:true,
            threeInput:true,
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
            p1:" prompt: `Primary Prompt: I am a master primary school teacher and want to share some effective strategies with other primary school teachers about different ways you can teach [Topic]. The teachers are working with pupils aged [Age], and I want you to output methods to support them. ",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'Lesson or Topic:',
            inputPlaceH: 'Example: Addition, Factors, Multiples, Primes',
            agelabel: 'Pupils Age:',
            inputAgePlaceH: 'Example: Year 5, aged 10', 
            paratext: 'Generate diverse teaching strategies to engage students in math and enhance their learning experience.',
            namebtn: 'Launch',
            Notes_content: `<div>
            
            <p>
              Enhance pupils math learning experience with a range of effective teaching strategies. Use manipulatives, real-life examples, and interactive activities to make learning about shapes exciting and hands-on. Encourage pupil collaboration and provide opportunities for exploration and discovery.
            </p>
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
            p1:" prompt: `Primary Prompt:",
            p2:"Secondary Prompt:",
            p3:"",
            labletopics: 'Default Text',
            inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
            agelabel: 'Audience Age',
            inputAgePlaceH: 'Example: Year 7, Aged 12', 
            paratext: 'Do you have an idea of your own and want to use our co-pilot without restrictions? Then let the fun begin.',
            namebtn: 'Launch',
            Notes_content: `<div>
            
            <h6>Lesson Plan Inspiration</h6>
            <p>Teachers can provide a topic or concept, and Teaching Copilot generates ideas and suggestions for engaging lesson plans in mathematics.</p>
            <h6>Differentiation Strategies</h6>
            <p>Teachers input their students' varied needs and abilities, and Teaching Copilot provides strategies and resources to effectively differentiate math instruction.</p>
            <h6>Assessment Ideas</h6>
            <p>Teachers ask for assessment techniques or methods to evaluate students' understanding, and Teaching Copilot suggests a range of formative and summative assessment approaches.</p>
            <h6>Technology Integration</h6>
            <p>Teachers seek suggestions on how to incorporate technology tools or apps into math lessons, and Teaching Copilot provides specific recommendations and implementation tips.</p>
            <h6>Problem-Solving Activities</h6>
            <p>Teachers request problem-solving tasks or scenarios to challenge their students, and Teaching Copilot generates creative and engaging math problems.</p>
            <h6>Math Manipulative Suggestions</h6>
            <p>Teachers inquire about manipulatives or hands-on materials to enhance math learning, and Teaching Copilot recommends suitable resources and activities.</p>
            <h6>Cross-Curricular Connections</h6>
            <p>Teachers ask for ideas to integrate math with other subjects, and Teaching Copilot suggests interdisciplinary projects or activities that promote math skills in a broader context.</p>
            <h6>Enrichment Opportunities</h6>
            <p>Teachers seek suggestions for extension activities or enrichment programs in mathematics, and Teaching Copilot provides ideas to challenge and engage high-achieving students.</p>
            </div>`,
            isPdf:true,
            isForEditer:true,
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
              p1:" prompt: `Primary Prompt: I am a primary school teacher can you a number of spelling  questions based on [Topic]. Can you include [Number] questions and then the answers, double check the answer is correct. Output the results into a table and include question number, question and then a way in which to remember it in the form of a memory aide. It must be suitable for pupils [Age]. ",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"",
              labletopics: 'Topics or Lesson Content',
              inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
              input3title: 'How Many Question:',
              input3PlaceH: 'Example: 5, 10, 15, 20',
              agelabel: 'Pupils Age:',
              inputAgePlaceH: 'Example: Year 4, aged 8', 
              paratext: 'Generate random spelling questions instantly. Click to start and test your pupils spelling skills with varied exercises.',
              namebtn: 'Launch',
              Notes_content: `<div>
              <p>This tool generates a set of spelling questions that focus on different spelling patterns and rules.</p>
    
              <p>Use it to reinforce spelling skills and provide practice opportunities. Top tip: Encourage students to use mnemonic techniques or spelling rules to remember tricky words.</p>
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

          const formliteracycarditems2 = [
              { cardicon: "bi bi-sign-turn-slight-left fs-3 text-primary",
                title : 'Concept Navigator',
                p1:" prompt: `Primary Prompt: I am a primary school teacher can you explain the following concept [Concept]. Provide a number of examples of [Concept] and then an activity. It must be suitable for pupils age [Age]. Output the definition, examples, a starter, main activity and plenary.  ",
                p2:"Secondary Prompt: The age of the students is identified below: ",
                p3:"",
                labletopics: 'Concept or Topic:',
                inputPlaceH: 'Example: Homophones, Prefixes and Suffixes, Punctuation, Poems',
                agelabel: 'Pupils Age:',
                inputAgePlaceH: 'Example: Year 4, aged 8', 
                paratext: 'Want helping explaining concepts, use this tool to prepare a definition, examples and activity.',
                namebtn: 'Launch',
                Notes_content: `<div>
                <p>
                  A concept explainer is essential to facilitate students' understanding of complex ideas by breaking them down into clear and accessible explanations. It provides visual aids, interactive examples, and engaging activities, promoting active learning and supporting diverse learning styles for optimal concept comprehension.
                </p>
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
                p1:" prompt: `Primary Prompt: I am a master primary school teacher and want to share some effective strategies with other primary school teachers about different ways you can teach [Topic]. The teachers are working with pupils aged [Age], and I want you to output methods to support them. ",
                p2:"Secondary Prompt: The age of the students is identified below: ",
                p3:"",
                labletopics: 'Lesson or Topic:',
                inputPlaceH: 'Example: Comprehension, Stories, Punctuation',
                agelabel: 'Pupils Age:',
                inputAgePlaceH: 'Example: Year 5, aged 10', 
                paratext: 'Generate diverse teaching strategies to engage students in math and enhance their learning experience.',
                namebtn: 'Launch',
                Notes_content: `<div>
                <p>
                  Enhance pupils' English literacy learning experience with a variety of effective teaching strategies. Incorporate engaging texts, real-life contexts, and interactive activities to make learning about language and literature exciting and hands-on. Foster collaboration among pupils and create opportunities for exploration, critical thinking, and creative expression.
                </p>
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
                p1:" prompt: `Primary Prompt: ",
                p2:"Secondary Prompt:  ",
                p3:"",
                labletopics: '',
                inputPlaceH: '',
                agelabel: 'Audience Age',
                inputAgePlaceH: 'Example: Year 7, Aged 12', 
                paratext: 'Do you have an idea of your own and want to use our co-pilot without restrictions? Then let the fun begin.',
                namebtn: 'Launch',
                Notes_content: `<div>
                <h6>Grammar Rule Explanations</h6>
                <p>Teachers can provide a specific grammar rule or concept, and Teaching Copilot offers clear and concise explanations to help students understand and apply it effectively.</p>
                <h6>Sentence Structure Practice</h6>
                <p>Teachers can input a sentence or paragraph, and Teaching Copilot provides feedback on sentence structure, identifying errors and suggesting improvements.</p>
                <h6>Vocabulary Expansion</h6>
                <p>Teachers prompt Teaching Copilot with a specific word or topic, and it generates related words, synonyms, antonyms, and example sentences to enrich students' vocabulary.</p>
                <h6>Proofreading Assistance</h6>
                <p>Teachers ask Teaching Copilot to review a piece of student writing, and it highlights spelling, punctuation, and grammar mistakes, helping students improve their editing skills.</p>
                <h6>Creative Writing Prompts</h6>
                <p>Teachers provide a writing prompt, and Teaching Copilot generates imaginative story starters or ideas to inspire students' creative writing in the context of SPAG.</p>
                <h6>Parts of Speech Identification</h6>
                <p>Teachers can input a sentence, and Teaching Copilot identifies and labels the different parts of speech (nouns, verbs, adjectives, etc.), aiding students' understanding of sentence structure.</p>
                <h6>Sentence Completion Exercises</h6>
                <p>Teachers give Teaching Copilot a partial sentence, and it generates possible completions, encouraging students to practice constructing grammatically correct and coherent sentences.</p>
                <h6>Grammar Quizzes</h6>
                <p>Teachers request Teaching Copilot to create multiple-choice or fill-in-the-blank grammar quizzes, providing students with interactive practice and assessment opportunities to reinforce their SPAG skills.</p>
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

          // Data of form Creative card

          const formcreativecarditems1 = [
            { cardicon: "bi bi-journal-text fs-3 text-primary",
              title : 'Text Simplifier',
              p1:" prompt: `Primary Prompt: Can you summarise the below text by extracting the main ideas and key points. You will need to consider the audience age which is [age ] and then summarise the text into [WORDS} ]words. ",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"",
              agelabel: 'Pupils Age:',
              inputAgePlaceH: 'Example: Aged 8',
              labletopics: 'Word Count:',
              inputPlaceH: 'Example 200, 450.',
              input3title: 'Copy Text to Summarise:',
              input3PlaceH: 'Copy Text Here',
              paratext: 'Want to simplify text by extracting the main ideas , key points for quick understanding and decision-making.',
              namebtn: 'Launch',
              Notes_content: `<div>
              <p>This tool will simplify the text that you add to the simplify section, you will just need to share the pupil's age and the word count.</p>
              <p>How many words can you copy and paste:</p>
              <ol>
                <li>The maximum word count will be 1500.</li>
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

          const formcreativecarditems2 = [
              { cardicon: "bi bi-file-text fs-3 text-primary",
                title : 'Poem Creator',
                p1:" prompt: `Primary Prompt: I am a primary school teacher can you create a poem for the topic [LESSON], try to include the following words [ WORDS] it must be suitable for pupils [AGE]. ",
                p2:"Secondary Prompt: The age of the students is identified below: ",
                p3:"",
                labletopics: 'Lesson or Topic:',
                inputPlaceH: 'Example: Plants & their Life Cycles',
                input3title: 'Words to include (separate with commas):',
                input3PlaceH: 'Example: plants, growth, light ',
                agelabel: 'Audience Age',
                inputAgePlaceH: 'Example: Year 7, Aged 12', 
                paratext: 'Use the poem creator to engage and inspire students in the class. Just add keywords.',
                namebtn: 'Launch',
                Notes_content: `<div>
                <p>The poem generator will take your topic, keywords, and pupils' age, and then output a poem considering the style, tone, and word choice.</p>

                <p>Consider:</p>

                <ol>
                  <li>Think of the keywords that pupils will need to recall.</li>
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
              }]

              const formcreativecarditems3 = [
              { cardicon: "bi bi-puzzle-fill fs-3 text-primary",
                title : 'Secret Puzzle',
                p1:" prompt: `Primary Prompt: I am a primary school teacher can you create a secret puzzle for [TOPIC] it must be suitable for pupils age [AGE]. Then reveal the answers at the bottom. ",
                p2:"Secondary Prompt: The age of the students is identified below: ",
                p3:"",
                labletopics: 'Lesson or Topic:',
                inputPlaceH: 'Example: Habitats, Shapes & Geometry, Map Skills',
                agelabel: 'Pupil Age:',
                inputAgePlaceH: 'Example: Aged 10', 
                paratext: 'Want to generate a secret puzzle to challenge pupils in the form a riddle',
                namebtn: 'Launch',
                Notes_content: `<div>
                
                <p>
                  A sepuzzle is a type of puzzle that requires the pupils to decipher clues or hints in order to find hidden words or phrases. It often involves wordplay, riddles, and cleverly constructed clues that may be intentionally misleading or ambiguous.
                </p>
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
                p1:" prompt: `Primary Prompt: I am a  primary school teacher can you create a worksheet and include various task and activity based on the topic [TOPICt].  it must be suitable for pupils aged [AGE]. Then reveal the answers at the bottom ",
                p2:"Secondary Prompt: The age of the students is identified below: ",
                p3:"",
                labletopics: 'Topic or Learning Objective',
                inputPlaceH: 'Example: Ancient civilizations, Cooking and nutrition, Poetry',
                agelabel: 'Pupils Age:',
                inputAgePlaceH: 'Example: Year 4, Year 5', 
                paratext: 'Create  a worksheet to complete various tasks or activities on  a topic of your choice.',
                namebtn: 'Launch',
                Notes_content: `<div>
                
                <p>Take the time to create a worksheet to engage and educate your pupils. Take the time to consider the topic and consider the learning objective that could be included.
                </p>
                <p>Want to differentiate adjust the pupils age text box.</p>
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
              p1:" prompt: `Primary Prompt: I am a primary school teacher can you create write a model exemplar let me describe it, [description]. The written exemplar must be suitable for pupils aged [age]. ",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"",
              labletopics: 'Describe the essay requirements:',
              inputPlaceH: 'Example: My family, My favourite animal, My favourite book, The importance of recycling',
              agelabel: 'Pupils Age:',
              inputAgePlaceH: 'Example: Age 7, Aged 9', 
              paratext: 'Prepare a writing exemplar on a topic of your choice and for the appropriate age',
              namebtn: 'Launch',
              Notes_content: `<div>
              <p>When creating the exemplar, consider the following:</p>

              <ul>
                <li>The introduction</li>
                <li>Outline the essay</li>
                <li>Content within the body paragraphs</li>
                <li>Address counter arguments</li>
                <li>Conclusion</li>
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

          const formcreativecarditems6 = [
              { 
                cardicon: "bi bi-escape fs-3 text-primary",
                title : 'Escape Room',
                p1:" prompt: `Primary Prompt: I am games master and I am also a primary school teacher create an escape room for the following topic [Topic] for pupils aged [Age].  The objective is for pupils to escape from the following room, [Room], so clues should relate to this. Output the result in the form of a table with question number, question, answer and next clue. ",
                p2:"Secondary Prompt: The age of the students is identified below: ",
                p3:"",
                labletopics: 'Subject or Topic:',
                inputPlaceH: 'Example: English, Maths, Art, Homophones, Punctuation',
                agelabel: 'Pupils Age:',
                inputAgePlaceH: 'Example: Aged 10 or Year 6', 
                input3title: 'Escape Room',
                input3PlaceH: 'Example: Classroom, School, Gymnasium, Library',
                paratext: 'Engage students with an exciting escape room experience, where they solve puzzles and unravel mysteries together.',
                namebtn: 'Launch',
                Notes_content: `<div>
                
                <p><p>Final Puzzle: Include a challenging final puzzle that requires the players to use all the clues and information they have gathered throughout the escape room. This puzzle should be the ultimate test of their problem-solving skills.</p>

                <p>Hidden Key or Code: Create a hidden key or code that the players must find to unlock the final door or exit. This could be hidden behind a painting, inside a locked box, or within a cleverly designed prop.</p>
                
                <p>Time Pressure: Introduce a time element where the players must complete the final task within a specific time limit. This adds excitement and urgency to the climax of the escape room.</p>
                
                <p>Interactive Element: Incorporate a physical or interactive element that the players must interact with to trigger the completion of the escape room. For example, they may need to insert a key into a specific slot or press a button to reveal the final clue.</p>
                
                <p>Surprise Twist: Consider adding a surprise twist or unexpected element to the conclusion of the escape room. This could be a hidden compartment, a secret passage, or an additional puzzle that leads to a bonus ending or reward.</p>
                
                <p>Team Collaboration: Emphasize the importance of teamwork in the final stage. Require all participants to work together and contribute their skills and knowledge to complete the escape room successfully.</p>
                
                <p>Review the draft in the text editor on the right and make any necessary adjustments to ensure it reflects your intended message and tone.</p>
                In the HTML code, the text is enclosed within <p> tags to represent paragraphs. Each paragraph represents a different point or suggestion.
                </p>
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
              }]

              const formcreativecarditems7 = [
              { cardicon: "bi bi-bullseye fs-3 text-primary",
                title : 'Focus Restorer',
                p1:" prompt: `Primary Prompt: I am a primary school teacher can you create a list of brain break ideas that are suitable for the age range [Age]. ",
                p2:"Secondary Prompt: The age of the students is identified below: ",
                p3:"",
                labletopics: 'Topics or Lesson Content',
                inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
                agelabel: 'Audience Age',
                inputAgePlaceH: 'Example: Year 7, Aged 12', 
                paratext: 'Quick mindfulness activities or games to refresh and refocus during learning or work.',
                namebtn: 'Launch',
                Notes_content: `<div>  
                <p>Focus restorers are short mental or physical activities that provide students with a break from their regular academic tasks. These activities are designed to help students relax, recharge, refocus, and re-energize. Brain breaks can enhance cognitive function, reduce stress, and promote overall well-being.</p>
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

              const formcreativecarditems8 = [
              { cardicon: "bi bi-emoji-laughing fs-3 text-primary",
                title : 'Joke Creator',
                p1:" prompt: `Primary Prompt: Write some child friendly jokes based on the following topic [TOPIC] and consider their age:[AGE]. ",
                p2:"Secondary Prompt: The age of the students is identified below:",
                p3:"",
                labletopics: 'Your Subject:',
                inputPlaceH: 'Example: Science, Maths, History',
                agelabel: 'Pupils Age:',
                inputAgePlaceH: 'Example: Year 4 or Aged 9', 
                paratext: 'Instant laughter at the touch of a button. Generating pupil friendly humor bringing smiles and joy.',
                namebtn: 'Launch',
                Notes_content: `<div>
                
                <p>The joke generator is a fun and light-hearted tool designed to generate pupil-friendly jokes on a given topic. It takes into consideration the age range of pupils and ensures that the jokes are suitable for them in terms of content and complexity.
                </p>
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
                        <h5 className='fw-bold px-3 py-3' style={{color: '#036CFF'}}>Math</h5>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <MCard planStatus={isPaid} formmathcard ={[...formmathcarditems1]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <MCard planStatus={isPaid} formmathcard ={[...formmathcarditems2]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <MCard planStatus={isPaid} formmathcard ={[...formmathcarditems3]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <MCard planStatus={isPaid} formmathcard ={[...formmathcarditems4]}/>
                        </div>
                    </div>
                  </div>
                </div>

                {/* Section-Literacy */}

                <div className="Section-literacy">
                  <div className="container-fluid">
                    <div className='row my-lg-3 my-md-3'>
                        <h5 className='fw-bold px-3 py-3' style={{color: '#036CFF'}}>Literacy</h5>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <LCard planStatus={isPaid} formliteracycard ={[...formliteracycarditems1]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <LCard planStatus={isPaid} formliteracycard ={[...formliteracycarditems2]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <LCard planStatus={isPaid} formliteracycard ={[...formliteracycarditems3]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <LCard planStatus={isPaid} formliteracycard ={[...formliteracycarditems4]}/>
                        </div>
                    </div>
                  </div>
                </div>

                {/* Section-creative */}

                <div className="Section-literacy">
                  <div className="container-fluid">
                    <div className='row my-lg-3 my-md-3'>
                        <h5 className='fw-bold px-3 py-3' style={{color: '#036CFF'}}>Creative</h5>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <CCards planStatus={isPaid} formcreativecard ={[...formcreativecarditems1]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <CCards planStatus={isPaid} formcreativecard ={[...formcreativecarditems2]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <CCards planStatus={isPaid} formcreativecard ={[...formcreativecarditems3]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <CCards planStatus={isPaid} formcreativecard ={[...formcreativecarditems4]}/>
                        </div>
                    </div>

                    <div className='row my-lg-3 my-md-3'>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <CCards planStatus={isPaid} formcreativecard ={[...formcreativecarditems5]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <CCards planStatus={isPaid} formcreativecard ={[...formcreativecarditems6]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <CCards planStatus={isPaid} formcreativecard ={[...formcreativecarditems7]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <CCards planStatus={isPaid} formcreativecard ={[...formcreativecarditems8]}/>
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