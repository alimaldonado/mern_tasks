import {
  FORM_PROJECT,
  GET_PROJECT,
  CREATE_PROJECT,
  VALIDATE_FORM,
  GET_CURRENT_PROJECT,
  DELETE_PROJECT,
} from "../../types";

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case FORM_PROJECT:
      return {
        ...state,
        form: true,
      };
    case GET_PROJECT:
      return {
        ...state,
        projects: action.payload,
      };
    case CREATE_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        form: false,
      };
    case VALIDATE_FORM:
      return {
        ...state,
        errorForm: true,
      };
    case GET_CURRENT_PROJECT:
      return {
        ...state,
        project: state.projects.filter(
          (project) => project.id === action.payload
        ),
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.payload
        ),
        project: null
      };
    default:
      return state;
  }
};
