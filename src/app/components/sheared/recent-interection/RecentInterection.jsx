"use client";
import { UserContext } from "@/app/context/UserContext";
import React, { useContext, useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { LuVideo } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";

const RecentInterection = () => {
  const { buttonEvent } = useContext(UserContext);

  // ✅ Step 2 (needed before 3)
  const [filter, setFilter] = useState("all");

  // ✅ Step 3
  const filteredData = filter === "all" ? buttonEvent : buttonEvent.filter((item) => item.type === filter);

  return (
    <div>
      {filteredData.map((item, idx) => (
        <div key={idx} className="flex justify-between p-4 border-b">
          <div className="flex gap-3 items-center">
            {item.type === "call" && <BiPhoneCall className="text-2xl" />}
            {item.type === "text" && <MdOutlineTextsms className="text-2xl" />}
            {item.type === "video" && <LuVideo className="text-2xl" />}

            <div>
              <h3 className="font-semibold capitalize ">{item.type}</h3>
              <p className="text-gray-500">{item.name}</p>
            </div>
          </div>
          <div>
            {new Date(item.time).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentInterection;
