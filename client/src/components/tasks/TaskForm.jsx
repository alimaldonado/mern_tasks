import React, { useContext, useEffect, useState } from "react";
import projectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/tasks/taskContext";

const TaskForm = () => {
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  const tasksContext = useContext(TaskContext);
  const {
    taskError,
    addTask,
    validateTask,
    getTasks,
    selectedTask,
    updateTask,
    cleanTask
  } = tasksContext;

  useEffect(() => {
    if (selectedTask !== null) {
      saveTask(selectedTask);
    } else {
      saveTask({ name: "" });
    }
  }, [selectedTask]);

  const [task, saveTask] = useState({
    name: "",
  });
  const { name } = task;

  if (!project) return null;

  const [currentProject] = project;

  const handleChange = (e) => {
    saveTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      validateTask();
      return;
    }

    if (selectedTask === null) {
      task.projectId = currentProject.id;
      task.status = false;
      addTask(task);
    } else {
      updateTask(task);
      cleanTask();
    }
    getTasks(currentProject.id);
    
    saveTask({
      name: "",
    });

  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            value={selectedTask ? "Edit task" : "Add task"}
            className="btn btn-primario btn-submit btn-block"
          />
        </div>
      </form>

      {taskError ? (
        <p className="mensaje error">Task name is required</p>
      ) : null}
    </div>
  );
};

export default TaskForm;
