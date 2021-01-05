import React from "react";

const TaskForm = () => {
  return (
    <div className="formulario">
      <form action="">
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task name"
            name="name"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            value="Add task"
            className="btn btn-primario btn-submit btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
