'use client'
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({children}) => {

    const [call, setCall] = useState([])

    const handleCall = (userData) => {
      console.log("Call button click and get data", userData);
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