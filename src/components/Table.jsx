import React from "react";
import { skillsData } from "../services/skillsData";
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  useFilters,
  usePagination,
} from "react-table";
import { MultiSelect } from "primereact/multiselect";
import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/solid";
import {
  TrashIcon,
  SearchIcon,
  SwitchVerticalIcon,
  PlusSmIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Button, PageButton } from "./templates/ButtonPage";

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
        <SearchIcon className="w-5 " />
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

// // TAG FILTER
// export function TagFilter({ column: { setFilter } }) {
//   const [selectedSkills, setSelectedSkills] = React.useState([]);
//   const deleteSkill = (i) => {
//     const index = selectedSkills.indexOf(i);
//     if (index > -1) {
//       selectedSkills.splice(index, 1);
//     }
//     setSelectedSkills(selectedSkills);
//     setFilter(selectedSkills);
//   };

//   return (
//     <span className="flex flex-col mt-3 ">
//       <h2 className="mb-1 font-semibold">Etiquetas</h2>
//       <MultiSelect
//         value={selectedSkills}
//         options={skillsData.map((item) => item.name)}
//         onChange={(e) => {
//           setSelectedSkills(e.value);
//           setFilter(e.value);
//         }}
//         placeholder="Buscar...."
//         style={{ background: "#F8F8F9", border: "none" }}
//       />
//       <span className="mt-2">
//         {selectedSkills.map((skill, i) => (
//           <span
//             className="mt-2 bg-gray-medium rounded-full px-3 py-1 text-sm font-semibold flex items-center w-fit"
//             key={skill}
//           >
//             <span>{skill}</span>{" "}
//             <button
//               className="text-gray-dark"
//               onClick={() => {
//                 deleteSkill(skill);
//               }}
//             >
//               <XIcon className="w-4" />
//             </button>
//           </span>
//         ))}
//       </span>
//     </span>
//   );
// }

// //SELECT FILTERS
// export function SelectFilter({
//   column: { filterValue, setFilter, preFilteredRows, id },
// }) {
//   const options = React.useMemo(() => {
//     const options = new Set();
//     preFilteredRows.forEach((row) => {
//       options.add(row.values[id]);
//     });
//     return [...options.values()];
//   }, [id, preFilteredRows]);

//   // Render a multi-select box
//   return (
//     <select
//       name={id}
//       id={id}
//       value={filterValue}
//       onChange={(e) => {
//         setFilter(e.target.value);
//       }}
//     >
//       <option value="">Todos</option>
//       {options.map((option, i) => (
//         <option key={i} value={option}>
//           {option}
//         </option>
//       ))}
//     </select>
//   );
// }

// function setFilteredParams(filterArr, val) {
//   // if (val === undefined) return undefined;
//   if (filterArr.includes(val)) {
//     filterArr = filterArr.filter((n) => {
//       return n !== val;
//     });
//   } else filterArr.push(val);

//   if (filterArr.length === 0) filterArr = undefined;
//   return filterArr;
// }

