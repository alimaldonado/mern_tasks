import React, { Fragment } from "react";
import Task from "./Task";

const TaskList = () => {
  const tasks = [
    { name: "Elegir plataforma", status: true },
    { name: "Elegir colores", status: true },
    { name: "Elegir hosting", status: false },
  ];
  return (
    <Fragment>
      <h2>Project: Tienda Virtual</h2>

      <ul className="listado-tareas">
        {tasks.length === 0 ? (
          <li className="tarea">
            <p>No tasks</p>
          </li>
        ) : (
          tasks.map((task) => <Task task={task} />)
        )}
        <br/>
         <button type="button" className="btn btn-eliminar">
          Delete Project &times;
        </button>
      </ul>
    </Fragment>
  );
};

export default TaskList;
