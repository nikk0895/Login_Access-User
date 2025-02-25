import React, { useEffect } from "react";
import "../styles/success.css";
import Test from "./test.js";
import Details from "./details.js";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userData"));
  console.log("The values we feteched", user);
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  const logout = () => {
    console.log("Logout button Clicked");
    localStorage.removeItem("userData");
    navigate("/");
  };
  return (
    <div className="success">
      <h1>
        Welcome <span>{user.name}</span>
      </h1>
      <div className="logo">
        <button onClick={logout}>Logout</button>
      </div>
      <div className="my">
        {/* <Details /> */}
        <Test />
      </div>
    </div>
  );
};

export default Success;
