import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <span className="loading loading-spinner text-accent scale-200 loading-xl"></span>
    </div>
  );
};

export default Spinner;
