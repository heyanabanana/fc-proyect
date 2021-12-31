import React from "react";
import Usermenu from "../components/pure/UserMenu";
import Title from "../components/pure/Title";
import Candidatetable from "../components/CandidateTable";

const Userdashboard = () => {
  return (
    <div className="bg-gray-light h-fit h-full p-10">
      <span className="flex flex-col md:flex-row md:items-center items-right justify-between">
        <Title />
        <Usermenu />
      </span>
      <span className="flex justify-center items-center mt-5">
        <Candidatetable />
      </span>
    </div>
  );
};

export default Userdashboard;
