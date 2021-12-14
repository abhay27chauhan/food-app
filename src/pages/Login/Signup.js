import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

import { submitUserRegisterDetails } from "api/register";

import "./Login.css";
import { useAuth } from "context/AuthProvider";

function Signup() {
  const history = useHistory();
  const { signUp } = useAuth();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState("");
  const [siginButtonDisabled, setSiginButtonDisabled] = useState(false);

  const handleSignup = async () => {
    setSiginButtonDisabled(true);
    try {
      let res = await submitUserRegisterDetails({
        name: name,
        email: email,
        password: password,
        confirmPassword: confirm,
      });
      if (res) {
        signUp(res);
        toast.success("user registered!!")
        history.push("/");
      } else {
        setSiginButtonDisabled(false);
      }
    } catch (err) {
      setSiginButtonDisabled(false);
      console.log(err);
    }
  };

  return (
    <div className="container-grey">
      <div className="form-container">
        <div className="h1Box">
          <h1 className="h1">SIGN UP</h1>
          <div className="line"></div>
        </div>
        <div className="loginBox">
          <div className="entryBox">
            <div className="entryText">Name</div>
            <input
              className="name input"
              type="text"
              name="Name"
              placeholder="Your Name"
              required=""
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="entryBox">
            <div className="entryText">Email</div>
            <input
              className="email input"
              type="email"
              name="Email"
              placeholder="Your Email"
              required=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="entryBox">
            <div className="entryText">Password</div>
            <input
              className="password input"
              type="password"
              name="Password"
              placeholder="**********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="entryBox">
            <div className="entryText">Confirm Password</div>
            <input
              className="confirmPassword input"
              type="password"
              name="ConfirmPassword"
              placeholder="**********"
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
          <button
            disabled={siginButtonDisabled}
            className="loginBtn form-button"
            type="submit"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
