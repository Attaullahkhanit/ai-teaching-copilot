import React from 'react'
import Dashbaord from '../Dashboard/Dashboard'
import MCard from '../../../Components/PrimarytoolsCard/MCard'
import LCard from '../../../Components/PrimarytoolsCard/LCard'
import CCards from '../../../Components/PrimarytoolsCard/CCards'
import { useState } from 'react'
import { useEffect } from 'react'
import { baseURL } from '../../../config'
import PASPCard from '../../../Components/PrimarytoolsCard/PASPCard'
import PLPCard from '../../../Components/PrimarytoolsCard/PLPCard'
import PCACard from '../../../Components/PrimarytoolsCard/PCACard'

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
            tooltitle: 'Primary',
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
          tooltitle: 'Primary',  
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
          tooltitle: 'Primary',  
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
          tooltitle: 'Primary',  
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
            tooltitle: 'Primary',  
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
              tooltitle: 'Primary',  
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
              tooltitle: 'Primary',  
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
              tooltitle: 'Primary',  
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
            tooltitle: 'Primary',  
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
              tooltitle: 'Primary',  
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
              tooltitle: 'Primary',  
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
              tooltitle: 'Primary',  
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
            tooltitle: 'Primary',  
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
                tooltitle: 'Primary',
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
              tooltitle: 'Primary',  
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
              tooltitle: 'Primary',  
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
            // Data of Assessment|Starters|Plenaries 


          const formPASPcarditems1 = [
            { cardicon: "bi bi-card-list fs-3 text-primary",
            tooltitle: 'Primary',  
            title : 'Sentence Starter',
              p1:" prompt: Primary Prompt: I am a primary school teacher can you create sentence starters for the this topic or learning objective here: [Topic]. It must be suitable for pupils aged [AGE].",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"",
              labletopics: 'Topic or Learning Objective',
              inputPlaceH: 'Example: Earth and Space, Healthy Eating, Animal Habitats',
              agelabel: 'Pupils Age:',
              inputAgePlaceH: 'Example: Year 3, Aged 8',
              paratext: 'Want to create a prompt or phrase to initiate the beginning of a written or spoken sentence.',
              namebtn: 'Launch',
              Notes_content: `<div>
              <p>Take the time to add the topic or learning objective and the generator will create the appropriate sentence starters. They should be engaging, promote creativity, and be tailored to the pupils needs. </p>
              <p>Want to differentiate adjust the pupils age text box.</p>
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

          const formPASPcarditems2 = [
              { cardicon: "bi bi-text-indent-left fs-3 text-primary",
              tooltitle: 'Primary',  
              title : 'Fill the Blank',
                p1:" prompt: Primary Prompt: I am a primary school teacher can you create a fill the blank worksheet for the topic or lesson I describe [Lesson] ,The activity must be suitable for pupils aged [Age] and should share the answers at the bottom of the sheet.",
                p2:"Secondary Prompt: The age of the students is identified below: ",
                p3:"",
                labletopics: 'Topic or Learning Objective',
                inputPlaceH: 'Example: Forces and motion, traditional tales, History of Ancient CivilisationLearning Objective: To identify ancient civilizations such as Egyptians, Greeks or Romans',
                agelabel: 'Pupils Age:',
                inputAgePlaceH: 'Example:: Year 3, Aged 8', 
                paratext: 'Get pupils to complete missing words by inserting the appropriate words or phrases.',
                namebtn: 'Launch',
                Notes_content: `<div>
                <p>The fill the blank activity is an interactive learning exercise where pupils are presented with incomplete sentences or questions and are required to fill in the missing words or answers.</p>

                <p>Think carefully about the topic or learning objective and if appropriate apply Bloom’s Taxonomy, Solo Taxonomy etc.</p>
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

              const formPASPcarditems3 = [
              { cardicon: "bi bi-list-check fs-3 text-primary",
              tooltitle: 'Primary',  
              title : 'True or False',
                p1:" prompt: `Primary Prompt: I am a primary school teacher can you create a true or false activity for the topic let me describe it,  [Lesson]. The activity must be suitable for pupils aged [Age] and should share the answers at the bottom of the sheet.",
                p2:"Secondary Prompt: The age of the students is identified below: ",
                p3:"",
                labletopics: 'Topic or Learning Objective',
                inputPlaceH: 'Example: Electricity and Circuits, Creative writing, Sounds and Music Learning Objective: To identify the key components of a circuit',
                agelabel: 'Pupils Age:',
                inputAgePlaceH: 'Example:: Year 4 or Aged 9', 
                paratext: 'A true of false activity to assess students learning through written statements',
                namebtn: 'Launch',
                Notes_content: `<div>
                
                <p>
                Want to differentiate adjust the pupils age text box.
                </p>
                <p>
                  A true or false worksheet is an interactive activity that assesses student’s understanding of a specific topic, such as the key components of a circuit. It presents a series of statements related to the topic, and students must determine if each statement is true or false. This activity promotes critical thinking and knowledge recall as students carefully read and analyze each statement. It also provides an opportunity for self-assessment and immediate feedback, as the correct answers are provided at the bottom of the worksheet. True or false worksheets are an engaging way to gauge students' comprehension and reinforce key concepts in a concise and interactive format.
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

              const formPASPcarditems4 = [
              { cardicon: "bi bi-slash-circle-fill fs-3 text-primary",
              tooltitle: 'Primary',  
              title : 'Mr Wrong',
                p1:" prompt: Primary Prompt: I want pupils to think about questions that are wrong and then come up with the right answer through discussion. Can you prepare a list of answer that are wrong based on this topic or learning objective: [Topic]. The activity must be suitable for pupils aged [AGE].Display the correct answers at the bottom of the worksheet.",
                p2:"Secondary Prompt: The age of the students is identified below: ",
                p3:"",
                labletopics: 'Topic or Learning Objective',
                inputPlaceH: 'Example:: Money and financial literacy, Human Body & Health, Inventors and Inventions Learning Objective: To identify a range of inventors',
                agelabel: 'Pupils Age:',
                inputAgePlaceH: 'Example: Year 4, Year 9', 
                paratext: 'Generate incorrect statements and students have to explain or discuss the appropriate answer.',
                namebtn: 'Launch',
                Notes_content: `<div>
                
                <p>The Mr Wrong worksheet helps pupils to carefully think about the question based and prepare a rationale as to why it is wrong. It can encourage class discussion and foster collaboration. Where possible the worksheet will display the correct answer to help clear any misconceptions.

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

          const formPASPcarditems5 = [
            { cardicon: "bi bi-joystick fs-3 text-primary",
            tooltitle: 'Primary',  
            title : 'Pictionary Ideas',
              p1:" prompt: `Primary Prompt: I am a primary school teacher can you prepare a list of 20 words that can be used for Pictionary based on this topic or learning objective: [Topic]. The activity must be suitable for pupils aged [AGE].",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"",
              labletopics: 'Subject or Topic:',
              inputPlaceH: 'Example: History, Science, Math, World Geography, ',
              agelabel: 'Pupils Age:',
              inputAgePlaceH: 'Example:: Year 7, Aged 12', 
              paratext: 'Generate a topic-based list of keywords for students to draw in a Pictionary-style game. Lets play!',
              namebtn: 'Launch',
              Notes_content: `<div>
              <p>By incorporating pictionary into your teaching, you can create an interactive and engaging learning experience that promotes creativity, collaboration, critical thinking, and content mastery across various subjects.</p>
              <p>If the words generated are difficult for pupils to draw consider altering the age range to differentiate.</p>
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

          const formPASPcarditems6 = [
              { 
                cardicon: "bi bi-activity fs-3 text-primary",
                tooltitle: 'Primary',
                title : 'Assessment Ideas',
                p1:" prompt: `Primary Prompt: I am a primary school teacher can you generate a list of assessment ideas that will help to measure pupils progress. The ideas will focus on this topic or learning objective: [Topic]. The activity must be suitable for pupils aged [AGE].",
                p2:"Secondary Prompt: The age of the students is identified below: ",
                p3:"",
                labletopics: 'Subject or Topic:',
                inputPlaceH: 'Example: Math, English, Religious Education',
                agelabel: 'Pupils Age:',
                inputAgePlaceH: 'Example: Aged 5 or Year 10', 
                paratext: 'Generate a list of assessment ideas to help measure pupils progress.',
                namebtn: 'Launch',
                Notes_content: `<div>
                
                <p>Create a list of assessment ideas and the benefits of each specific to a subject or topic of your choice, for example:</p>
                <ul>
                  <li>Promote Reflection</li>
                  <li>Encourage Discussion</li>
                  <li>Assess Factual Knowledge</li>
                  <li>Practising Skill</li>
                  <li>Journals</li>
                  <li>Peer Assessments</li>
                </ul>
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

              const formPASPcarditems7 = [
              { cardicon: "bi bi-alarm-fill fs-3 text-primary",
              tooltitle: 'Primary',  
              title : 'Retrieval Quiz',
                p1:" prompt: Primary Prompt: I want to create a retrieval quiz  to allow students to demonstrate knowledge recall. Can you prepare a list of 6 retrieval questions with multiple answers based on this topic or learning objective: [TOPIC]. The activity must be suitable for pupils aged [AGE]. Display the correct answer directly after the question.",
                p2:"Secondary Prompt: The age of the students is identified below: ",
                p3:"",
                labletopics: 'Topic or Learning Objective',
                inputPlaceH: 'Example:Famous Artist, Weather Patterns, Map Skills, Forces, Energy Learning Objective: To identify different types of forces',
                agelabel: 'Pupils Age:',
                inputAgePlaceH: 'Example:: Year 6, Aged 11', 
                paratext: 'Create an assessment to measure pupils ability to recall information from memory',
                namebtn: 'Launch',
                Notes_content: `<div>  
                <p>The retrieval quiz encourages pupils to recall information from memory, enhancing long-term retention and learning. Regular retrieval practice through quizzes reinforces the information and helps pupils to develop strong memory pathways.</p>
                <p>Try copying and pasting a curriculum keypoint into the ‘Topic’ section, you might just be surprised.</p>
                <p>Want to differentiate adjust the pupils age text box.</p>
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

              const formPASPcarditems8 = [
              { cardicon: "bi bi-radioactive fs-3 text-primary",
              tooltitle: 'Primary',  
              title : 'Got an Idea',
                p1:" prompt: `Primary Prompt: Write some child friendly jokes based on the following topic [TOPIC] and consider their age:[AGE]. ",
                p2:"Secondary Prompt: The age of the students is identified below:",
                p3:"",
                labletopics: 'Your Subject:',
                inputPlaceH: 'Example: Science, Maths, History',
                agelabel: 'Pupils Age:',
                inputAgePlaceH: 'Example: Year 4 or Aged 9', 
                paratext: 'If you have an awesome tool idea, be sure to share it with us via the contact page.',
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
          // Primary Lesson Plan Card Data

          const formPLessonPcarditems1 = [
            { cardicon: "bi bi-calendar2-check fs-3 text-primary",
              tooltitle: 'Secondary',
              title : 'Lesson Planning',
              p1:" prompt: `Primary Prompt: I am a master primary school teacher and want help to create a lesson plan. The subject or topic I would like to plan is, [Topic]. Try to include the following objectives or curriculum standards, [objectives]. The age group of the pupils are [Age]. The topics will need to be structured by [Structure]. The time available for each topic or lesson is [Time].",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"",
              targetlable: 'Subject or Topic:',
              inputtargetPlaceH: 'Example 1: English Language Arts (e.g., reading, writing, grammar, phonics) <br/> Example 2: Science (e.g., plants, animals, weather, space, forces and motion)',
              desclable: 'Specific Learning Objectives or Curriculum Standards:',
              inputdescPlaceH: 'Example 1: English Programme of Study, History programme of study, Computing programme of study Example 2: Writing: Write clear and coherent sentences, paragraphs, and short narratives. Use appropriate grammar, punctuation, and capitalization in writing. Revise and edit written work for clarity and organisation. Example 3: You could directly copy text from the programme of study', 
              tonelable: 'Age:',
              inputTonePlaceH: 'Example:: Year 4, Aged 9',
              socialLable: 'How would you like the lesson to be structured:',
              inputSocialPlaceH: 'Example: Introduction, Body and Conclusion | Engage - Explore - Explain - Elaborate - Evaluate (5E Model) |Problem Solving Approach | Flipped Classroom |  Starter, Main and Plenary |',
              wordlabel: 'How much time is available for the lesson:',
              inputwordPlaceH: 'Example: 45 minutes, 60 minutes',
              paratext: 'Save yourself time by creating a lesson plan for a topic of your choice.  Consider the topic, learning objectives and pupils ability.',
              namebtn: 'Launch',
              Notes_content: `<div>
              <p>A lesson plan can be structured in various ways depending on the educator's preferences and the specific needs of the topic. Here are a few examples of common structures used in lesson planning:</p>
  
              <ol>
                <li>
                  <strong>Introduction - Body - Conclusion:</strong>
                  <ul>
                    <li><strong>Introduction:</strong> Engage students by providing an overview of the topic and its relevance.</li>
                    <li><strong>Body:</strong> Present key concepts, provide explanations, and engage students in activities or discussions.</li>
                    <li><strong>Conclusion:</strong> Summarize the main points, reinforce learning outcomes, and assign relevant tasks or homework.</li>
                  </ul>
                </li>
                <li>
                  <strong>Engage - Explore - Explain - Elaborate - Evaluate (5E Model):</strong>
                  <ul>
                    <li><strong>Engage:</strong> Capture students' interest and activate their prior knowledge about the topic.</li>
                    <li><strong>Explore:</strong> Facilitate hands-on activities, experiments, or group discussions to encourage exploration and inquiry.</li>
                    <li><strong>Explain:</strong> Provide direct instruction and explanations of key concepts and skills.</li>
                    <li><strong>Elaborate:</strong> Allow students to apply their knowledge through additional activities or projects.</li>
                    <li><strong>Evaluate:</strong> Assess students' understanding and learning outcomes through quizzes, assessments, or presentations.</li>
                  </ul>
                </li>
                <li>
                  <strong>Problem-Solving Approach:</strong>
                  <ul>
                    <li>Present a real-life problem or scenario related to the topic.</li>
                    <li>Encourage students to brainstorm and propose possible solutions or strategies.</li>
                    <li>Guide students through the process of analyzing the problem, evaluating options, and reaching a solution.</li>
                    <li>Facilitate discussions, provide feedback, and assess students' problem-solving skills and understanding.</li>
                  </ul>
                </li>
                <li>
                  <strong>Flipped Classroom Model:</strong>
                  <ul>
                    <li>Assign pre-learning materials, such as videos or readings, for students to review before class.</li>
                    <li>Use in-class time for activities, discussions, and hands-on application of concepts.</li>
                    <li>Facilitate group work, peer-to-peer learning, and provide guidance and support as needed.</li>
                    <li>Assign post-learning tasks or assessments to reinforce and assess understanding.</li>
                  </ul>
                </li>
              </ol>
              <p>Remember, these are just examples, and educators can adapt and customize the lesson plan structure based on their teaching style, the needs of their students, and the requirements of the specific topic or subject.</p>
              <p>If the topic planner generates content that seems too difficult, alter the age range to differentiate.</p>
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
          const formPLessonPcarditems2 = [
              { cardicon: "bi bi-textarea fs-3 text-primary",
              tooltitle: 'Secondary',
                title : 'Topic Planner',
                p1:" prompt: `Primary Prompt: I am a master teacher and want help to create a plan of topics. The subject or topic I would like to plan is, [Topic]. Try to include the following objectives or curriculum standards, [objectives]. The age group of the pupils are [Age]. The topics will need to be structured by [Structure]. The time available for each topic or lesson is [Time] ",
                p2:"Secondary Prompt: The age of the students is identified below: ",
                p3:"",
                targetlable: 'Subject or Topic:',
                inputtargetPlaceH: 'Example: Natural Hazards, Modern Medicine, Mental Preparation, Writing Fiction',
                desclable: 'Specific Learning Objectives or Curriculum Standards:',
                inputdescPlaceH: 'Example 1: KS2 English Programme of Study, KS1 History programme of study Example 2: You could directly copy text from the programme of study', 
                tonelable: 'Age:',
                inputTonePlaceH: 'Example:: Year 2, Aged 7',
                socialLable: 'How would you like the lesson to be structured:',
                inputSocialPlaceH: 'Example: Lessons, Projects or Units',
                wordlabel: 'How much time is available for the lesson:',
                inputwordPlaceH: '2 Lessons a week over 7 weeks.', 
                paratext: 'Empowering Educators with Topic Ideas for Engaging and Relevant Classroom Lessons',
                namebtn: 'Launch',
                Notes_content: `<div>
                
                <p>A topic planner is a valuable tool that brings structure and organisation to the teaching process. It helps us align lessons with learning objectives and curriculum standards, ensuring comprehensive coverage of essential content. By allocating appropriate time to each topic or unit, we can effectively manage our teaching schedules and avoid rushed instruction.
                </p>
                <p>If the topic planner generates content that seem too difficult, alter the age range to differentiate.
                </p>
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
              }]
  
              const formPLessonPcarditems3 = [
              { cardicon: "bi bi-activity fs-3 text-primary",
              tooltitle: 'Secondary',
                title : 'Lesson Ideas',
                p1:" prompt: `Primary Prompt: I am a school teacher can you share with me a list of ways in which I can make the following lesson more engaging, [Lesson] to engage students.. The activity must be suitable for pupils aged [AGE].",
                p2:"Secondary Prompt: The age of the students is identified below: ",
                p3:"",
                labletopics: 'Lesson Description:',
                inputPlaceH: 'Describe Take the time to describe the lesson here see examples below: Example: Numeracy in Geography, Metals and Non Metals, Writing poetry',
                agelabel: 'Pupils Age:',
                inputAgePlaceH: 'Example: Year 5 or Aged 10', 
                paratext: 'Generate ideas to make a boring lesson engaging and captivating for students active participation',
                namebtn: 'Launch',
                Notes_content: `<div>
                
                <p>Create a list of ways in which the lesson could further engage students. Just share the topic or describe the lesson, and it will give you a list of examples. See an example of generated ideas below:</p>
  
                <ul>
                  <li>Gamify the lesson</li>
                  <li>Hands-on activities</li>
                  <li>Role-playing or simulations</li>
                  <li>Personalized learning</li>
                  <li>Virtual Tours</li>
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
  
              const formPLessonPcarditems4 = [
              { cardicon: "bi bi-file-earmark-easel fs-3 text-primary",
              tooltitle: 'Secondary',
                title : 'Slide Generator',
                p1:" prompt: `Primary Prompt:  ",
                p2:"Secondary Prompt: The age of the students is identified below: ",
                p3:"",
                labletopics: 'Lesson Description:',
                inputPlaceH: 'Describe Take the time to describe the lesson here see examples below: Example: Numeracy in Geography, Metals and Non Metals, Writing poetry',
                agelabel: 'Pupils Age:',
                inputAgePlaceH: 'Example: Year 8 or Aged 13', 
                paratext: 'The slide generator will create a series of engaging slides for a dynamic presentation on any chosen topic or lesson',
                namebtn: 'Coming Soon',
                Notes_content: `<div>
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
  
          const formPLessonPcarditems5 = [
              {
              cardicon: "bi bi-file-diff fs-3 text-primary",
              tooltitle: 'Secondary',
              title : 'Differentiation',
              p1:" prompt: `Primary Prompt: Differentiating a learning resource. You are an expert on differentiating resources for students of different needs. Read the following text, [User Upload]. You are going to create three versions of this. In the first version of text can you include [Version 1]. In the second version of text can you include [Version 2]. In the third version of text can you include [Version 3]. The activity must be suitable for pupils aged [AGE]. ",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"",
              targetlable: 'Copy Text to Differentiate: [User Upload]',
              inputtargetPlaceH: 'Copy & Paste text here...',
              desclable: 'Version one should include: [Version 1]',
              inputdescPlaceH: 'In the first differentiated version what would you like to include', 
              tonelable: 'Version two should include:[Version 2]',
              inputTonePlaceH: 'In the second differentiated version what would you like to include',
              socialLable: 'Version three should include:[Version 3]',
              inputSocialPlaceH: 'In the third differentiated version what would you like to include',
              wordlabel: 'Pupils Age:[Age]',
              inputwordPlaceH: 'Example: Year 3 or Aged 8', 
              paratext: 'Want to differentiate a resource? Copy your text across and have it differentiated to suit your varied learners needs. ',
              namebtn: 'Launch',
              Notes_content: `<div>
              <p>The first step is to upload the text that you would like to differentiate. You can then consider the different versions of the text you require. See ideas below:</p>
  
              <h5>Lexile Levels:</h5>
              <p>Assign texts with varying Lexile levels to accommodate different reading abilities. Lexile levels measure text complexity and match it to students' reading levels.</p>
  
              <h5>Chunking:</h5>
              <p>Break longer texts into smaller, more manageable chunks. This helps students process information in smaller segments and prevents overwhelming them with a large amount of text at once.</p>
  
              <h5>Vocabulary Support:</h5>
              <p>Pre-teach or provide definitions for challenging vocabulary words before students read the text. You can also create word banks or provide context clues to help students understand new terms.</p>
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

        // Data of Primary Curiculum Assistance

        const formPCACarditems1 = [
          { 
            cardicon: "bi bi-map fs-3 text-primary",
            tooltitle: 'Secondary',
            title : 'Curriculum Mapping',
            p1:"prompt: Primary Prompt: I am a primary school leader can you help to create a curriculum map. The subject it is being develop for is [Topic] . It will need to align learning objectives, activities and assessment across the curriculum. The age group that it will be targeted at is [Age]. ",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'Topic:',
            inputPlaceH: 'Example:English, Math, Design Technology, Art',
            agelabel: 'Age:',
            inputAgePlaceH: 'Example: Aged 7, Aged 10', 
            paratext: 'Explore the process of aligning learning objectives, activities, and assessments across a curriculum.',
            namebtn: 'Launch',
            Notes_content: `<div>
            
            <p>The curriculum map will generate a series of learning objectives, activities and assessments for the academic year. 
            </p>
            <p>If there are specific lesson you would like to include add this within the ‘subject’ area. Remember you also have access to the ‘free play’ tool if you would like to get creative.
            </p>
            <p>Review the draft in the text editor on the right and make any necessary adjustments to ensure it reflect your intended message and tone.</p>
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

        const formPCACarditems2 = [
            { cardicon: "bi bi-book-half fs-3 text-primary",
            tooltitle: 'Secondary',
              title : 'Glossary Generator',
              p1:" prompt: `Primary Prompt: I am a primary school teacher and want you to create a glossary for the following topic [Topic] . It should be suitable for pupils age [Age] . The output will need to be in a table form with the keyword and description separated. It should also be placed in alphabetical order.",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"",
              labletopics: 'Subject or Topic:',
              inputPlaceH: 'Example:English, Math, Science, Ancient Egyptians, Dinosaurs',
              agelabel: 'Age:',
              inputAgePlaceH: 'Example: Aged 6, Aged 9', 
              paratext: 'A tool that creates a list of terms and their definitions for easy reference and understanding',
              namebtn: 'Launch',
              Notes_content: `<div>
              
              <p>The glossary generator generates a table with terms and their definitions. Start by using the glossary, and you can expand it by including more details like the exam board.
              </p>
              <p>Promote Active Learning: Motivate students to actively participate with the glossary by prompting them to construct sentences using the defined keywords or to quiz their peers on the terms.
              </p>
              <p>Review the draft in the text editor on the right and make any necessary adjustments to ensure it reflect your intended message and tone.
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

            const formPCACarditems3 = [
            { cardicon: "bi bi-speaker fs-3 text-primary",
            tooltitle: 'Secondary',
              title : 'Student Voice',
              p1:" prompt: `Primary Prompt: I am a primary school leader and want to create a student voice questionnaire for the following topic [Topic]. It should be suitable for pupils age [Age].",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"",
              labletopics: 'Subject or Topic:',
              inputPlaceH: 'Example:History, Art, PE, Cyberbullying, Inclusion and Diversity',
              agelabel: 'Age:',
              inputAgePlaceH: 'Example: Aged 9, Aged 11', 
              paratext: 'Create a questionnaire to empower learners to provide feedback and actively shape their learning experiences to support the curriculum',
              namebtn: 'Launch',
              Notes_content: `<div>
              <p>When preparing the questionnaire, carefully consider the subject or topic and provide the necessary details. Here are some examples of possible use of student voice:</p>

              <p>Subject or Topic questionnaire:</p>
              <ul>
                <li>Cyberbullying</li>
                <li>Identifying students' needs and interests</li>
                <li>Promoting Student Well-being</li>
                <li>Enhancing School Policies</li>
              </ul>

              <p>It's essential to communicate to students that their input is valued and that their voices will contribute to meaningful change in the school community.</p>

              <p>Review the draft in the text editor on the right and make any necessary adjustments to ensure it reflects your intended message and tone.</p>
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

            const formPCACarditems4 = [
            { cardicon: "bi bi-award fs-3 text-primary",
            tooltitle: 'Secondary',
              title : 'Skills Audit',
              p1:" prompt: `Primary Prompt: I am a primary school leader can you help to create a skills audit for a school teacher. The focus area will be [Key Competencies], For each of the criteria the user will need to highlight there skill level as either  Novice, Intermediate, Proficient, and Expert. Can you then create a matrix that list the key competencies of [Key Competencies], in a table.",
              p2:"Secondary Prompt: The age of the students is identified below: ",
              p3:"",
              labletopics: 'Key Competencies',
              inputPlaceH: 'Example: Subject knowledge, pedagogical skills, classroom management, communication, assessment, and professional development.',
              agelabel: 'Key Competencies',
              inputAgePlaceH: 'Example: Subject knowledge, pedagogical skills, classroom management, communication, assessment, and professional development.', 
              paratext: 'Want help to assess an individuals competencies and identify areas for development',
              namebtn: 'Launch',
              Notes_content: `<div>
              
              <p>Within the key competencies describe what skill you would like to develop, this will generate a table that will allow allow you to self our peer assess your skill level.:
              </p>
              <p>Once the skills audit is completed, you can review the matrix to identify areas of strength and areas for improvement in pedagogical skills among your teaching staff. This information will help guide targeted professional development and support teachers in enhancing their instructional practices and promoting effective teaching and learning in the classroom.
              </p>
              <p>Review the draft in the text editor on the right and make any necessary adjustments to ensure it reflect your intended message and tone.
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

        const formPCACarditems5 = [
            {
            cardicon: "bi bi-graph-down-arrow fs-3 text-primary",
            tooltitle: 'Secondary',
            title : 'Deep Dives',
            p1:" prompt: `Primary Prompt: I am a subject specialist at a primary school and want to do a deep dive of the following subject [Subject]. Can you prepare a list of questions that would help me to identify the strengths and weakness of my curriculum. For the questions posed give [Solutions]answers.",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'Subject:',
            inputPlaceH: 'Example: Computing, History, Math, Geography',
            agelabel: 'With or Without Solutions',
            inputAgePlaceH: 'Example: Type With or Without ', 
            paratext: 'Want questions that will give you an in-depth explorations of specific subjects or skills.',
            namebtn: 'Launch',
            Notes_content: `<div>
            
            <p>Deep diving into a subject allows for a comprehensive understanding of its strengths and weaknesses. It uncovers gaps, identifies areas for improvement, and maximises pupils learning. By analysing the curriculum, pedagogy, and assessment, we as educators can enhance our teaching strategies and optimise student outcomes.
            </p>
            <p>Review the draft in the text editor on the right and make any necessary adjustments to ensure it reflect your intended message and tone.
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

      const formPCACarditems6 = [
        { cardicon: "bi bi-person-lines-fill fs-3 text-primary",
        tooltitle: 'Secondary',
          title : 'Learning Walks',
          p1:" prompt: `Primary Prompt: I am a subject specialist at a primary school and want to undertake a learning walk. The purpose of the learning walk is [Purpose]. The goals of the learning walk is to contribute to our professional development. Create a checklist that outlines key areas of focus during the learning walk. ",
          p2:"Secondary Prompt: The age of the students is identified below: ",
          p3:"",
          labletopics: 'Topics or Lesson Content',
          inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
          agelabel: 'Purpose',
          inputAgePlaceH: 'Example: Student engagement, instructional strategies, assessment practices, classroom environment, differentiation, subject area.', 
          paratext: 'Support and guidance with learning walks to further develop the curriculum',
          namebtn: 'Launch',
          Notes_content: `<div>
          
          <p>Encourage colleagues to reflect on the feedback received and engage in collaborative discussions with colleagues. Promote a culture of continuous improvement by facilitating conversations that allow teachers to share ideas, strategies, and best practices.
          </p>
          <p>Follow-Up and Follow-Through: Ensure that the feedback and recommendations from the learning walk are followed up on and integrated into professional development plans and ongoing support. Monitor progress, provide additional guidance as needed, and celebrate successes.
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

      const formPCACarditems7 = [
          { cardicon: "bi bi-book fs-3 text-primary",
          tooltitle: 'Secondary',
            title : 'Subject Reading',
            p1:" prompt: `Primary Prompt: I am a school teacher can you generate a list of reading material to further support, stretch and engage pupils within the following subject [subject]. It must be suitable for the students age they are [Age]. Output the results in a table with the author, book title and why they should read it.",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'Topic:',
            inputPlaceH: 'Example:English Reading, Ancient History, Space Exploration:',
            agelabel: 'Age:',
            inputAgePlaceH: 'Example: Aged 7, Aged 10', 
            paratext: 'Generate a list of reading material to further support, stretch and engage pupils within your subject',
            namebtn: 'Launch',
            Notes_content: `<div>
            <p>This tool will help you generate a list of reading material to further engage your learners. It will output a table that identifies:</p>

            <ul>
                  <li>Author</li>
                  <li>Title</li>
                  <li>Why they should read it</li>
            </ul>

            <p>Review the draft in the text editor on the right and make any necessary adjustments to ensure it is accurate and reflects your intended message and tone.</p>
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

          const formPCACarditems8 = [
          { cardicon: "bi bi-smartwatch fs-3 text-primary",
          tooltitle: 'Secondary',
            title : 'Subject Watch',
            p1:" prompt: `Primary Prompt: I am a primary school teacher can you generate a list of video material to further support, stretch and engage pupils within the following subject [Subject]. It must be suitable for the students age they are [Age]. Output the results in a table with the director, media title and why they should watch it.",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'Subject or Topic:',
            inputPlaceH: 'Example: Rainforest, Historical Figures, Math, Geography,  ',
            agelabel: 'With or Without Solutions',
            inputAgePlaceH: 'Example: Type With or Without', 
            paratext: 'Generate a list of movies or series to further support, stretch and engage pupils within your subject',
            namebtn: 'Launch',
            Notes_content: `<div>
            
            <p>This tool will help you generate a list of audiovisual media to further engage your learners, it will output a table that identifies:
            </p>
            <ul>
              <li>Director</li>
              <li>Title</li>
              <li>Why they should watch it</li>
            </ul>
            <p>Review the draft in the text editor on the right and make any necessary adjustments to ensure it is accurate and reflects your intended message and tone.
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

          const formPCACarditems9 = [
          { cardicon: "bi bi-person-video3 fs-3 text-primary",
          tooltitle: 'Secondary',
            title : 'IEP',
            p1:" prompt: Primary Prompt: I am a Special educational needs coordinator and a school teacher, can you help me to develop a individual education plan. The pupils learner need is [Learner Need]. Their strengths are as follows [Strengths].The areas for improvement are [Improvement]. The current hobbies and interests include [Hobbies]. The output of the IEP will outline the measurable goals and objectives that are set for the student to achieve within a specified timeframe [TimeFrame]. These goals should be specific, measurable, attainable, relevant, and time-bound (SMART). They are designed to address the student's areas of need and guide the instructional planning and intervention strategies.You will also need to consider their age, they are [Age].",
            p2:"Secondary Prompt: The age of the students is identified below: ",
            p3:"",
            labletopics: 'Learning Need (Describe):',
            inputPlaceH: 'Example: Academic Support, Learning Disability, Speech and Language Need, Social and Emotional support etc.',
            agelabel: 'Strengths:', 
            inputAgePlaceH: 'Example:Memorisation, Reading, Writing, Comprehension',
            input3label: 'Areas for Improvement',
            input3PlaceH: 'Example:Literacy, Numeracy, Memorisation',
            input4label: 'Hobbies or Interest',
            input4PlaceH: 'Example:Football, Swimmings, Gaming, Fashion',
            input5label: 'Timeframe:',  
            input5PlaceH: 'Example: 6 months, 12 months',
            input6label: 'Age:',
            input6PlaceH: 'Example: Aged 8, Aged 10', 
            paratext: 'Support with developing an IEP for students with special education needs and individualized learning goals',
            namebtn: 'Launch',
            Notes_content: `<div>
            
            <p>When adding the learning need be sure to identify the need and then add further description.</p>
            <p>It is important for the development of an IEP to involve trained professionals who are knowledgeable about special education laws and regulations, and who can provide appropriate guidance and support throughout the process.
            </p>
            <p>Review the draft in the text editor on the right and make any necessary adjustments to ensure it reflects your intended message and tone.</p>
          </div>`,
            isPdf:true,
            reportWriting: true,
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

      const formPCACarditems10 = [
          {
          cardicon: "bi bi-person-workspace fs-3 text-primary",
          tooltitle: 'Secondary',
          title : 'Classroom Support',
          p1:" prompt: `Primary Prompt: I am a school teacher can you give me examples of Behavior & Engagement Prompts: Tools to foster positive behavior and self-regulation in students. You will also need to consider their age, they are [Age].",
          p2:"Secondary Prompt: The age of the students is identified below: ",
          p3:"",
          labletopics: 'Topics or Lesson Content',
          inputPlaceH: 'Example: Plant Cells, Macbeth, Rounding, Romans',
          agelabel: 'Age:',
          inputAgePlaceH: 'Example: Aged 6, Aged 11', 
          paratext: 'Behavior & Engagement Prompts: Tools to foster positive behavior and self-regulation in students. ',
          namebtn: 'Launch',
          Notes_content: `<div>
          
          <p>These prompts are designed to encourage reflection, self-regulation, and positive behavior among the age range you specify. They promote emotional awareness, empathy, goal-setting, problem-solving, and fostering a respectful classroom environment.
          </p>
          <p>Review the draft in the text editor on the right and make any necessary adjustments to ensure it reflects your intended message and tone.
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

    const formPCACarditems11 = [
      { cardicon: "bi bi-activity fs-3 text-primary",
      tooltitle: 'Secondary',
        title : 'Curriculum Ideas',
        p1:" prompt: Primary Prompt: I am a primary school leader can you help to develop a list of ideas that will help support the development of the [Subject] curriculum. It should be suitable for pupils age [Age].  ",
        p2:"Secondary Prompt: The age of the students is identified below: ",
        p3:"",
        labletopics: 'Subject or Topic:',
        inputPlaceH: 'Example:Science, Outdoor and Adventure Activities, Measurements',
        agelabel: 'Age:',
        inputAgePlaceH: 'Example: Aged 6, Aged 10', 
        paratext: 'Generate idea to help support the development of your curriculum.',
        namebtn: 'Launch',
        Notes_content: `<div>
        
        <p>The ‘Curriculum Ideas’ section will lead to the development of a dynamic, effective, and student-centered curriculum.
        </p>
        <p>Remember to regularly review and evaluate the curriculum to ensure it remains relevant, engaging, and aligned with educational goals and student needs. Seek feedback from students, parents, and teachers to make necessary adjustments and improvements.
        </p>
        <p>Review the draft in the text editor on the right and make any necessary adjustments to ensure it reflects your intended message and tone.</p>
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

    const formPCACarditems12 = [
        { cardicon: "bi bi-send-fill fs-3 text-primary",
        tooltitle: 'Secondary',
          title : 'SEND Support',
          p1:" prompt: `Primary Prompt: I am a Special educational needs coordinator and a primary school teacher, can you help give me some strategies to support a learner who has [Learner Need]. The topic we are working on is [Topic],. You will also need to consider their age, they are [Age].",
          p2:"Secondary Prompt: The age of the students is identified below: ",
          p3:"",
          labletopics: 'Learning Need:',
          inputPlaceH: 'Example: ADHD, Visual Impairment, Gifted & Talented, English as an Additional Language, Social and Emotional',
          agelabel: 'Subject or Topic:',
          inputAgePlaceH: 'Example:Planets, Ancient Civilisations, Health & Nutrition, Costume Design',
          input3title: 'Age',
          input3PlaceH: 'Example: Aged 7, Aged 11',
          paratext: 'Take a students learning needs and look at strategies that can support them on the topic you are teaching.',
          namebtn: 'Launch',
          Notes_content: `<div>
          
          <p>The aim of this tool is to support pupils with SEND enabling them to participate fully in the lesson, achieve their academic goals, develop life skills. It promotes equality, inclusivity, and the right to education for all learners, regardless of their abilities or disabilities.
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


  return (
    <>  
        <Dashbaord>
            <div className="min-vh-100" style={{ backgroundColor: "#f0f8ff" }}>
                <div>
                    <h4 className=" text-white fw-bold py-2 px-3" style={{backgroundColor: '#036CFF'}}>Primary Tools</h4>
                </div>
                {/* Section_Math */}
                  <div className="container-fluid">
                    <div className='row my-lg-3 my-md-3'>
                        <h4 className='fw-bold px-3 py-3' style={{color: '#036CFF'}}>Math</h4>
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
                  

                {/* Section-Literacy */}

                  
                    <div className='row my-lg-3 my-md-3'>
                        <h4 className='fw-bold px-3 py-3' style={{color: '#036CFF'}}>Literacy</h4>
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
              

                {/* Section-creative */}

                  
                    <div className='row my-lg-3 my-md-3'>
                        <h4 className='fw-bold px-3 py-3' style={{color: '#036CFF'}}>Creative</h4>
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
              
                {/* Data of Assessment|starters|Planaries */}

                  
                    <div className='row my-lg-3 my-md-3'>
                        <h4 className='fw-bold px-3 py-3' style={{color: '#036CFF', wordWrap: 'break-word'}}>Assessments|Starters|Plenaries</h4>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <PASPCard planStatus={isPaid} formPASPCardData ={[...formPASPcarditems1]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <PASPCard planStatus={isPaid} formPASPCardData ={[...formPASPcarditems2]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <PASPCard planStatus={isPaid} formPASPCardData ={[...formPASPcarditems3]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <PASPCard planStatus={isPaid} formPASPCardData ={[...formPASPcarditems4]}/>
                        </div>
                    </div>

                    <div className='row my-lg-3 my-md-3'>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <PASPCard planStatus={isPaid} formPASPCardData ={[...formPASPcarditems5]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <PASPCard planStatus={isPaid} formPASPCardData ={[...formPASPcarditems6]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <PASPCard planStatus={isPaid} formPASPCardData ={[...formPASPcarditems7]}/>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                            <PASPCard planStatus={isPaid} formPASPCardData ={[...formPASPcarditems8]}/>
                        </div>
                    </div>

              {/* Data of Lesson Plans */}
                    
                        <div className='row my-lg-3 my-md-3'>
                          <h4 className='fw-bold px-3 py-3' style={{color: '#036CFF', wordWrap: 'break-word'}}>Lesson Planing</h4>
                            <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                                <PLPCard planStatus={isPaid} formPLPCard ={[...formPLessonPcarditems1]}/>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                                <PLPCard planStatus={isPaid} formPLPCard ={[...formPLessonPcarditems2]}/>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                                <PLPCard planStatus={isPaid} formPLPCard ={[...formPLessonPcarditems3]}/>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                                <PLPCard planStatus={isPaid} formPLPCard ={[...formPLessonPcarditems4]}/>
                            </div>
                        </div>
                        <div className='row my-lg-3 my-md-3'>
                            <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                                <PLPCard planStatus={isPaid} formPLPCard ={[...formPLessonPcarditems5]}/>
                            </div>
                        </div>

                {/* Data Card of Curriculam Assistance */}

                
                  <div className='row my-lg-3 my-md-3'>
                    <h4 className='fw-bold px-3 py-3' style={{color: '#036CFF'}}>Curriculam Assistance</h4>
                    <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                        <PCACard planStatus={isPaid} formPCACard ={[...formPCACarditems1]}/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                        <PCACard planStatus={isPaid} formPCACard ={[...formPCACarditems2]}/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                        <PCACard planStatus={isPaid} formPCACard ={[...formPCACarditems3]}/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                        <PCACard planStatus={isPaid} formPCACard ={[...formPCACarditems4]}/>
                    </div>
                  </div>

                  <div className='row my-lg-3 my-md-3'>
                    <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                        <PCACard planStatus={isPaid} formPCACard ={[...formPCACarditems5]}/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                        <PCACard planStatus={isPaid} formPCACard ={[...formPCACarditems6]}/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                        <PCACard planStatus={isPaid} formPCACard ={[...formPCACarditems7]}/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                        <PCACard planStatus={isPaid} formPCACard ={[...formPCACarditems8]}/>
                    </div>
                  </div>

                  <div className='row my-lg-3 my-md-3'>
                    <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                        <PCACard planStatus={isPaid} formPCACard ={[...formPCACarditems9]}/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                        <PCACard planStatus={isPaid} formPCACard ={[...formPCACarditems10]}/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                        <PCACard planStatus={isPaid} formPCACard ={[...formPCACarditems11]}/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                        <PCACard planStatus={isPaid} formPCACard ={[...formPCACarditems12]}/>
                    </div>
                  </div>
                </div>
            </div>
        </Dashbaord>
    </>
  )
}

export default PrimaryTools