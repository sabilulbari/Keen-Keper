"use client";
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [buttonEvent, setbuttonEvent] = useState([]);
  const [text, setText] = useState([]);
  const [video, setVideo] = useState([]);

  const handleCall = (callData) => {
    toast.success(`Call with ${callData.name}`);
    setbuttonEvent([...buttonEvent, { ...callData, type: "call", time: new Date().toLocaleString() }]);
  };

  const handleText = (textData) => {
    toast.success(`Text with ${textData.name}`);
    setbuttonEvent([...buttonEvent, { ...textData, type: "text", time: new Date().toLocaleString() }]);
  };

  const handleVideo = (videoData) => {
    toast.success(`Video Call with ${videoData.name}`);
    setbuttonEvent([...buttonEvent, { ...videoData, type: "video", time: new Date().toLocaleString(), id: Date.now() }]);
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
