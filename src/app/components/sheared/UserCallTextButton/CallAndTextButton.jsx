'use client'
import { UserContext } from "@/app/context/UserContext";
import React, { useContext } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { LuVideo } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";

const CallAndTextButton = ({ user }) => {

  const userData = user;

  const storeUser = useContext(UserContext);
const {handleCall, handleText, handleVideo} = storeUser;
  return (
      <div className="grid grid-cols-3 gap-8">
        <div className=" btn flex-col py-15 text-[#64748B] rounded-md " onClick={() => handleCall(userData)}>
          <div>
            <BiPhoneCall className="w-8 h-8 " />
          </div>
          <p className="text-[18px]">Call</p>
        </div>
        <div className=" btn flex-col py-15 text-[#64748B] rounded-md" onClick={() => handleText(userData)}>
          <div>
            <MdOutlineTextsms className="w-8 h-8 " />
          </div>
          <p className="text-[18px]">Call</p>
        </div>
        <div className=" btn flex-col py-15 text-[#64748B] rounded-md" onClick={() => handleVideo(userData)}>
          <div>
            <LuVideo className="w-8 h-8 " />
          </div>
          <p className="text-[18px]">Call</p>
        </div>
      </div>
  );
};

export default CallAndTextButton;
