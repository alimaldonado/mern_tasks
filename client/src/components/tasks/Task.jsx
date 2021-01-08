import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/tasks/taskContext";

const Task = ({ task }) => {
  const tasksContext = useContext(TaskContext);
  const { deleteTask, getTasks, modifyStatus, saveCurrentTask } = tasksContext;

  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  const [currentProject] = project;

  const clickTaskDelete = (id) => {
    deleteTask(id);
    getTasks(currentProject.id);
  };

  const clickModifyStatus  = task => {
    if (task.status) {
      task.status = false;
    }else{
      task.status = true;
    }
    modifyStatus(task);
  }

  const selectTask = task => {
    saveCurrentTask(task);
  } 

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="estado">
        {task.status ? (
          <button type="button" className="completo" onClick={ () => clickModifyStatus(task)}>
            Completed
          </button>
        ) : (
          <button type="button" className="incompleto" onClick={ () => clickModifyStatus(task)}>
            Incompleted
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario"
        onClick={() => selectTask(task)}
         >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => clickTaskDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
