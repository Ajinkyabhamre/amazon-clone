import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const login = (event) => {
    event.preventDefault(); //this stops the refresh page
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in redirect to hompage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault(); //this stops the refresh page
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //Create a user and logged in, redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button onClick={login} type="submit" className="login__signinbutton">
            Sign In
          </button>
        </form>

        <p>
          By Signing-In yoe agree to Amazon's Conditions of Use & sale. Please
          see our privacy Notice, our cookies cookies notice and our
          Intrest-based Ads notice.
        </p>
        <button onClick={register} className="login__registerbutton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
