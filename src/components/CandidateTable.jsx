import React from "react";
// import Table, {
//   SelectFilter,
//   RemoteFilter,
//   MobilityFilter,
//   TagFilter,
// } from "./Table";
import Table from "./Table";
import { TagPill, dontShow, FullName } from "./templates/TableTemplates";
import { candidatesData } from "../services/candidatesData";

const Candidatetable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "fullname",
        isSortable: true,
        Cell: FullName,
      },
      {
        Header: "Ciudad",
        accessor: "city",
        // Filter: SelectFilter,
        isSortable: true,
      },
      {
        Header: "País",
        accessor: "country",
        // Filter: SelectFilter,
        isSortable: true,
      },
      {
        Header: "Teléfono",
        accessor: "phone",
      },
      {
        Header: "Correo electrónico",
        accessor: "email",
        isSortable: true,
      },

      {
        Header: "Etiquetas",
        id: (data) => data.skills.map((skill) => skill.id),
        accessor: (data) => data.skills.map((skill) => skill.name),
        Cell: TagPill,
        // Filter: TagFilter,
        isSortable: true,
      },
      {
        accessor: "remote",
        // Filter: RemoteFilter,
        Cell: dontShow,
      },
      {
        accessor: "mobility",
        // Filter: MobilityFilter,
        Cell: dontShow,
      },
    ],
    []
  );

  const data = React.useMemo(() => candidatesData, []);
  return <Table columns={columns} data={data} />;
};

export default Candidatetable;
