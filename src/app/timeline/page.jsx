"use client";
import { UserContext } from "@/app/context/UserContext";
import React, { useContext, useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { LuVideo } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";



const RecentInterection = () => {
  const { buttonEvent } = useContext(UserContext);

  const [filter, setFilter] = useState("all");

  const filteredData = filter === "all" ? buttonEvent : buttonEvent.filter((item) => item.type.toLowerCase() === filter.toLowerCase());

  return (
    <div className=" w-[80%] mx-auto mt-10">
      <h2 className="font-bold text-5xl">Timeline</h2>

      <select value={filter} onChange={(e) => setFilter(e.target.value)} className="select select-success mt-4">
        <option value="all">All</option>
        <option value="call">Call</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>

      {filteredData.map((item, ind) => (
        <div key={ind} className=" w-full p-4 ">
          <div className="flex gap-3 items-center bg-white rounded-lg p-4 border border-green-100">
            {item.type === "call" && <BiPhoneCall className="text-3xl" />}
            {item.type === "text" && <MdOutlineTextsms className="text-3xl" />}
            {item.type === "video" && <LuVideo className="text-3xl" />}

            <div className="space-y-1 pl-4">
              <h3 className="font-semibold capitalize ">
                {item.type} <span className="font-normal text-gray-600 text-[16px]">with {item.name}</span>
              </h3>
              <p className="text-gray-500">
                {new Date(item.time).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentInterection;
