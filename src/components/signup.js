import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/signup.css";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  // const [isValid, setIsValid] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData"));
    console.log("Data Retrieved");
    if (user) {
      navigate("/success");
      console.log("in");
    } else console.log("out");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // setIsValid(emailRegex.test(e.target.value));

    if (userName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const obj = {
          name: userName,
          email: email,
          password: password,
          confirmpassword: confirmPassword,
        };
        console.log("data entered: ", obj);
        const user = { name: userName, password: password };
        localStorage.setItem("userData", JSON.stringify(user));
        console.log("Sign Up Successfully");
        navigate("/success");
      } else {
        console.log("ERR : Password & ConfirmPassword Must be SAME !");
      }
    } else {
      return;
    }
  };

  return (
    <div className="container">
      <form>
        <h1>Sign up</h1>

        <div className="field">
          <label>Username:</label>
          <input
            type="text"
            // id="userName"
            placeholder="Enter your Name"
            value={userName}
            required
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <label>Email: </label>
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {/* {!isValid && <p style={{ color: "red" }}>Invalid email format</p>} */}
        </div>
        <div className="field">
          <label>Password: </label>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <label>Confirm Password: </label>
          <input
            type="confirm-password"
            placeholder="Enter your Password"
            value={confirmPassword}
            required
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
        <p>
          Already have a Account?{" "}
          <a id="login" href="/">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
