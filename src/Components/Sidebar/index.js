import React from "react";
import "./style.css";
import { SidebarData } from "../SidebarData/index";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        {SidebarData.map((val, key) => {
          return (
            <li
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div>{val.icon}</div> <div>{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
