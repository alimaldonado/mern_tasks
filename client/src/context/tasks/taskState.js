import React, { useReducer } from 'react';
import { ADD_TASK, CLEAN_TASK, CURRENT_TASK, DELETE_TASK, PROJECT_TASKS, TASK_STATUS, UPDATE_TASK, VALIDATE_TASK } from '../../types';
import TaskContext from './taskContext';
import TaskReducer from "./taskReducer";
import { v4 as uuidv4 } from "uuid";

const TaskState = props => {
    const initialState = {
        tasks: [
            { id: 1, name: "Elegir plataforma", status: true, projectId: 1 },
            { id: 2, name: "Elegir colores", status: true, projectId: 1 },
            { id: 3, name: "Elegir hosting", status: false, projectId: 1 },
            { id: 4, name: "Elegir colores", status: true, projectId: 2 },
            { id: 5, name: "Elegir hosting", status: false, projectId: 2 },
          ],
          projectTasks: null,
          taskError: false,
          selectedTask: null,
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const getTasks = projectId => {
        dispatch({
            type: PROJECT_TASKS,
            payload: projectId
        })
    }

    const addTask = task => {
        task.id = uuidv4();
        dispatch({
            type: ADD_TASK,
            payload: task,
        })
    }

    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK,
        })
    }

    const deleteTask = id => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }

    const modifyStatus = task => {
        dispatch({
            type: TASK_STATUS,
            payload: task,
        })
    }

    const saveCurrentTask = task => {
        dispatch({
            type: CURRENT_TASK,
            payload: task
        })
    }

    const updateTask = task => {
        dispatch({
            type: UPDATE_TASK,
            payload: task
        })
    }

    const cleanTask = () =>{
        dispatch({
            type: CLEAN_TASK
        })
    }

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                projectTasks: state.projectTasks,
                taskError: state.taskError,
                selectedTask: state.selectedTask,
                getTasks,
                addTask,
                validateTask,
                deleteTask,
                modifyStatus,
                saveCurrentTask,
                updateTask,
                cleanTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
}

export default TaskState;