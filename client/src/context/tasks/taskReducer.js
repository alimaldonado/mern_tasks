import {
  ADD_TASK,
  CLEAN_TASK,
  CURRENT_TASK,
  DELETE_TASK,
  PROJECT_TASKS,
  TASK_STATUS,
  UPDATE_TASK,
  VALIDATE_TASK,
} from "../../types";
// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case PROJECT_TASKS:
      return {
        ...state,
        projectTasks: state.tasks.filter(
          (task) => task.projectId === action.payload
        ),
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        taskError: false,
      };
    case VALIDATE_TASK:
      return {
        ...state,
        taskError: true,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case TASK_STATUS:
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case CURRENT_TASK:
      return {
        ...state,
        selectedTask: action.payload,
      };
    case CLEAN_TASK:
      return{
        ...state,
        selectedTask: null
      }
    default:
      return state;
  }
};
