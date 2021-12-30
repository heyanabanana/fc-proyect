import React from "react";
import { skillsData } from "../../services/skillsData";
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  useFilters,
  usePagination,
} from "react-table";
import { ReactComponent as IconSort } from "../../assets/icons/Filter.svg";
import { ReactComponent as IconSearch } from "../../assets/icons/Search.svg";

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

export function FullName({ value }) {
  return <p className="font-semibold">{value}</p>;
}
export function dontShow({ value }) {
  return <div className="hidden">{value}</div>;
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
    <span className="flex items-center min-w-content bg-gray-medium p-2 text-xs rounded-lg focus:outline-primary border-none ">
      <span className="mr-3 ml-1 text-pink">
        <IconSearch className="w-5 " />
      </span>
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={"Buscar por Nombre, Email o Palabra clave..."}
        className="placeholder:text-placeholder w-72 bg-gray-medium text-sm rounded-lg focus:outline-none border-none "
      />
    </span>
  );
}

// TAG FILTER
export function TagFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  const [selectedSkills, setSelectedSkills] = React.useState([]);

  const deleteSkill = (i) => {
    const index = selectedSkills.indexOf(i);
    if (index > -1) {
      selectedSkills.splice(index, 1);
    }
    setSelectedSkills(selectedSkills);
    setFilter(selectedSkills);
  };

  const onChange = (event) => {
    const skills = skillsData.map((item) => item.name);
    if (skills.includes(event.target.value)) {
      if (selectedSkills.includes(event.target.value) === false) {
        setSelectedSkills((selectedSkills) => [
          ...selectedSkills,
          event.target.value || undefined,
        ]);
        setFilter((filterValue) => [
          ...filterValue,
          event.target.value || undefined,
        ]);
      }
    }
  };

  return (
    <>
      {" "}
      <input
        type="input"
        list="skillfilter"
        onChange={onChange}
        placeholder="Select an option"
        multiple
      />
      <datalist id="skillfilter" multiple>
        {skillsData.map((item) => (
          <option key={item.id} value={item.name} />
        ))}
      </datalist>
      <span>
        {selectedSkills.map((skill, i) => (
          <button
            key={skill}
            onClick={() => {
              deleteSkill(skill);
            }}
          >
            <span className="m-1 bg-gray-medium">{skill}</span>{" "}
            <button className="m-1 text-red">X</button>
          </button>
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
    state: { pageIndex, pageSize },
    preGlobalFilteredRows,
    setGlobalFilter,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
      },
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination
  );

  return (
    <span className="w-full">
      {" "}
      <span className="flex mb-3 items-center align-left">
        <h1 className="font-semibold mr-6">Alumnos</h1>
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={pageIndex.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </span>
      <span className="flex w-full items-between">
        <span className="bg-white overflow-hidden border border-gray-medium sm:rounded-xl">
          <table
            className="min-w-full divide-y divide-gray-medium"
            {...getTableProps()}
          >
            <thead className="w-full">
              {headerGroups.map((headerGroup) => (
                <tr
                  {...headerGroup.getHeaderGroupProps()}
                  className="items-center"
                >
                  {headerGroup.headers.map((column) => (
                    <th
                      className="px-4 py-3 text-left text-xs font-semibold text-gray-dark uppercase tracking-wider"
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      <span className="flex items-center">
                        {column.render("Header")}
                        {column.isSortable ? <IconSort /> : ""}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody
              {...getTableBodyProps()}
              className="bg-white divide-y divide-gray-200 text-sm"
            >
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          className="px-4 py-3 whitespace-nowrap"
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="pagination">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {"<<"}
            </button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {"<"}
            </button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              {">"}
            </button>
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>
            <span>
              Page
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>

            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 20].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </span>
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
        </span>
      </span>
    </span>
  );
};

export default Table;
