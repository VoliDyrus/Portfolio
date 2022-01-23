import React from "react";
import "./style.css";
import { SidebarData } from "../SidebarData/index";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        {SidebarData.map((data) => {
          return (
            <a href={data.url} key={data.id} className="data">
              {data.title}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
