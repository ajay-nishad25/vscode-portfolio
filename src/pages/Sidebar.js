import React from "react";
import "styles/sidebar.css";
import { VscAccount, VscSettingsGear } from "react-icons/vsc";
import GetSidebarData from "utils/GetSidebarData";
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const sidebarData = GetSidebarData();

  function normalizePath(path) {
    return path?.toLowerCase().replace(/\/+$/, "") || "/";
  }

  function isSidebarIconActive(activePathUrlPatterns, currentPath) {
    const normalizedPath = normalizePath(currentPath);
    return activePathUrlPatterns.some((pattern) => {
      const normalizedPattern = normalizePath(pattern);
      if (normalizedPattern.includes("/:")) {
        const base = normalizedPattern.split("/:")[0];
        return normalizedPath.startsWith(base);
      }
      return (
        normalizedPath === normalizedPattern ||
        normalizedPath.startsWith(`${normalizedPattern}/`)
      );
    });
  }

  function handleSidebarNavigation(url) {
    navigate(url);
  }

  return (
    <div className="sidebar-container-width sidebar-layout grey-border-right">
      <div className="div-flex-column rg-10 cursor-pointer">
        {sidebarData?.map((sidebar) => {
          const isActive = isSidebarIconActive(sidebar?.matchUrls, currentPath);
          const Icon = sidebar.iconComponent;
          return (
            <div
              key={sidebar.id}
              className={`div-flex-center sidebar-icon-padding ${
                isActive ? "sidebar-active" : ""
              }`}
              onClick={() => handleSidebarNavigation(sidebar?.url)}
            >
              <Icon
                className={` ${
                  sidebar?.name === "Git" ? "icon-size-27" : "icon-size-24"
                }`}
                color={isActive ? "white" : "grey"}
              />
            </div>
          );
        })}
      </div>

      <div className="push-to-bottom">
        <div className="div-flex-column rg-10">
          <div className="div-flex-center sidebar-icon-padding">
            <VscAccount className="icon-size-24" />
          </div>
          <div className="div-flex-center sidebar-icon-padding">
            <VscSettingsGear className="icon-size-24" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
