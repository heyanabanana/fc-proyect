import React from "react";
import Table, {
  TagPill,
  SelectFilter,
  RemoteFilter,
  MobilityFilter,
  TagFilter,
  FullName,
  dontShow,
} from "./pure/Table";
import { candidatesData } from "../services/candidatesData";

const Candidatetable = () => {
  const columns = React.useMemo(
    () => [
      {
        accessor: "remote",
        Filter: RemoteFilter,
        Cell: dontShow,
      },
      {
        Header: "Nombre",
        accessor: "fullname",
        isSortable: true,
        Cell: FullName,
      },
      {
        Header: "Ciudad",
        accessor: "city",
        Filter: SelectFilter,
        isSortable: true,
      },
      {
        Header: "País",
        accessor: "country",
        Filter: SelectFilter,
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
        Filter: TagFilter,
        isSortable: true,
      },
      {
        accessor: "mobility",
        Filter: MobilityFilter,
        Cell: dontShow,
      },
    ],
    []
  );

  const data = React.useMemo(() => candidatesData, []);
  return (
    <>
      <div className="flex w-full items-evenly">
        <Table columns={columns} data={data} />
      </div>
    </>
  );
};

export default Candidatetable;
