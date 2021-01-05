import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [user, saveUser] = useState({
    email: "",
    password: "",
    username: "",
    confirm: "",
  });

  const { username, email, password, confirm } = user;

  const onChange = (e) => {
    saveUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Register a new Account</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              name="username"
              value={username}
              id="username"
              placeholder="Your username"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              value={email}
              id="email"
              placeholder="Your email"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Type your password"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirm">Confirm Passowrd</label>
            <input
              type="password"
              name="confirm"
              id="confirm"
              value={confirm}
              placeholder="Type your password"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              value="Register"
              className="btn btn-primario btn-block"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Already have an account
        </Link>
      </div>
    </div>
  );
};

export default Register;
