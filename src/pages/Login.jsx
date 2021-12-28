import React from "react";
import Loginform from "../components/LoginForm";
import LoginImage from "../assets/images/login-image.jpg";
import Title from "../components/pure/Title";
import Footer from "../components/pure/Footer";

const Login = () => {
  return (
    <div className="flex justify-between m-0 w-screen h-screen">
      <span className=" flex flex-col justify-between min-w-max h-full w-full p-20	xl:w-1/4 xl:p-0 xl:pl-20 xl:pb-20 ">
        <span></span>
        <span>
          <Title />
          <Loginform />
        </span>
        <Footer />
      </span>
      <img
        src={LoginImage}
        alt="Open BootCamp"
        className="pl-20 object-center object-cover hidden xl:inline w-3/4"
      />
    </div>
  );
};

export default Login;
