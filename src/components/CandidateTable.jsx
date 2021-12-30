import React from "react";
import Table, {
  TagPill,
  SelectFilter,
  RemoteFilter,
  MobilityFilter,
  TagFilter,
} from "./pure/Table";
import { candidatesData } from "../services/candidatesData";

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
        id: (data) => data.skills.map((skill) => skill.id),
        accessor: (data) => data.skills.map((skill) => skill.name),
        Cell: TagPill,
        Filter: TagFilter,
      },
    ],
    []
  );

  const data = React.useMemo(() => candidatesData, []);
  return (
    <>
      <div>
        <Table columns={columns} data={data} />
      </div>
    </>
  );
};

export default Candidatetable;
