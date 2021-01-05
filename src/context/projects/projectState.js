import React, { useReducer } from "react";
import { FORM_PROJECT,GET_PROJECT } from "../../types";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";

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
      payload: projects
    })
  }

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        showForm,
        getProjects
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
