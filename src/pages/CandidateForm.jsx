import React, { useState, useMemo, useCallback } from "react";
import DataListInput from "react-datalist-input";
import {
  LocationMarkerIcon,
  CloudUploadIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { skillsData } from "../services/skillsData";
import "../styles/dataListInput.css";
import { XIcon } from "@heroicons/react/outline";

const candidateFake = {
  avatar:
    "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
  curriculum: "https://docdro.id/edJj5Ef",
  fullname: "Nombre Alumno",
  city: "Valencia",
  country: "España",
};

export const DataList = ({ myValues }) => {
  // selectedItem
  const [item, setItem] = useState();

  const [selectedSkills, setSelectedSkills] = useState([]);
  const onSelect = (selectedItem) => {
    const i = selectedItem.label;
    // selectedSkills.push(selectedItem.label);

    if (selectedSkills.includes(i) === false) {
      //   selectedSkills.push(i);
      setSelectedSkills((selectedSkills) => [...selectedSkills, i]);
      console.log(selectedSkills);
    } else console.log("ya existe");
  };

  const items = useMemo(
    () =>
      myValues.map((oneItem) => ({
        label: oneItem.name,
        key: oneItem.id,
      })),
    [myValues]
  );

  const deleteSkill = (i) => {
    const index = selectedSkills.indexOf(i);
    if (index > -1) {
      selectedSkills.splice(index, 1);
    }
    setSelectedSkills(selectedSkills);
  };

  return (
    <span className="mt-5 ">
      <label className="font-semibold mt-3" htmlFor="fullname">
        Etiquetas
      </label>
      <span className="mb-1 ">
        <DataListInput
          placeholder="Escribe para buscar...."
          items={items}
          onSelect={onSelect}
          dropdownClassName="dropdownInput"
          inputClassName="datalistInput"
        />{" "}
      </span>
      <span className="mt-2 flex">
        {selectedSkills.map((skill, i) => (
          <span
            className="mt-2 bg-gray-medium rounded-full px-3 py-1 text-sm font-semibold flex items-center w-fit"
            key={skill}
          >
            <span>{skill}</span>{" "}
            <button
              className="text-gray-dark"
              onClick={() => {
                deleteSkill(skill);
              }}
            >
              <XIcon className="w-4" />
            </button>
          </span>
        ))}
      </span>
    </span>
  );
};

export function RenderPDF(path) {
  return (
    <iframe
      width="600px"
      height="900px"
      title="Curriculum Vitae candidato"
      src={path}
      className="rounded-2xl w-full h-full"
    >
      {" "}
      <p>This browser does not support PDF!</p>
    </iframe>
  );
}
const Candidateform = () => {
  return (
    <span className="bg-gray-light h-screen w-screen flex flex-col sm:flex-row p-10 justify-evenly">
      <span className="w-full md:w-2/4 mr-0 md:mr-5  bg-white flex flex-col w-fit  p-10 rounded-xl border border-gray-medium">
        <span className="flex flex-col md:flex-row">
          <img
            src={candidateFake.avatar}
            alt={candidateFake.fullname}
            className="w-32 h-32 overflow-hidden rounded-3xl border border-4 mr-5"
          />
          <span className="flex flex-col">
            <h1 className="text-2xl font-bold">{candidateFake.fullname}</h1>
            <span className="text-gray-dark flex text-sm">
              <LocationMarkerIcon className="w-5 mr-3" />
              <p className="mr-2">{candidateFake.city}</p>{" "}
              <p className="mr-2">|</p>
              <p>{candidateFake.country}</p>
            </span>
          </span>
        </span>
        <span className="flex flex-col mt-10 h-auto">
          <label className="font-semibold" htmlFor="fullname">
            Nombre y Apellido
          </label>
          <input
            type="text"
            className="mt-3 bg-gray-light p-3 rounded-lg focus:outline-primary border-none "
            defaultValue="Nombre Alumno"
          />
          <span className="flex justify-between mt-3">
            {" "}
            <span className="flex flex-col w-full mr-3">
              <label className="font-semibold" htmlFor="fullname">
                Nº Teléfono
              </label>
              <input
                type="text"
                className="mt-1 bg-gray-light p-3 rounded-lg focus:outline-primary border-none "
                defaultValue="+34 654 85 52 48"
              />
            </span>
            <span className="flex flex-col w-full ml-3">
              <label className="font-semibold" htmlFor="fullname">
                Email
              </label>
              <input
                type="text"
                className="mt-1 bg-gray-light p-3 rounded-lg focus:outline-primary border-none "
                defaultValue="hcliment@gmail.com"
              />
            </span>
          </span>{" "}
          <span className="flex justify-between mt-3">
            <span className="flex flex-col w-full mr-3">
              <label className="font-semibold" htmlFor="fullname">
                País
              </label>
              <select className="mt-1 bg-gray-light p-3 rounded-lg focus:outline-primary border-none ">
                <option>España</option>
                <option>Lisboa</option>
                <option>Italia</option>
              </select>
            </span>
            <span className="flex flex-col w-full ml-3">
              <label className="font-semibold" htmlFor="fullname">
                Ciudad
              </label>
              <select className="mt-1 bg-gray-light p-3 rounded-lg focus:outline-primary border-none ">
                <option>Valencia</option>
                <option>Sevilla</option>
                <option>Gijón</option>
              </select>
            </span>
          </span>
          <span className="flex justify-between mt-3">
            <span className="flex flex-col w-full mr-3">
              <label className="font-semibold" htmlFor="fullname">
                Traslado
              </label>
              <select className="mt-1 bg-gray-light p-3 rounded-lg focus:outline-primary border-none ">
                <option>Si</option>
                <option>No</option>
              </select>
            </span>
            <span className="flex flex-col w-full ml-3">
              <label className="font-semibold" htmlFor="fullname">
                Presencialidad
              </label>
              <select className="mt-1 bg-gray-light p-3 rounded-lg focus:outline-primary border-none ">
                <option>En remoto</option>
                <option>Presencial</option>
              </select>
            </span>
          </span>
          <label className="font-semibold mt-3" htmlFor="fullname">
            Presencialidad
          </label>
          <span class="mt-1">
            <button class=" cursor-pointer bg-gray-dark rounded-xl text-white font-semibold py-3 px-4 w-fit inline-flex items-center">
              <CloudUploadIcon className="w-5" />
              <span class="ml-2">Subir de nuevo</span>{" "}
              <input
                class=" absolute block opacity-0 pin-r pin-t"
                type="file"
                name="vacancyImageFiles"
              />
            </button>
            <button class="ml-3 cursor-pointer border border-gray-medium rounded-xl font-semibold py-3 px-4 w-fit inline-flex items-center">
              <TrashIcon className="w-5" />
              <span class="ml-2">Borrar</span>{" "}
            </button>
          </span>
          <span className="mt-5">
            <DataList myValues={skillsData} />
          </span>
        </span>
      </span>
      <span className="w-full h-full pt-5 md:pt-0">
        {RenderPDF(candidateFake.curriculum)}
      </span>
    </span>
  );
};

export default Candidateform;
