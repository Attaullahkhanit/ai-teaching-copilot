import React, { Suspense, useEffect, useState } from "react";
import {useLocation, useNavigate } from "react-router-dom";
import './CreateAndPlay.css';
import { MdPlayLesson } from "react-icons/md";
//import Dashbaord from "../Dashboard/Dashboard";
import {
  ImFilesEmpty,
} from "react-icons/im";
import { Configuration, OpenAIApi } from "openai";
//  import Translation from "./components/Translation";
import { arrayItems } from "../../../Components/OptionSelection";
import WywisingEditor from "../../../Components/wywising-editor/wywising-editor";
import PDFGenerator from "../../../Components/pdf/generate-pdf";
import { ChatgptApiFunc, getFileSrcFromPublicimg } from "../../../utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseURL } from "../../../config";


// LazyLoading
const Dashbaord = React.lazy(() => import('../Dashboard/Dashboard'));

function LessonPlan() {
  const [conversation, setConversation] = useState([]);
  const [inputText, setInputText] = useState("");
  const [topicsInput, setTopicInput] = useState("");
  const [studentAge,  setstudentAge] = useState("");
  const [editorContent, setEditorContent] = useState('');

  
  const [input2, set2] = useState("");
  const [input3, set3] = useState("");
  const [input4, set4] = useState("");
  const [input5, set5] = useState("");
  const [input6, set6] = useState("");
  const [input7, set7] = useState("");
  const [input8, set8] = useState("");
  const [input9, set9] = useState("");


  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location, "locationData");
  function gotToCreateAndPlayPage() {
    navigate("/createplay");
  }

  const configuration = new Configuration({
    // apiKey: "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",
    //apiKey: "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",
    apiKey: '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'
  });
  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState(arrayItems[0].option);
  const [result, setResult] = useState("");

  let user_id = localStorage.getItem("loginResponse");
  user_id = JSON.parse(user_id);
  user_id = user_id.userDetail._id;

  const callAIModel = async () => {
    setResult("");
    setLoading(true);
     const prompt = location?.state?.isForEditer? text: `${location?.state?.p1} ${topicsInput} ${location?.state?.p2} ${studentAge} ${location?.state?.p3} ${input2} ${input3} ${input4} ${input5} ${input6} ${input7} ${input8}`;
     ChatgptApiFunc(prompt).then((resp) => { 
      console.log(resp, 'respData')
      setLoading(false);
      setResult(resp.choices[0].message.content);
     })

     var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
 
      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
         redirect: 'follow'
      };

      fetch(`https://copilot-bk-node-production.up.railway.app/track_user_free_credits/${user_id}/delete`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      
  };

  useEffect(() => {
    result !== "" && setLoading(false);
  }, [result]);
 
  let textresult = result.replace(/\n+/g, "<br>");
  
  const savePdf = () => {
    let loginResponse = localStorage.getItem("loginResponse");
    loginResponse = JSON.parse(loginResponse);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      user_id: loginResponse.userDetail._id,
      description: result,
      boxname: location.state.title,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(baseURL+"user_content_save", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        toast.success("You saved successfully", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch((error) => console.log("error", error));
  };

  function filterAndBoldFirstString(str) {
    const substrings = str.split(":");
    const firstString = substrings[0];
    const boldFirstString = `<b>${firstString}</b>`;
    const result = `${boldFirstString}:${substrings.slice(1).join(":")}`;
    return result;

  }


  function handleEditorChange(event, editor) {
    const data = editor.getData();
    setEditorContent(data);
    console.log(data, 'data')
  }
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Dashbaord>
        <section className="min-vh-100">
        <div className="min-vh-100" style={{ backgroundColor: "#f0f8ff" }}>
        <div>
            <h4 className="text-white fw-bold py-2 px-3" style={{backgroundColor: '#036CFF'}}>{location?.state?.tooltitle}</h4>
        </div>
          <div className="container-fluid">
            <div className="align-item-center py-3 fw-bold fs-5">
              {/* <BsArrowLeft className="text-primary fs-5 " />
              <span
                onClick={gotToCreateAndPlayPage}
                className="text-primary text-decoration-none pe-auto px-2"
              > */}
              {/* </span> */}
            </div>
            <div className="row px-3">
              <div className="col-md-6">
                <div className="py-4 d-flex flex-row justify-content-between">
                  <div>
                    <h2 className="">
                      {location.state?.title}{""}
                      <MdPlayLesson className="text-warning" />
                    </h2>
                  </div>
                </div>
                {/* <div>      
                  <p className='fw-bold py-1 my-0'>Topic or {location.state?.title}</p>
                </div>
                <div class="input-group">
                  <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} className="form-control" placeholder="Enter Text" onKeyDown={async (e) => {
                    if (e.key === 'Enter') { 
                      callAIModel()
                     }
                  }} />
                </div> */}
                
                {location?.state?.isForEditer ?
                // 1 Input Free Play
                <> 
                <textarea
                placeholder="Look at the teacher tips below for some ideas, use them to help you write a prompt"
                value={text}
                className="form-control"
                onChange={handleTextChange}
                />
                </>

                // one Input of Age
                :
                location?.state?.oneInput ?
                <>
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.agelabel}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input3}
                    onChange={(e) => set3(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputAgePlaceH}
                  />
                </div>
                </>

              // Classromm(Assesment Rubrics)/Primary(Spellings) Card no. 3
                :
                location?.state?.threeInput ?
                  <>
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.labletopics}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input2}
                    onChange={(e) => set2(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputPlaceH}
                  />
                </div>
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.agelabel}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input3}
                    onChange={(e) => set3(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputAgePlaceH}
                  />
                </div>

                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.input3title}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input4}
                    onChange={(e) => set4(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.input3PlaceH}
                  />
                </div>
                </>

                // Communication tools  Card no. 3 Assembly Ideas
                :
                location?.state?.assemblyIdeas ?
                  <>
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.labletopics}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input2}
                    onChange={(e) => set2(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputPlaceH}
                  />
                </div>
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.contentlabel}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input3}
                    onChange={(e) => set3(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputcontentPlaceH}
                  />
                </div>

                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.agelabel}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input4}
                    onChange={(e) => set4(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputAgePlaceH}
                  />
                </div>
                </>
                // 3 inputs of Communication tools / Card No. 1 Parent Emails                  
                :
                location?.state?.parentEmail ?
                  <>
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.labletopics}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input2}
                    onChange={(e) => set2(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputPlaceH}
                  />
                </div>
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.agelabel}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input3}
                    onChange={(e) => set3(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputAgePlaceH}
                  />
                </div>

                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.toneLable}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input4}
                    onChange={(e) => set4(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputTone}
                  />
                </div>
                </>

                // 4 inputs of Communication tools / Card No. 4 Parents Evening                  
                :
                location?.state?.parentsEvening ?
                  <>
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.meetinglable}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input2}
                    onChange={(e) => set2(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputmeetingPlaceH}
                  />
                </div>
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.descriptionLable}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input3}
                    onChange={(e) => set3(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputDescPlaceH}
                  />
                </div>
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.lenghtLable}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input4}
                    onChange={(e) => set4(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputLenghtPlaceH}
                  />
                </div>

                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.agelabel}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input5}
                    onChange={(e) => set5(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputAgePlaceH}
                  />
                </div>
                </>

                // 4 inputs of Communication tools / Card No. 4 School Newsletter                 
                :
                location?.state?.schoolNewsLetter ?
                  <>
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.targetLable}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input2}
                    onChange={(e) => set2(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputtargetPlaceH}
                  />
                </div>
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.descLable}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input3}
                    onChange={(e) => set3(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputdescPlaceH}
                  />
                </div>
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.toneLable}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input4}
                    onChange={(e) => set4(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputTonePlaceH}
                  />
                </div>

                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.wordlabel}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input5}
                    onChange={(e) => set5(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputwordPlaceH}
                  />
                </div>
                </>

                  // 5 inputs of Classroom(create and Play) tools / Card No. 8 Social Media Post
                :
                location?.state?.socialMediaPost ?
                  <>
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.targetlable}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={topicsInput}
                    minHeight="100px"
                    onChange={(e) => setTopicInput(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputtargetPlaceH}
                  />
                </div>
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.desclable}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input5}
                    onChange={(e) => set5(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputdescPlaceH}
                  />
                </div>

                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.tonelable}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input6}
                    onChange={(e) => set6(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputTonePlaceH}
                  />
                </div>
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.socialLable}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input7}
                    onChange={(e) => set7(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputSocialPlaceH}
                  />
                </div>

                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.wordlabel}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"value={input8}
                    onChange={(e) => set8(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputwordPlaceH}
                  />
                </div>
                </>

                // 6 inputs of Classroom(create and Play) tools / Card No. 7 Report Writing
                :
                location?.state?.reportWriting ?
                  <>
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.labletopics}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={topicsInput}
                    onChange={(e) => setTopicInput(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputPlaceH}
                  />
                </div>
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.agelabel}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input5}
                    onChange={(e) => set5(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputAgePlaceH}
                  />
                </div>

                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.input3label}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input6}
                    onChange={(e) => set6(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.input3PlaceH}
                  />
                </div>
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.input4label}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input7}
                    onChange={(e) => set7(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.input4PlaceH}
                  />
                </div>

                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.input5label}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"value={input8}
                    onChange={(e) => set8(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.input5PlaceH}
                  />
                </div>
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.input6label}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input9}
                    onChange={(e) => set9(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.input6PlaceH}
                  />
                </div>
                </> 
                // 6 inputs of Communication tools / Card No. 2 Subject Report
                :
                location?.state?.subjectReport ?
                  <>
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.labletopics}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={topicsInput}
                    onChange={(e) => setTopicInput(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputPlaceH}
                  />
                </div>
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.agelabel}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input5}
                    onChange={(e) => set5(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputAgePlaceH}
                  />
                </div>

                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.areastrenghtLabel}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input6}
                    onChange={(e) => set6(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputareastrenghtPlaceH}
                  />
                </div>
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.areaimprlabel}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input7}
                    onChange={(e) => set7(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputareaimprPlaceH}
                  />
                </div>

                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.audienceLabel}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"value={input8}
                    onChange={(e) => set8(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputaudiencePlaceH}
                  />
                </div>
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.wordcountLabel}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={input9}
                    onChange={(e) => set9(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputwordcountPlaceH}
                  />
                </div>
                </> 
                // 2 input of all cards who have consist two input 
                :
                <>
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.labletopics}</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={topicsInput}
                    onChange={(e) => setTopicInput(e.target.value)}
                    className="form-control"
                    placeholder={location?.state?.inputPlaceH}
                  />
                </div>
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">{location?.state?.agelabel}</p>
                </div>
                <div class="input-group">
                  <input
                    value={studentAge}
                    onChange={(e) => setstudentAge(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder={location?.state?.inputAgePlaceH}
                  />
                </div>
                </>
                  }
                <div>
                  {loading ? (
                    <button className="btn mt-3 mb-4 w-100 fw-bold" style={{backgroundColor: '#036CFF', color: '#fff'}}>
                      Generate{""}
                      <img
                        src={getFileSrcFromPublicimg("loader.svg")}
                        alt="aboutimg"
                        style={{ height: "21px" }}
                      />
                    </button>
                  ) : (
                    <button
                      onClick={callAIModel}
                      className="btn mt-3 mb-4 w-100 fw-bold" style={{backgroundColor: '#036CFF', color: '#fff'}}
                    >
                      Generate
                    </button>
                  )}   
                  <h4>Teacher Tips: </h4>
                  <div dangerouslySetInnerHTML={{__html: location.state?.Notes_content}}></div>
                </div>
                <div>
                  {conversation.map((message, index) => (
                    <div key={index}>{message}</div>
                  ))}
                </div>
              </div>
              <div className="col-md-6 border-start border-gray border-3 ">
                 <PDFGenerator
                      content={result}
                      title={""}
                    />
                {location.state.isPdf ? (
                  <>
                    <ImFilesEmpty
                      onClick={savePdf}
                      className="fs-2 pb-1 imFilesEmptycolor"
                    />
                    <WywisingEditor onChange={(event, editor) => {
                    const data = editor.getData();
                    setEditorContent(data);                
                    console.log({ event, editor, data }, 'real data');
                  }} style={{ backgroundColor: 'yellow', color: '#036CFF'}} content={result.replace(/\n+/g, "<br>")} />
                  </>
                ) : (
                  //  <>
                  //   {result && <><PDFGenerator style={{cursor:"pointer"}} content={result} title={""} />
                  //   <ImFilesEmpty style={{cursor:"pointer", float:"right"}} onClick={savePdf} className='fs-2 text-info pb-2 '/></>}
                  //     <div className=' p-2 w-100 min-vh-100 bg-light d-flex align-items-center justify-content-center mb-4 downloadpdfready'>
                  //      {result?
                  //       <>
                  //        <WywisingEditor content={result.replace(/\n+/g, "<br>")} />
                  //       </>
                  //      :
                  //        <div className='justify-content-center text-center'>
                  //         <p className='fst-italic text-secondary'>Your lesson plan will appear here, once it<br/>
                  //            is available for download.
                  //         </p>
                  //         {result?<PDFGenerator content={result} title={""}/>
                  //         :<ImDownload className='fs-2 text-info endownload'/>}
                  //        </div>}
                  //     </div>
                  //      </>:
                  <WywisingEditor onChange={(event, editor) => {
                    const data = editor.getData();
                    setEditorContent(data);
                    console.log({ event, editor, data }, 'real data');
                  }} style={{ backgroundColor: 'yellow', color: '#036CFF'}} content={result.replace(/\n+/g, "<br>")} />
                )}
              </div>
            </div>
          </div>
          </div>
        </section>
      </Dashbaord>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default LessonPlan;
