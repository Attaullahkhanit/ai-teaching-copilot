import React, { useEffect, useState } from "react";
import "./Downloads.css";
import Dashbaord from "../Dashboard/Dashboard";
import { ImHistory } from "react-icons/im";
import { MdOutlineAdd } from "react-icons/md";
import DownloadCard from "../../../Components/DownloadCard/DownloadCard";
import DocumentFileCard from "../../../Components/DownloadCard/DocumentFileCard";
import DocumentFileCard2 from "../../../Components/DownloadCard/DocumentFileCard2";
import DocumentFileCard3 from "../../../Components/DownloadCard/DocumentFileCard3";
import PDFGenerator from "../../../Components/pdf/generate-pdf";
import { baseURL } from "../../../config";

function Downloads() { 
  const [records, setRecords]= useState([])
  let loginResponse = localStorage.getItem("loginResponse");
  loginResponse = JSON.parse(loginResponse);
  const upddep= localStorage.getItem("updateDep")

    useEffect(() => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        user_id: loginResponse.userDetail._id,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(baseURL+"user_content", requestOptions)
        .then((response) => response.json())
        .then((result) => setRecords(result, 'myresultdelete data'))
        .catch((error) => console.log("error", error));
    }, [upddep]); 
    const downloadcarditem1 = ()=>{
      console.log(records, 'records') 
    }
  return (
    <>
      <Dashbaord>
        <section className="min-vh-100" style={{ backgroundColor: "#f0f8ff" }}>
                <h4 className=" text-white fw-bold py-2 px-3 mt-0" style={{backgroundColor: '#036CFF'}}>Downloads</h4>                
                <p className="mx-3">
                  Easily review, download and delete files as needed.<br/>
                  The download section offers convenient access to your saved lesson plans and assessment rubrics.
                </p>
          <div className="container-fluid">
              {/* <div className='ml-auto'>
                <button type='button' className='btn border-primary py-0 rounded-5 border border-2 text-primary fs-5'><MdOutlineAdd className='fs-3 fw-bolder text-primary pb-1' /><span className='text-dark fw-bold px-1'>Request a New Tool</span></button>
              </div> */}
            {/* <div className="row my-3">
              <div className="py-3 text-secondary" style={{ fontSize: "14px" }}>
                Folders
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch">
                <DownloadCard downloadcarddata={records} />
              </div>
               
            </div> */}
              <div className="row">
                <div className="py-3 text-secondary" style={{ fontSize: "14px" }}>
                  Recent Creations
                </div>
              </div>
            <div className="row my-3">
              <>
              {/* <div className='col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch'>
                <DocumentFileCard />
              </div> */}
              {records?.length >0?
              records?.map((record)=>{
                console.log(record, 'record')
              return (<div className="col-lg-3 col-md-3 col-sm-6 d-flex align-items-stretch my-1">
                   <PDFGenerator style={{cursor:"pointer"}} created_at={record?.created_at} content={record?.description} fileid={record?._id} title={record?.boxname}  isItDownLoadLst={true} />
              </div>)
              }):
              <h3 style={{textAlign:"center"}}>Record not found</h3>
              }
              </>
            </div>
          </div>
        </section>
      </Dashbaord>
    </>
  );
}

export default Downloads;
