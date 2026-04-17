import RecentInterection from "@/app/components/sheared/recent-interection/RecentInterection";
import CallAndTextButton from "@/app/components/sheared/UserCallTextButton/CallAndTextButton";
import Image from "next/image";
import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
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
    status: "Overdue",
    tags: ["COLLEGE", "CLOSE FRIEND"],
    bio: "We survived engineering together. Still debates tech vs life over tea.",
    goal: 14,
    next_due_date: "2026-03-28",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    picture: "https://randomuser.me/api/portraits/women/44.jpg",
    email: "nusrat.jahan@yahoo.com",
    days_since_contact: 10,
    status: "Almost due",
    tags: ["WORK", "DESIGN"],
    bio: "Creative soul from my first internship. Always pushing me to think differently.",
    goal: 14,
    next_due_date: "2026-04-19",
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    picture: "https://randomuser.me/api/portraits/men/76.jpg",
    email: "tanvir.hasan@gmail.com",
    days_since_contact: 5,
    status: "On-track",
    tags: ["GYM", "MOTIVATION"],
    bio: "Gym partner who never skips leg day. Keeps me disciplined.",
    goal: 10,
    next_due_date: "2026-04-20",
  },
  {
    id: 4,
    name: "Mehjabin Sultana",
    picture: "https://randomuser.me/api/portraits/women/68.jpg",
    email: "mehjabin.sultana@gmail.com",
    days_since_contact: 21,
    status: "Overdue",
    tags: ["SCHOOL", "OLD FRIEND"],
    bio: "School memories, endless laughter, and random late-night calls.",
    goal: 14,
    next_due_date: "2026-03-25",
  },
  {
    id: 5,
    name: "Rakib Ahmed",
    picture: "https://randomuser.me/api/portraits/men/55.jpg",
    email: "rakib.ahmed@outlook.com",
    days_since_contact: 12,
    status: "Almost due",
    tags: ["FREELANCE", "DEVELOPER"],
    bio: "We collaborate on side projects and share client struggles.",
    goal: 14,
    next_due_date: "2026-04-17",
  },
  {
    id: 6,
    name: "Farzana Kabir",
    picture: "https://randomuser.me/api/portraits/women/25.jpg",
    email: "farzana.kabir@gmail.com",
    days_since_contact: 3,
    status: "On-track",
    tags: ["FAMILY FRIEND"],
    bio: "Family friend who always checks in first. Pure heart.",
    goal: 7,
    next_due_date: "2026-04-19",
  },
  {
    id: 7,
    name: "Shakil Mahmud",
    picture: "https://randomuser.me/api/portraits/men/41.jpg",
    email: "shakil.mahmud@gmail.com",
    days_since_contact: 15,
    status: "Overdue",
    tags: ["STARTUP", "BUSINESS"],
    bio: "Always talking about the next big idea. Hustle mindset 24/7.",
    goal: 10,
    next_due_date: "2026-04-10",
  },
  {
    id: 8,
    name: "Tania Akter",
    picture: "https://randomuser.me/api/portraits/women/12.jpg",
    email: "tania.akter@gmail.com",
    days_since_contact: 8,
    status: "On-track",
    tags: ["UNIVERSITY", "STUDY BUDDY"],
    bio: "We studied countless nights before exams. Still shares notes sometimes.",
    goal: 14,
    next_due_date: "2026-04-21",
  },
  {
    id: 9,
    name: "Imran Chowdhury",
    picture: "https://randomuser.me/api/portraits/men/29.jpg",
    email: "imran.chowdhury@gmail.com",
    days_since_contact: 13,
    status: "Almost due",
    tags: ["CRICKET", "CHILDHOOD"],
    bio: "Childhood cricket rival turned lifelong friend. Still argues over match scores.",
    goal: 14,
    next_due_date: "2026-04-18",
  },
  {
    id: 10,
    name: "Sadia Noor",
    picture: "https://randomuser.me/api/portraits/women/36.jpg",
    email: "sadia.noor@gmail.com",
    days_since_contact: 2,
    status: "On-track",
    tags: ["CONTENT CREATOR", "CREATIVE"],
    bio: "Always experimenting with content ideas. Inspires me to stay creative.",
    goal: 7,
    next_due_date: "2026-04-20",
  },
  {
    id: 11,
    name: "Mahfuz Karim",
    picture: "https://randomuser.me/api/portraits/men/63.jpg",
    email: "mahfuz.karim@yahoo.com",
    days_since_contact: 20,
    status: "Overdue",
    tags: ["MENTOR", "CAREER"],
    bio: "Guided me through my early career decisions. I owe him a proper catch-up.",
    goal: 14,
    next_due_date: "2026-03-30",
  },
  {
    id: 12,
    name: "S. Alom",
    picture: "https://randomuser.me/api/portraits/men/70.jpg",
    email: "mahfuz.karim@yahoo.com",
    days_since_contact: 40,
    status: "Overdue",
    tags: ["BANK ROBBER", "CAREER"],
    bio: "Guided me through my early career decisions. I owe him a proper catch-up.",
    goal: 14,
    next_due_date: "2026-03-30",
  },
];

