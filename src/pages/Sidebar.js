import React, { useState } from "react";
import "styles/sidebar.css";
import {
  VscFiles,
  VscSearch,
  VscDebugAlt,
  VscExtensions,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";
import { IoIosGitBranch } from "react-icons/io";

function Sidebar() {
  const [activeIcon, setActiveIcon] = useState("Files");

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  const getIconClass = (iconName) =>
    `div-flex-center sidebar-icon-padding ${
      activeIcon === iconName ? "sidebar-active" : ""
    }`;

  const checkActionIcon = (iconName) => {
    return activeIcon === iconName ? "white" : "grey";
  };

  return (
    <div className="sidebar-container-width sidebar-layout grey-border-right">
      <div className="div-flex-column rg-10 cursor-pointer">
        <div
          className={getIconClass("Files")}
          onClick={() => handleIconClick("Files")}
        >
          <VscFiles className="icon-size-24" color={checkActionIcon("Files")} />
        </div>
        <div
          className={getIconClass("Search")}
          onClick={() => handleIconClick("Search")}
        >
          <VscSearch
            className="icon-size-24"
            color={checkActionIcon("Search")}
          />
        </div>
        <div
          className={getIconClass("Git Branch")}
          onClick={() => handleIconClick("Git Branch")}
        >
          <IoIosGitBranch
            className="icon-size-27"
            color={checkActionIcon("Git Branch")}
          />
        </div>
        <div
          className={getIconClass("Debug")}
          onClick={() => handleIconClick("Debug")}
        >
          <VscDebugAlt
            className="icon-size-24"
            color={checkActionIcon("Debug")}
          />
        </div>
        <div
          className={getIconClass("Extensions")}
          onClick={() => handleIconClick("Extensions")}
        >
          <VscExtensions
            className="icon-size-24"
            color={checkActionIcon("Extensions")}
          />
        </div>
      </div>

      <div className="push-to-bottom">
        <div className="div-flex-column rg-10">
          <div className={"div-flex-center sidebar-icon-padding"}>
            <VscAccount className="icon-size-24" />
          </div>
          <div className={"div-flex-center sidebar-icon-padding"}>
            <VscSettingsGear className="icon-size-24" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
