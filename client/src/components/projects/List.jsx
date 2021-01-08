import React, { useContext, useEffect } from "react";
import projectContext from "../../context/projects/projectContext";
import Project from "./Project";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ListProjects = () => {
  //extract projects from initial state
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  useEffect(() => {
    getProjects();
    // eslint-disable-next-line
  }, []);

  if (projects.length === 0)
    return <p>You have no projects, create one to start.</p>;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition key={project.id} timeout={200} classNames="proyecto">
            <Project  project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListProjects;
