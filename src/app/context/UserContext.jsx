'use client'
import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const UserContext = createContext();

const UserProvider = ({children}) => {

    const [call, setCall] = useState([])
    const [text, setText ]= useState([])
    const [video, setVideo] = useState([])
      console.log(call, "get call");

    

    const handleCall = (userData) => {

      const isExist = call.find((item)=> item.id === userData.id);

      if(!isExist){
        toast.success(`Call with ${userData.name} `);
        setCall([...call,userData]);
      }
    };

    const data = {
      call,
      setCall,
      handleCall,
    };
    return (<UserContext.Provider value={data}>
        {children}
        </UserContext.Provider>)
};

export default UserProvider;