// //FILTRO REMOTO & TRASLADO
// export function RemoteFilter({
//   column: { filterValue = [], setFilter, preFilteredRows, id },
// }) {
//   return (
//     <div className="flex flex-col">
//       <span className="block capitalize mb-4">{id}</span>
//       <span>
//         <input
//           type="checkbox"
//           className="form-check-input appearance-none h-3 w-3 border border-gray-medium rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
//           id="checkbox"
//           name="remote"
//           value={true}
//           onChange={(e) => {
//             setFilter(setFilteredParams(filterValue, e.target.value));
//           }}
//         ></input>
//         <label htmlFor="remote">En remoto</label>
//       </span>
//       <span>
//         <input
//           type="checkbox"
//           className="form-check-input appearance-none h-3 w-3 border border-gray-medium rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
//           id="checkbox"
//           name="remote"
//           value={false}
//           onChange={(e) => {
//             setFilter(setFilteredParams(filterValue, e.target.value));
//           }}
//         ></input>
//         <label htmlFor="remote">Presencial</label>
//       </span>
//     </div>
//   );
// }
// export function MobilityFilter({
//   column: { filterValue = [], setFilter, preFilteredRows, id },
// }) {
//   return (
//     <div className="flex flex-col">
//       <span className="block capitalize mb-4">{id}</span>
//       <span>
//         <input
//           type="checkbox"
//           className="form-check-input appearance-none h-3 w-3 border border-gray-medium rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
//           id="checkbox"
//           name="remote"
//           value={true}
//           onChange={(e) => {
//             setFilter(setFilteredParams(filterValue, e.target.value));
//           }}
//         ></input>
//         <label htmlFor="remote">Si</label>
//       </span>
//       <span>
//         <input
//           type="checkbox"
//           className="form-check-input appearance-none h-3 w-3 border border-gray-medium rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
//           id="checkbox"
//           name="remote"
//           value={false}
//           onChange={(e) => {
//             setFilter(setFilteredParams(filterValue, e.target.value));
//           }}
//         ></input>
//         <label htmlFor="remote">No</label>
//       </span>
//     </div>
//   );
// }

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
    <span className="bg-gray-light h-full w-screen flex flex-col lg:flex-row items-evenly">
      <span className="flex flex-col  pl-10 w-full p-5">
        <span className="flex mb-3 items-start md:items-center justify-between flex-col sm:flex-row ">
          <span className="flex items-start md:items-center flex-col sm:flex-row m-1">
            <h1 className="font-semibold mr-6">Alumnos</h1>
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={pageIndex.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />{" "}
          </span>
          <button className="bg-white font-semibold px-4 py-2 rounded-lg border border-gray-medium flex items-center hover:bg-gray-light">
            <PlusSmIcon className="w-5 mr-3" />
            Añadir alumno
          </button>
        </span>
        <span className=" rounded-xl bg-white overflow-x-auto overflow-hidden border border-gray-medium sm:rounded-xl">
          <table
            className=" divide-y divide-gray-medium w-full"
            {...getTableProps()}
          >
            <thead className=" w-fit bg-white">
              {headerGroups.map((headerGroup) => (
                <tr
                  {...headerGroup.getHeaderGroupProps()}
                  className=" items-center"
                >
                  {headerGroup.headers.map((column) => (
                    <th
                      className="pl-10 px-4 py-3 text-left text-xs font-semibold text-gray-dark uppercase tracking-wider"
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      <span className="flex items-center">
                        {column.render("Header")}
                        {column.isSortable ? (
                          <SwitchVerticalIcon className="w-4 ml-1" />
                        ) : (
                          ""
                        )}
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
                          className="pl-10 px-4 py-3 whitespace-nowrap"
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
          <div className="flex-1 flex justify-between md:hidden px-6 py-3">
            <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
              Anterior
            </Button>
            <Button onClick={() => nextPage()} disabled={!canNextPage}>
              Siguiente
            </Button>
          </div>
          <div className="hidden pagination w-auto md:flex justify-between px-6 py-3">
            <span className="flex w-auto  items-center justify-start">
              <span className="w-3/5 pl-5 pr-5">
                Page
                <strong className="pl-2">
                  {pageIndex + 1} of {pageOptions.length}
                </strong>{" "}
              </span>
              <select
                className="bg-gray-light p-3 rounded-lg focus:outline-primary border-none pr-8"
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[5, 10, 20].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Mostrar {pageSize}
                  </option>
                ))}
              </select>
            </span>
            <span>
              <PageButton
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
              </PageButton>
              <PageButton
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </PageButton>
              <PageButton onClick={() => nextPage()} disabled={!canNextPage}>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </PageButton>
              <PageButton
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                <ChevronDoubleRightIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </PageButton>
            </span>
          </div>
        </span>
      </span>
      {/* <span className="mr-5 mx-10 md:ml-6 bg-white h-fit pb-5 px-10 pt-2 rounded-xl border border-gray-medium w-5/5 lg:w-2/5 mr-5">
        <span className="flex justify-between items-center pt-6">
          <h2 className="font-semibold">Filtros de Busqueda</h2>
          <TrashIcon className="w-5 text-primary" />
        </span>

        {headerGroups.map((headerGroup) =>
          headerGroup.headers.map((column) =>
            column.Filter ? (
              <div key={column.id}>{column.render("Filter")}</div>
            ) : null
          )
        )}
      </span> */}
    </span>
  );
};

export default Table;