const UserDetails = async ({ params }) => {
  const { userId } = await params;
  const user = userData.find((item) => item.id === parseInt(userId));
  const { name, picture, days_since_contact, tags, status, id, bio, email, goal, next_due_date } = user;


  return (
    <div className="py-10 md:py-16 lg:py-20 w-full lg:w-[85%] mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
      {/* LEFT SIDE */}
      <div className="space-y-4">
        <div className="flex flex-col justify-center items-center border border-gray-100 bg-white rounded-md space-y-3 p-6 md:p-8 lg:p-10 shadow-sm text-center">
          <Image className="rounded-full" src={picture} alt="user Picture" width={70} height={70} />

          <h2 className="text-lg md:text-xl font-semibold">{name}</h2>

          <p className="text-sm md:text-base">{days_since_contact}d ago</p>

          <div className="badge badge-secondary rounded-full p-3 md:p-4">{status}</div>

          <ul className="flex flex-wrap justify-center gap-2">
            {tags.map((tag, index) => (
              <li key={index} className="badge bg-green-300 text-gray-600 rounded-full px-3 py-2 text-xs md:text-sm">
                {tag}
              </li>
            ))}
          </ul>

          <p className="text-[#64748B] text-sm md:text-base text-center">
            <i>{`"${bio}"`}</i>
          </p>

          <p className="text-[#64748B] text-sm md:text-base">Preferred: {email}</p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex items-center justify-center bg-white rounded-md p-4 md:p-5 border border-gray-100">
          <RiNotificationSnoozeLine className="h-6 w-6 mr-2" />
          <p className="font-medium text-sm md:text-lg">Snooze 2 Weeks</p>
        </div>

        <div className="flex items-center justify-center bg-white rounded-md p-4 md:p-5 border border-gray-100">
          <PiArchiveBold className="h-6 w-6 mr-2" />
          <p className="font-medium text-sm md:text-lg">Archive</p>
        </div>

        <div className="flex items-center justify-center bg-white rounded-md p-4 md:p-5 border border-gray-100 text-red-500">
          <RiDeleteBinLine className="h-6 w-6 mr-2" />
          <p className="font-medium text-sm md:text-lg">Delete</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:col-span-2 space-y-6">
        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <div className="bg-white rounded-md p-4 md:p-5 border border-gray-100 flex flex-col items-center shadow-sm">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#414e61]">{days_since_contact}</h2>
            <p className="text-sm md:text-base text-[#64748B] text-center">Days Since Contact</p>
          </div>

          <div className="bg-white rounded-md p-4 md:p-5 border border-gray-100 flex flex-col items-center shadow-sm">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#414e61]">{goal}</h2>
            <p className="text-sm md:text-base text-[#64748B] text-center">Goal (Days)</p>
          </div>

          <div className="bg-white rounded-md p-4 md:p-5 border border-gray-100 flex flex-col items-center shadow-sm">
            <h2 className="text-sm md:text-base lg:text-lg font-semibold text-[#414e61]">{next_due_date}</h2>
            <p className="text-sm md:text-base text-[#64748B] text-center">Next Due</p>
          </div>
        </div>

        {/* RELATIONSHIP GOAL */}
        <div className="p-5 md:p-6 lg:p-8 flex flex-col sm:flex-row justify-between gap-4 bg-white rounded-md shadow-sm">
          <div className="space-y-2">
            <h3 className="font-medium text-lg md:text-xl text-[#244D3F]">Relationship Goal</h3>
            <h4 className="text-sm md:text-lg">
              Connect Every <b>30 days</b>
            </h4>
          </div>

          <div className="flex sm:items-center">
            <a className="btn btn-sm md:btn-md">Edit</a>
          </div>
        </div>

        {/* QUICK CHECK-IN */}
        <div className="p-5 md:p-6 lg:p-8 bg-white rounded-md shadow-sm space-y-4">
          <h1 className="font-medium text-lg md:text-xl text-[#244D3F]">Quick Check-In</h1>

          <CallAndTextButton user={user} />
        </div>

        {/* RECENT INTERACTIONS */}
        <div className="bg-white p-5 md:p-6 lg:p-8 shadow-md rounded-md space-y-4">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
            <h2 className="font-medium text-lg md:text-xl text-[#244D3F]">Recent Interactions</h2>

            <button className="btn btn-sm md:btn-md font-medium text-[#244D3F]">
              <FaHistory />
              Full History
            </button>
          </div>

          <RecentInterection />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
