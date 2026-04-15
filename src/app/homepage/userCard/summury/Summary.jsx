import React from 'react';

const Summary = () => {
    return (
      <div className="mt-10 w-[80%] mx-auto">
        <div className="grid grid-cols-4 gap-2 ">
          <div className="rounded-2xl border border-gray-100 text-center space-y-2 p-8 bg-white">
            <h2 className="text-[32px] font-semibold">10</h2>
            <p>Total Friends</p>
          </div>
          <div className="rounded-2xl border border-gray-100 text-center space-y-2 p-8 bg-white">
            <h2 className="text-[32px] font-semibold">3</h2>
            <p>On Track</p>
          </div>
          <div className="rounded-2xl border border-gray-100 text-center space-y-2 p-8 bg-white">
            <h2 className="text-[32px] font-semibold">6</h2>
            <p>Need Attention</p>
          </div>
          <div className="rounded-2xl border border-gray-100 text-center space-y-2 p-8 bg-white">
            <h2 className="text-[32px] font-semibold">12</h2>
            <p>Interactions This Month</p>
          </div>
        </div>
      </div>
    );
};

export default Summary;