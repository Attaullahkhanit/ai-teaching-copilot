import React, { useState } from "react";
import Dashbaord from "../Dashboard/Dashboard";
import CreateAndPlayCards from "../../../Components/CreateAndPlayCards/CreateAndPlayCards";

function CreateAndPlay() {
  return (
    <>
      <Dashbaord>
        <div className="min-vh-100" style={{ backgroundColor: "#f0f8ff" }}>
          <div>
            <h4 className=" text-white fw-bold py-2 px-3" style={{backgroundColor: '#036CFF'}}>Classroom</h4>
          </div>
          <CreateAndPlayCards />
        </div>
      </Dashbaord>
    </>
  );
}

export default CreateAndPlay;
