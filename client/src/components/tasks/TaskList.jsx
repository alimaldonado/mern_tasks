import React, { Fragment, useContext } from "react";
import Task from "./Task";
import projectContext from "../../context/projects/projectContext";

const TaskList = () => {
  const projectsContext = useContext(projectContext);
  const { project, deleteProject } = projectsContext;
  if (!project) return <h2>Select a project</h2>;
  const [currenctProject] = project;

  const tasks = [
    { name: "Elegir plataforma", status: true },
    { name: "Elegir colores", status: true },
    { name: "Elegir hosting", status: false },
  ];

  const onClickDelete = () => {
    deleteProject(currenctProject.id);
  }
  return (
    <Fragment>
      <h2>Project: {currenctProject.name}</h2>

      <ul className="listado-tareas">
        {tasks.length === 0 ? (
          <li className="tarea">
            <p>No tasks</p>
          </li>
        ) : (
          tasks.map((task) => <Task task={task} />)
        )}
        <br />
        <button type="button" className="btn btn-eliminar" onClick={onClickDelete}>
          Delete Project &times;
        </button>
      </ul>
    </Fragment>
  );
};

export default TaskList;
