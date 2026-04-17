"use client";
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [buttonEvent, setbuttonEvent] = useState([]);
  const [text, setText] = useState([]);
  const [video, setVideo] = useState([]);

  const handleCall = (callData) => {
    toast.success(`Call with ${callData.name} `);
     setbuttonEvent([...buttonEvent, callData]);
    
  };
  const handleText = (textData) => {
    toast.success(`Text with ${textData.name} `);
     setbuttonEvent([...buttonEvent, textData]);
    
  };
  const handleVideo = (videoData) => {
    toast.success(`Video Call with ${videoData.name} `);
     setbuttonEvent([...buttonEvent, videoData]);
    // const isExist = call.find((item) => item.id === userData.id);

    // if (isExist) {
    //   toast.error("Alredy called");
    // } else {
    //   toast.success(`Call with ${userData.name} `);
    //   setCall([...call, userData]);
    // }
  };

  const data = {
    buttonEvent,
    setbuttonEvent,
    handleCall,
    handleText,
    handleVideo,
  };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserProvider;
