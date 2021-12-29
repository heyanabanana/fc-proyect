import React from "react";
import Table from "./pure/Table";

const getData = () => [
  {
    fullname: "Álvaro Sánchez Monteagudo",
    city: "Valencia",
    country: "España",
    phone: "689254865",
    email: "smonteagudo@gmail.com",
    skills: [
      {
        id: 1,
        name: "HTML&CSS",
      },
      {
        id: 2,
        name: "ANGULAR",
      },
    ],
  },
  {
    fullname: "Amparo Herrera Climent",
    city: "Sevilla",
    country: "España",
    phone: "689254865",
    email: "hcliment@gmail.com",
    skills: [
      {
        id: 1,
        name: "ANGULAR",
      },
      {
        id: 2,
        name: "SPRING BOOT",
      },
      {
        id: 3,
        name: "HIBERNATE",
      },
    ],
  },
  {
    fullname: "Ana Gutierrez Lozano",
    city: "Valencia",
    country: "España",
    phone: "925658765",
    email: "glozano@gmail.com",
    skills: [
      {
        id: 1,
        name: "ANGULAR",
      },
      {
        id: 2,
        name: "REACT",
      },
    ],
  },
  {
    fullname: "Carlos Yuste Guerrero",
    city: "Oviedo",
    country: "España",
    phone: "697829565",
    email: "yguerrero@gmail.com",
    skills: [
      {
        id: 1,
        name: "FLUTTER",
      },
      {
        id: 2,
        name: "REACT",
      },
    ],
  },
  {
    fullname: "Álvaro Sánchez Monteagudo",
    city: "Valencia",
    country: "España",
    phone: "689254865",
    email: "smonteagudo@gmail.com",
    skills: [
      {
        id: 1,
        name: "HTML&CSS",
      },
      {
        id: 2,
        name: "ANGULAR",
      },
    ],
  },
  {
    fullname: "Amparo Herrera Climent",
    city: "Sevilla",
    country: "España",
    phone: "689254865",
    email: "hcliment@gmail.com",
    skills: [
      {
        id: 1,
        name: "ANGULAR",
      },
      {
        id: 2,
        name: "SPRING BOOT",
      },
      {
        id: 3,
        name: "HIBERNATE",
      },
    ],
  },
  {
    fullname: "Ana Gutierrez Lozano",
    city: "Valencia",
    country: "España",
    phone: "925658765",
    email: "glozano@gmail.com",
    skills: [
      {
        id: 1,
        name: "ANGULAR",
      },
      {
        id: 2,
        name: "REACT",
      },
    ],
  },
  {
    fullname: "Carlos Yuste Guerrero",
    city: "Oviedo",
    country: "España",
    phone: "697829565",
    email: "yguerrero@gmail.com",
    skills: [
      {
        id: 1,
        name: "FLUTTER",
      },
      {
        id: 2,
        name: "REACT",
      },
    ],
  },
];

const Candidatetable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "fullname",
      },
      {
        Header: "Ciudad",
        accessor: "city",
      },
      {
        Header: "País",
        accessor: "country",
      },
      {
        Header: "Teléfono",
        accessor: "phone",
      },
      {
        Header: "Correo electrónico",
        accessor: "email",
      },
      {
        Header: "Etiquetas",
        accessor: "skills.name",
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);
  console.log(getData);
  return (
    <>
      <h1>Hello React!</h1>
      <div>
        <Table columns={columns} data={data} />
      </div>
    </>
  );
};

export default Candidatetable;
