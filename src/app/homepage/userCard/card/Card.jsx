import Image from 'next/image';
import Link from 'next/link';
import React, { use } from 'react';

const Card = ({ user }) => {

    const { name, picture, days_since_contact, tags, status, id } = user;
    const priorityColor =
      status === "Overdue"
        ? "text-white bg-[#EF4444] border-none"
        : status === "Almost due"
          ? "text-white bg-[#EFAD44] border-none"
          : status === "On-track"
            ? "text-white bg-[#244D3F] border-none"
            : "";
  return (
    <Link href={`/userDetails/${id}`} className="flex flex-col justify-center items-center bg-white border border-gray-100 p-6 rounded-xl space-y-2 hover:-translate-y-2 hover:drop-shadow-xl hover:shadow-green-800 duration-600">
      <Image className="rounded-full" src={picture} alt="user Picture" width={50} height={50}></Image>
      <h2 className="text-[20px] font-semibold">{name}</h2>
      <p>{days_since_contact}d ago</p>
      <ul className='flex md:flex-col  xl:flex-row justify-center items-center'>
        {tags.map((tag, index) => (
          <li className="badge md:mt-2 bg-[#CBFADB] text-[12px] font-medium text-green-700 mr-2 rounded-full p-2" key={index}>
            {tag}
          </li>
        ))}
      </ul>
      <div className={` badge badge-secondary rounded-full p-4 ${priorityColor} `}>{status}</div>
    </Link>
  );
};

export default Card;