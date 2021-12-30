import React, { useMemo, useState, useCallback } from "react";
import DataList from "react-datalist-field/build";
import Select from "react-select";
import { candidatesData } from "../../services/candidatesData";
import { skillsData } from "../../services/skillsData";

import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  useFilters,
} from "react-table";
import { ReactComponent as IconSort } from "../../assets/icons/IconHover.svg";

export function TagPill({ value }) {
  return (
    <span className="flex w-auto flex-wrap">
      {value.slice(0, 2).map((skill) => (
        <span
          key={skill}
          className="w-auto px-2 py-1 m-1 uppercase leading-wide font-semibold text-xs rounded-md  bg-primary text-white"
        >
          {skill}
        </span>
      ))}
      {value.length > 2 ? (
        <span
          key={value}
          className="w-auto px-2 py-1 m-1 uppercase leading-wide font-semibold text-xs rounded-md  bg-primary text-white"
        >
          + {value.length - 2}
        </span>
      ) : (
        ""
      )}
    </span>
  );
}

//BUSQUEDA GLOBAL
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span>
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={"Buscar por Nombre, Email o Palabra clave..."}
      />
    </span>
  );
}

// TAG FILTER
export function TagFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  const selectedSkills = ["REACT", "HTML&CSS"];
  return (
    <>
      {" "}
      <input
        // value={filterValue}
        type="input"
        list="gameList"
        onChange={(e) => {
          // setFilter(e.target.value, "id" || undefined);
          selectedSkills.push(e.target.value, "id" || undefined);
        }}
        placeholder="Select an option"
        multiple
      />
      <datalist id="gameList" multiple>
        {skillsData.map((item) => (
          <option key={item.id} value={item.name} />
        ))}
      </datalist>
      <span>
        {selectedSkills.map((skill) => (
          <span className="m-1 bg-gray-medium">{skill}</span>
        ))}
      </span>
    </>
  );
}

//SELECT FILTERS
export function SelectFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <select
      name={id}
      id={id}
      value={filterValue}
      onChange={(e) => {
        setFilter(e);
      }}
    >
      <option value="">Todos</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
function setFilteredParams(filterArr, val) {
  // if (val === undefined) return undefined;
  if (filterArr.includes(val)) {
    filterArr = filterArr.filter((n) => {
      return n !== val;
    });
  } else filterArr.push(val);

  if (filterArr.length === 0) filterArr = undefined;
  return filterArr;
}

//FILTRO REMOTO & TRASLADO
export function RemoteFilter({
  column: { filterValue = [], setFilter, preFilteredRows, id },
}) {
  return (
    <div className="flex flex-col">
      <span className="block capitalize mb-4">{id}</span>
      <span>
        <input
          type="checkbox"
          className="form-check-input appearance-none h-3 w-3 border border-gray-medium rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          id="checkbox"
          name="remote"
          value={true}
          onChange={(e) => {
            setFilter(setFilteredParams(filterValue, e.target.value));
          }}
        ></input>
        <label htmlFor="remote">En remoto</label>
      </span>
      <span>
        <input
          type="checkbox"
          className="form-check-input appearance-none h-3 w-3 border border-gray-medium rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          id="checkbox"
          name="remote"
          value={false}
          onChange={(e) => {
            setFilter(setFilteredParams(filterValue, e.target.value));
          }}
        ></input>
        <label htmlFor="remote">Presencial</label>
      </span>
    </div>
  );
}
export function MobilityFilter({
  column: { filterValue = [], setFilter, preFilteredRows, id },
}) {
  return (
    <div className="flex flex-col">
      <span className="block capitalize mb-4">{id}</span>
      <span>
        <input
          type="checkbox"
          className="form-check-input appearance-none h-3 w-3 border border-gray-medium rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          id="checkbox"
          name="remote"
          value={true}
          onChange={(e) => {
            setFilter(setFilteredParams(filterValue, e.target.value));
          }}
        ></input>
        <label htmlFor="remote">Si</label>
      </span>
      <span>
        <input
          type="checkbox"
          className="form-check-input appearance-none h-3 w-3 border border-gray-medium rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          id="checkbox"
          name="remote"
          value={false}
          onChange={(e) => {
            setFilter(setFilteredParams(filterValue, e.target.value));
          }}
        ></input>
        <label htmlFor="remote">No</label>
      </span>
    </div>
  );
}

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useFilters,
    useSortBy
  );

  return (
    <>
      {" "}
      <span className="flex">
        <h1>Alumnos</h1>

        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </span>
      <span className="flex">
        <table {...getTableProps()} border="1" className="overflow-x-scroll">
          <thead className="w-full">
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="items-center"
              >
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    <span className="flex items-center">
                      {column.render("Header")}

                      <IconSort />
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <span className="ml-5">
          {headerGroups.map((headerGroup) =>
            headerGroup.headers.map((column) =>
              column.Filter ? (
                <div key={column.id}>
                  <label htmlFor={column.id}>{column.render("Header")} </label>
                  {column.render("Filter")}
                </div>
              ) : null
            )
          )}
          <pre>
            <code>{JSON.stringify(state, null, 2)}</code>
          </pre>
        </span>
      </span>
    </>
  );
};

export default Table;
