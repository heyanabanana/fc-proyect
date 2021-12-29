import React from "react";
import Usermenu from "../components/pure/UserMenu";
import Title from "../components/pure/Title";
import Candidatetable from "../components/CandidateTable";

const Userdashboard = () => {
  return (
    <div className="bg-gray-light w-screen h-screen p-20">
      <span className="flex items-center justify-between">
        <Title />
        <Usermenu />
      </span>
      <Candidatetable />
    </div>
  );
};

export default Userdashboard;
