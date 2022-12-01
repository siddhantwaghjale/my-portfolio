import { useCallback } from "react";

import "./header.css";

export const Header = ({ viewType, handleViewUpdate }) => {
  const showTitle = viewType !== "ABOUT";

  const onViewAbout = useCallback(() => {
    handleViewUpdate("ABOUT");
  }, [handleViewUpdate]);

  const onViewProjects = useCallback(() => {
    handleViewUpdate("PROJECTS");
  }, [handleViewUpdate]);

  return (
    <div className="header-container">
      {showTitle ? (
        <div className="header-title">
          <b>Siddhant</b> Waghjale
        </div>
      ) : (
        <div />
      )}

      <div className="header-menu">
        <div
          className={
            viewType === "ABOUT" ? "menu-item menu-item-selected" : "menu-item"
          }
          onClick={onViewAbout}
        >
          about
        </div>
        <div
          className={
            viewType === "PROJECTS"
              ? "menu-item menu-item-selected"
              : "menu-item"
          }
          onClick={onViewProjects}
        >
          projects
        </div>
        <div className="menu-item">
          <a
            className="resume-link"
            target="_blank"
            href="https://siddhantwaghjale.github.io/resume.pdf"
          >
            resume
          </a>
        </div>
      </div>
    </div>
  );
};
