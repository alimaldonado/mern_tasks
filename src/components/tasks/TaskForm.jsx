import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const TaskForm = () => {
  
  const projectsContext = useContext(projectContext);
  const {project} = projectsContext;

  if(!project) return null;

  const [currentProject] = project;

  return (
    <div className="formulario">
      <form action="">
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task name"
            name="name"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            value="Add task"
            className="btn btn-primario btn-submit btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
