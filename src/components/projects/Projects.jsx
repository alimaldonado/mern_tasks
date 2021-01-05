import React from "react";
import CustomHeader from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import TaskForm from "../tasks/TaskForm";
import TaskList from "../tasks/TaskList";

const Projects = () => {
  return (
    <div className="contenedor-app">
      <Sidebar></Sidebar>
      <div className="seccion-principal">
        <CustomHeader/>
        <main>
          <TaskForm/>
          <TaskList/>
          <div className="contenedor-tareas"></div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
