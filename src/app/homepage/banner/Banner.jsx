import React from 'react';

const Banner = () => {
    return (
      <div className=" mt-1 rounded-xl">
        <div className=" text-center pt-20 w-[90%] mx-auto">
          <div className="">
            <h1 className="text-5xl text-[#27452f] font-bold">Friends to keep close in your life</h1>
            <p className="py-6 text-[#234e2e]">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.</p>
            <button className="btn bg-[#23482d] text-white ">+ Add a Friend</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;