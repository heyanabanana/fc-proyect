import React from "react";
import Table, {
  TagPill,
  SelectFilter,
  RemoteFilter,
  MobilityFilter,
  TagFilter
} from "./pure/Table";

const getData = () => [
  {
    fullname: "Álvaro Sánchez Monteagudo",
    city: "Valencia",
    country: "España",
    phone: "689254865",
    remote: false,
    mobility: true,
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
    remote: true,
    mobility: false,
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
    remote: false,
    mobility: true,
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
    remote: true,
    mobility: false,
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
    remote: false,
    mobility: true,
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
      {
        id: 3,
        name: "JAVA",
      },
      {
        id: 4,
        name: "SPRINGBOOT",
      },
    ],
  },
  {
    fullname: "Amparo Herrera Climent",
    city: "Sevilla",
    country: "España",
    phone: "689254865",
    remote: true,
    mobility: false,
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
    remote: false,
    mobility: true,
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
    remote: true,
    mobility: false,
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
        Filter: SelectFilter,
      },
      {
        Header: "País",
        accessor: "country",
        Filter: SelectFilter,
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
        accessor: "remote",
        Filter: RemoteFilter,
      },
      {
        accessor: "mobility",
        Filter: MobilityFilter,
      },
      {
        Header: "Etiquetas",
        id: "skills",
        accessor: (data) => data.skills.map((skill) => skill.name),
        Cell: TagPill,
        Filter: TagFilter,
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);
  return (
    <>
      <div>
        <Table columns={columns} data={data} />
      </div>
    </>
  );
};

export default Candidatetable;
