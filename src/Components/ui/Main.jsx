import React from "react";

const Main = ({ children }) => {
  return (
    <div className=" bg-gray-100 p-4 pt-14 sm:ml-64 flex gap-2 flex-col lg:flex-row translate-all duration-300 mt-14 h-screen ">
      {children}
    </div>
  );
};

export default Main;
