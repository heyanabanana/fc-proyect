import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "wouter";

const Loginform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <label className="text-black font-semibold mb-2 mt-5" htmlFor="email">
        Email
      </label>
      <input
        type="text"
        {...register("email", { required: true })}
        className="m-1 bg-gray-light p-3 rounded-lg focus:outline-primary border-none "
        placeholder="Introduce tu correo"
      />
      {errors.email && <span className="text-red">El email es necesario</span>}
      <label htmlFor="password" className="text-black font-semibold mb-2 mt-5 ">
        Contraseña
      </label>

      <input
        type="password"
        {...register("password", { required: true })}
        className="m-1 bg-gray-light p-3 rounded-lg focus:outline-primary  border-none"
        placeholder="Introduce tu contraseña"
      />
      {errors.password && (
        <span className="text-red">La contraseña es necesaria</span>
      )}
      <span className="mt-5 mb-8 flex items-center justify-between">
        <span className="flex items-center">
          <input
            type="checkbox"
            {...register("remember")}
            className="form-check-input appearance-none h-3 w-3 border border-gray-medium rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            placeholder="Introduce tu contraseña"
          />
          <label htmlFor="remember" className="text-sm text-black">
            Recuérdame
          </label>
        </span>
        <Link to="/dashboard">
          <span className="cursor-pointer text-sm text-primary font-semibold">
            He olvidado la contraseña
          </span>
        </Link>
      </span>
      <Link to="/dashboard">
        <button className="bg-primary p-4 text-white font-semibold rounded-xl">
          Iniciar Sesión
        </button>
      </Link>
    </form>
  );
};

export default Loginform;
