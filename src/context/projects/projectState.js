import React, { useReducer } from "react";
import { FORM_PROJECT, GET_PROJECT, CREATE_PROJECT, VALIDATE_FORM, GET_CURRENT_PROJECT, DELETE_PROJECT } from "../../types";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { v4 as uuidv4 } from "uuid";

const projects = [
  { id: 1, name: "Tienda virtual" },
  { id: 2, name: "Intranet" },
  { id: 3, name: "Diseño" },
  { id: 4, name: "Continuar aprendiendo" },
];

const ProjectState = (props) => {
  const initialState = {
    projects: [],
    form: false,
    errorForm: false,
    project: null
  };

  //dispatch
  const [state, dispatch] = useReducer(projectReducer, initialState);

  const showForm = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };

  const getProjects = () => {
    dispatch({
      type: GET_PROJECT,
      payload: projects,
    });
  };

  const createProject = (project) => {
    project.id = uuidv4();

    dispatch({
      type: CREATE_PROJECT,
      payload: project
    })
  };

  const showError = () => {
    dispatch({
      type: VALIDATE_FORM
    })
  }

  const currentProject = projectId => {
    dispatch({
      type: GET_CURRENT_PROJECT,
      payload: projectId
    })
  }

  const deleteProject = projectId => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId
    })
  }

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        errorForm: state.errorForm,
        project: state.project,
        showForm,
        getProjects,
        createProject,
        showError,
        currentProject,
        deleteProject
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
