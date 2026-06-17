import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      toast.error("Please Signup First!");
      return;
    }

    if (
      loginData.email === savedUser.email &&
      loginData.password === savedUser.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      toast.success("Login Successful!");

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      toast.error("Invalid Email or Password!");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "450px" }}>
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control mb-3"
            value={loginData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control mb-3"
            value={loginData.password}
            onChange={handleChange}
          />

          <button className="btn btn-danger w-100">
            Login
          </button>
        </form>

        <p className="text-center mt-3">
          Don't have an account?{" "}
          <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;