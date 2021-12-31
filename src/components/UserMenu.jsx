import React, { useRef } from "react";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";

const Usermenu = () => {
  //TODO PASS BY PROPS ICON USER AND USERNAME
  const menu = useRef(null);
  const toast = useRef(null);
  const items = [
    {
      label: "Menu",
      items: [
        {
          label: "React Website",
          icon: "pi pi-external-link",
          url: "https://reactjs.org/",
        },
      ],
    },
  ];

  return (
    <div>
      <Menu model={items} popup ref={menu} id="popup_menu" />
      <span className="overflow-hidden flex items-center w-fit rounded-full bg-white m-0 p-0 mb-5 pr-3">
        <Avatar
          image="https://ichef.bbci.co.uk/news/640/cpsprodpb/150EA/production/_107005268_gettyimages-611696954.jpg"
          size="large"
          shape="circle"
          className="p-avatar-circle "
          style={{
            margin: 0,
            padding: 0,
            border: "none",
          }}
        />
        <p className="p-1 ml-4 font-semibold">UserName</p>
        <Button
          onClick={(event) => menu.current.toggle(event)}
          aria-controls="popup_menu"
          icon="pi pi-angle-down"
          aria-haspopup
          style={{
            backgroundColor: "#fff",
            color: "#A5A8B3",
            margin: "0px",
            padding: "0px",
            border: "none",
            width: "fit-content",
          }}
        />
      </span>
    </div>
  );
};

export default Usermenu;
