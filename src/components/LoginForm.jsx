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
        className="m-1 bg-gray-light p-3 rounded-lg"
        placeholder="Introduce tu correo"
      />
      {errors.email && <span className="text-red">El email es necesario</span>}
      <label htmlFor="password" className="text-black font-semibold mb-2 mt-5">
        Contraseña
      </label>

      <input
        type="password"
        {...register("password", { required: true })}
        className="m-1 bg-gray-light p-3 rounded-lg"
        placeholder="Introduce tu contraseña"
      />
      {errors.password && (
        <span className="text-red">La contraseña es necesaria</span>
      )}
      <span className="mt-5 mb-8">
        <input
          type="checkbox"
          {...register("remember")}
          className="m-1 mr-3"
          placeholder="Introduce tu contraseña"
        />
        <label htmlFor="remember" className="text-sm text-black mb-2 mt-5">
          Recuérdame
        </label>
      </span>
      <Link to="/dashboard">
        <button className="bg-primary p-4 text-white font-semibold rounded-lg">
          Iniciar Sesión
        </button>
      </Link>
    </form>
  );
};

export default Loginform;
