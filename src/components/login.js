import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData"));
    console.log("Data Retrieved");
    if (user) {
      navigate("/success");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked");
    if (userName === "" || password === "") {
      return;
    }
    const obj = {
      name: userName,
      password: password,
    };
    console.log("submit succesfully: ", obj);
    localStorage.setItem("userData", JSON.stringify(obj));
    navigate("/success");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">User Name</label>
            <input
              type="text"
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
          <div className="flex justify-between items-center mb-4">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
          <div className="flex justify-between">
            <button
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-600"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm">
            Not a member?
            <a href="/signup" className="text-blue-500 hover:underline">
              {" "}
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
