import React from "react";

const Summary = () => {
  const stats = [
    { value: 10, label: "Total Friends" },
    { value: 3, label: "On Track" },
    { value: 6, label: "Need Attention" },
    { value: 12, label: "Interactions This Month" },
  ];

  return (
    <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <div key={index} className="rounded-2xl border border-gray-100 text-center space-y-2 p-6 sm:p-8 bg-white shadow-sm hover:shadow-md transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#244D3F]">{item.value}</h2>
            <p className="text-sm sm:text-base text-gray-500">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;
