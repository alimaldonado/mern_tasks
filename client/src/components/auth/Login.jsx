import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, saveUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

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
        <h1>Login to your Account</h1>
        <form onSubmit={onSubmit}>
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
            <input
              type="submit"
              value="Login"
              className="btn btn-primario btn-block"
            />
          </div>
        </form>
        <Link to={"/register"} className="enlace-cuenta">
          Get account
        </Link>
      </div>
    </div>
  );
};

export default Login;
