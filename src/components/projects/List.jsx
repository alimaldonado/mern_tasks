import React, { useContext, useEffect } from "react";
import projectContext from "../../context/projects/projectContext";
import Project from "./Project";

const ListProjects = () => {
  //extract projects from initial state
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  
  useEffect(() => {
    getProjects();
  }, [])
  
  if(projects.length === 0 ) return null;
  
   return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ListProjects;
