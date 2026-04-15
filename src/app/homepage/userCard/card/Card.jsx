import Image from 'next/image';
import React, { use } from 'react';

const Card = ({ user }) => {

    const { name, picture, days_since_contact, tags, status } = user;
  return (
    <div className='flex flex-col justify-center items-center bg-white border border-gray-100 p-6 rounded-xl space-y-2'>
      <Image className='rounded-full' src={picture} alt="user Picture" width={50} height={50}></Image>
      <h2 className='text-[20px] font-semibold'>{name}</h2>
      <p>{days_since_contact}d ago</p>
      <ul>
        {tags.map((tag, index) => (
          <li className="badge bg-green-300 text-gray-600 mr-2 rounded-full p-4" key={index}>
            {tag}
          </li>
        ))}
      </ul>
      <div className="badge badge-secondary rounded-full p-4">{status}</div>
    </div>
  );
};

export default Card;