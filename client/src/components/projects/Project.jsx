import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/tasks/taskContext";

const Project = ({ project }) => {
  const projectsContext = useContext(projectContext);
  const { currentProject } = projectsContext;

  const tasksContext = useContext(TaskContext);
  const { getTasks } = tasksContext;

  const selectProject = id => {
    currentProject(id);
    getTasks(id);
  }

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => selectProject(project.id)}
      >
        {project.name}
      </button>
    </li>
  );
};

export default Project;
