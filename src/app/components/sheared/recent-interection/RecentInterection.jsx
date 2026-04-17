'use client'
import { UserContext } from "@/app/context/UserContext";
import { div } from "framer-motion/client";
import React, { useContext } from "react";
import { MdOutlineTextsms } from "react-icons/md";

const RecentInterection = () => {
    const showHistory = useContext(UserContext);

    const { buttonEvent } = showHistory;
     
    
  return (
    <div>
      {buttonEvent.map((item) => (
        <div key={item.id} className="flex justify-between p-4 items-center border-b border-gray-200">
          <div className="flex gap-3 items-center">
            <MdOutlineTextsms className="text-[40px]" />
            <div>
              <h3 className="font-medium text-[20px] text-[#3c4756]">Text</h3>
              <p className="font-medium text-[16px] text-[#64748B]">Ask for carer advice</p>
            </div>
          </div>
          <div className="font-medium text-[16px] text-[#64748B]">Jan 28,2026</div>
        </div>
      ))}
    </div>
  );
};

export default RecentInterection;
