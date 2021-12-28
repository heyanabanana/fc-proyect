import React from "react";
import Usermenu from "../components/pure/UserMenu";
import Title from "../components/pure/Title";

const Userdashboard = () => {
  return (
    <div className="bg-gray-light w-screen h-screen p-20">
      <span className="flex items-center justify-between">
        <Title />
        <Usermenu />
      </span>
    </div>
  );
};

export default Userdashboard;
