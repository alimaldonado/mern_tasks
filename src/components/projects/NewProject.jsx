import React, { Fragment, useContext, useState } from "react";
import projectContext from "../../context/projects/projectContext";

const NewProject = () => {
  const projectsContext = useContext(projectContext);
  const {
    form,
    showForm,
    errorForm,
    createProject,
    showError,
  } = projectsContext;

  const [project, saveProject] = useState({
    name: "",
  });

  const onChangeProject = (e) => {
    saveProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitProject = (e) => {
    e.preventDefault();

    if (name === "") {
      showError();
      return;
    }

    createProject(project);

    saveProject({
      name: "",
    });
  };

  const { name } = project;
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => showForm()}
      >
        New Project
      </button>
      {form ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProject}>
          <input
            type="text"
            className="input-text"
            placeholder="Project Name"
            name="name"
            value={name}
            onChange={onChangeProject}
          />
          <input
            type="submit"
            value="Add Project"
            className="btn btn-primario btn-block"
          />
        </form>
      ) : null}
      {errorForm ? <p className="mensaje error">Name is required</p> : null}
    </Fragment>
  );
};

export default NewProject;
