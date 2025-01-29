import React, { useState } from "react";
import "./css/login.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await Axios.post(`http://localhost:8080/api/user/login`, {
      // Replace with your Spring Boot server URL
      username: username,
      password: password,
    })
      .then((response) => {
        if (response.data) {
          navigate(`/userPage/${response.data.user_id}`); // Navigate with user_id if present in response
        } else {
          navigate("/userPage"); // If no user_id, redirect to a default user page
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
