import Login from "./components/login.js";
import SignUp from "./components/signup.js";
import Success from "./components/success.js";
import Post from "./components/post.js";
// import Test from "./components/test.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  console.log("The values we feteched", user);

  return (
    <>
      <Router>
        <Routes>
          <Route Component={Login} path="/" />
          <Route Component={Success} path="/success" />
          <Route Component={SignUp} path="/signup" />
          {/* <Route Compnents={Test} path="/test" /> */}
          <Route Component={Post} path="/post" />
        </Routes>
      </Router>
    </>
  );
};

export default App;
