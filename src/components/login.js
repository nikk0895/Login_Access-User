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
    <div className="container">
      <form>
        <h1 className="text-blue-300">Login</h1>

        <div className="form-container">
          <div className="field">
            <label>Username</label>
            <br />
            <input
              type="text"
              placeholder="Enter your Name"
              value={userName}
              required
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>

          <div className="field">
            <label>Password</label>
            <br />
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
          <button onClick={handleSubmit}>Submit</button>
          <br />
          <div className="anchor">
            <a id="forget-password" href="#">
              Forget Password?
            </a>
            <p>
              Not a Member?{" "}
              <a id="signup" href="/signup">
                Signup Now
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
