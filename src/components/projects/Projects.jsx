import "./projects.css";

import { PROJECTS } from "./constants";

export const Project = ({ project }) => (
  <div className="project-container">
    <div className="project-title">{project.title}</div>

    {project.image ? (
      <div className="image-container">
        <img src={project.image} />
      </div>
    ) : null}
    <div>
      {project.tasks.map((task) => (
        <div className="project-highlight">
          <div className="highlight-dot">&#x2022;</div>
          <div>{task}</div>
        </div>
      ))}
    </div>
  </div>
);

export const Projects = () => (
  <div className="project-list-container">
    <div className="project-list-title">Projects</div>
    <div className="project-list">
      {PROJECTS.map((project) => (
        <Project project={project} />
      ))}
    </div>
  </div>
);
