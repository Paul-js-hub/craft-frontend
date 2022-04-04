import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegisterUser = (e) => {
    e.preventDefault();
    axios
      .post(
        process.env.REACT_APP_API_URL + "/register",
        { email, password },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((response) => {
        const message = response.data.message;
        toast.success(message);
        if (message === "Account registered successfully") {
          navigate("/login");
        }
      })
      .catch((err) => {
        const message = err.response.data.message;
        toast.error(message);
      });
  };

  return (
    <figure className="h-screen flex bg-gray-100">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
        <blockquote className="text-2xl font-medium text-center">
          <p className="text-lg font-semibold">Welcome to Todo App</p>
        </blockquote>

        <div className="text-primary m-6">
          <div className="flex items-center mt-3 justify-center">
            <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
              Signup to add Your Todos
            </h1>
          </div>
          <form>
            <label className="text-left">Email:</label>
            <input
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <label>Password:</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <div className="flex items-center mt-3 justify-center">
              <button
                className={
                  "bg-teal-500 hover:bg-teal-700 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
                }
                value="Register"
                onClick={(e) => handleRegisterUser(e)}
              >
                Register
              </button>
            </div>
          </form>
          <div className="flex items-center mt-3 justify-center">
            <NavLink to="/login">
              <button
                className={"justify-center text-teal-500 hover:underline"}
              >
                Already have an account? Login here
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default Register;
