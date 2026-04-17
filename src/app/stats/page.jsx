"use client";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useContext } from "react";
import { UserContext } from "@/app/context/UserContext";

const COLORS = ["#1f4d3d", "#7c3aed", "#2f855a"];

export default function InteractionChart() {
  const { buttonEvent } = useContext(UserContext);

  const callCount = buttonEvent.filter((item) => item.type === "call").length;
  const textCount = buttonEvent.filter((item) => item.type === "text").length;
  const videoCount = buttonEvent.filter((item) => item.type === "video").length;

  const data = [
    { name: "Call", value: callCount },
    { name: "Text", value: textCount },
    { name: "Video", value: videoCount },
  ];

  return (
    <div className=" w-[80%] mx-auto m-4">
      <h2 className="text-5xl font-bold mb-4">Friendship Analytics</h2>
      <div className="mt-10 bg-white rounded-sm p-5 shadow-sm">
        <p className="text-[#244D3F] font-medium text-xl">By Interaction Type</p>
        <div className="flex flex-col items-center justify-center ">
          <PieChart width={250} height={250}>
            <Pie data={data} cx="50%" cy="50%" innerRadius={70} outerRadius={100} paddingAngle={6} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>

          <div className="flex gap-4 mt-4">
            <p>📞 Call: {callCount}</p>
            <p>💬 Text: {textCount}</p>
            <p>🎥 Video: {videoCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
