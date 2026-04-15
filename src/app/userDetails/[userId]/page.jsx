import Image from "next/image";
import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { LuVideo } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";
import { PiArchiveBold } from "react-icons/pi";
import { RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";

const userData = [
  {
    id: 1,
    name: "Arif Rahman",
    picture: "https://randomuser.me/api/portraits/men/32.jpg",
    email: "arif.rahman@gmail.com",
    days_since_contact: 18,
    status: "overdue",
    tags: ["college", "close friend"],
    bio: "Survived engineering days, still debate life",
    goal: 14,
    next_due_date: "2026-03-28",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    picture: "https://randomuser.me/api/portraits/women/44.jpg",
    email: "nusrat.jahan@yahoo.com",
    days_since_contact: 10,
    status: "almost due",
    tags: ["work", "design"],
    bio: "Creative mind pushing ideas beyond limits",
    goal: 14,
    next_due_date: "2026-04-19",
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    picture: "https://randomuser.me/api/portraits/men/76.jpg",
    email: "tanvir.hasan@gmail.com",
    days_since_contact: 5,
    status: "on-track",
    tags: ["gym", "motivation"],
    bio: "Gym partner never skips tough legdays",
    goal: 10,
    next_due_date: "2026-04-20",
  },
  {
    id: 4,
    name: "Mehjabin Sultana",
    picture: "https://randomuser.me/api/portraits/women/68.jpg",
    email: "mehjabin.sultana@gmail.com",
    days_since_contact: 21,
    status: "overdue",
    tags: ["school", "old friend"],
    bio: "School memories filled with laughter always",
    goal: 14,
    next_due_date: "2026-03-25",
  },
  {
    id: 5,
    name: "Rakib Ahmed",
    picture: "https://randomuser.me/api/portraits/men/55.jpg",
    email: "rakib.ahmed@outlook.com",
    days_since_contact: 12,
    status: "almost due",
    tags: ["freelance", "developer"],
    bio: "Build projects together share client struggles",
    goal: 14,
    next_due_date: "2026-04-17",
  },
  {
    id: 6,
    name: "Farzana Kabir",
    picture: "https://randomuser.me/api/portraits/women/25.jpg",
    email: "farzana.kabir@gmail.com",
    days_since_contact: 3,
    status: "on-track",
    tags: ["family friend"],
    bio: "Family friend always checks first regularly",
    goal: 7,
    next_due_date: "2026-04-19",
  },
  {
    id: 7,
    name: "Shakil Mahmud",
    picture: "https://randomuser.me/api/portraits/men/41.jpg",
    email: "shakil.mahmud@gmail.com",
    days_since_contact: 15,
    status: "overdue",
    tags: ["startup", "business"],
    bio: "Always chasing ideas building future startups",
    goal: 10,
    next_due_date: "2026-04-10",
  },
  {
    id: 8,
    name: "Tania Akter",
    picture: "https://randomuser.me/api/portraits/women/12.jpg",
    email: "tania.akter@gmail.com",
    days_since_contact: 8,
    status: "on-track",
    tags: ["university", "study buddy"],
    bio: "Study nights shared notes and stress",
    goal: 14,
    next_due_date: "2026-04-21",
  },
  {
    id: 9,
    name: "Imran Chowdhury",
    picture: "https://randomuser.me/api/portraits/men/29.jpg",
    email: "imran.chowdhury@gmail.com",
    days_since_contact: 13,
    status: "almost due",
    tags: ["cricket", "childhood"],
    bio: "Childhood cricket rivalry turned lifelong friendship",
    goal: 14,
    next_due_date: "2026-04-18",
  },
  {
    id: 10,
    name: "Sadia Noor",
    picture: "https://randomuser.me/api/portraits/women/36.jpg",
    email: "sadia.noor@gmail.com",
    days_since_contact: 2,
    status: "on-track",
    tags: ["content creator", "creative"],
    bio: "Creative content ideas inspire me daily",
    goal: 7,
    next_due_date: "2026-04-20",
  },
  {
    id: 11,
    name: "Mahfuz Karim",
    picture: "https://randomuser.me/api/portraits/men/63.jpg",
    email: "mahfuz.karim@yahoo.com",
    days_since_contact: 20,
    status: "overdue",
    tags: ["mentor", "career"],
    bio: "Mentor guiding my early career journey",
    goal: 14,
    next_due_date: "2026-03-30",
  },
];

const UserDetails = async ({ params }) => {
  const { userId } = await params;
  const user = userData.find((item) => item.id === parseInt(userId));
    const { name, picture, days_since_contact, tags, status, id, bio, email, goal, next_due_date } = user;

  console.log(user);

  return (
    <div className="py-20 grid grid-cols-3 gap-4 w-[80%] mx-auto ">
      {/* left side */}
      <div className="col-span-1  space-y-3">
        <div className="flex flex-col justify-center items-center border border-gray-100  bg-white rounded-md space-y-2 p-10 shadow-sm">
          <Image className="rounded-full" src={picture} alt="user Picture" width={70} height={70}></Image>
          <h2 className="text-[20px] font-semibold">{name}</h2>
          <p>{days_since_contact}d ago</p>
          <div className="badge badge-secondary rounded-full p-4">{status}</div>
          <ul>
            {tags.map((tag, index) => (
              <li className="badge bg-green-300 text-gray-600 mr-2 rounded-full p-4" key={index}>
                {tag}
              </li>
            ))}
          </ul>
          <p>
            <i className="text-[#64748B] text-[20px] font-medium">{`"${bio}"`}</i>
          </p>
          <p className="text-[#64748B]">Preferred: {email}</p>
        </div>
        <div className="flex justify-center items-center  bg-white rounded-sm p-5 border border-gray-100  ">
          <RiNotificationSnoozeLine className="h-7 w-7 mr-2" /> <p className="font-medium text-[18px]"> Snooze 2 Weeks</p>
        </div>
        <div className="flex justify-center items-center  bg-white rounded-sm p-5 border border-gray-100  ">
          <PiArchiveBold className="h-7 w-7 mr-2" /> <p className="font-medium text-[18px]"> Archive</p>
        </div>
        <div className="flex justify-center items-center  bg-white rounded-sm p-5 border border-gray-100   text-red-500">
          <RiDeleteBinLine className="h-7 w-7 mr-2 " /> <p className="font-medium text-[18px]"> Delete</p>
        </div>
      </div>
      {/* right side */}
      <div className="col-span-2  rounded-xl">
        <div className="">
          <div className=" grid grid-cols-3 gap-8">
            <div className="bg-white rounded-md p-5 border border-gray-100 flex flex-col justify-center items-center shadow-sm font-semibold text-[30px] text-[#414e61]">
              {days_since_contact} <p className="font-normal text-[#64748B] text-[18px]">Days Since Contact</p>
            </div>
            <div className="bg-white rounded-md p-5 border border-gray-100 flex flex-col justify-center items-center shadow-sm font-semibold text-[30px] text-[#414e61]">
              {goal} <p className="font-normal text-[#64748B] text-[18px]">Goal (Days)</p>
            </div>
            <div className="bg-white rounded-md p-5 border border-gray-100 flex flex-col justify-center items-center shadow-sm font-semibold text-[30px] text-[#414e61]">
              {next_due_date} <p className="font-normal text-[#64748B] text-[18px]">Next Due</p>
            </div>
          </div>
          <div className=" p-7 flex justify-between bg-white rounded-md mt-8 shadow-sm">
            <div className="space-y-2">
              <h3 className="font-medium text-[20px] text-[#244D3F] ">Relationship Goal</h3>
              <h4 className="text-[18px]">
                Connect Every <b>30 days</b>{" "}
              </h4>
            </div>
            <div>
              <a className="btn">Edit</a>
            </div>
          </div>
          <div className=" p-8  bg-white rounded-md mt-8 shadow-sm">
            <h1 className="font-medium text-[20px] text-[#244D3F] pb-4">Quick Check-In</h1>
            <div>
              <div className="grid grid-cols-3 gap-8">
                <div className=" btn flex-col py-15 text-[#64748B] rounded-md">
                  <div>
                    <BiPhoneCall className="w-8 h-8 " />
                  </div>
                  <p className="text-[18px]">Call</p>
                </div>
                <div className=" btn flex-col py-15 text-[#64748B] rounded-md">
                  <div>
                    <MdOutlineTextsms className="w-8 h-8 " />
                  </div>
                  <p className="text-[18px]">Call</p>
                </div>
                <div className=" btn flex-col py-15 text-[#64748B] rounded-md">
                  <div>
                    <LuVideo className="w-8 h-8 " />
                  </div>
                  <p className="text-[18px]">Call</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
