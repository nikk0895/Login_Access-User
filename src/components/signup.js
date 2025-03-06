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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Sign up
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">User Name</label>
            <input
              type="text"
              // id="userName"
              placeholder="Enter your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={userName}
              required
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Confirm Password</label>
            <input
              type="confirm-password"
              placeholder="Enter your Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={confirmPassword}
              required
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-between">
            <button
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-600"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm">
            Already have a Account?
            <a href="/" className="text-blue-500 hover:underline">
              {" "}
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
