import React from "react";
import style from "./style.module.css";
import logoImg from "../../../../assets/logo transparent white.png";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../../../../Helper/axiosInstance";


const Signinadmin = () => {
  window.document.title = "xyz  || Admin";
  let [userInp, setUserinp] = useState({
    email: "",
    password: "",
  });
  let { email, password } = userInp;

  let navigate = useNavigate();

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserinp({ ...userInp, [name]: value });
  };
  let handleLogin = async () => {
    let payload = {
      email,
      password,
    };
    let data = await axiosInstance.post("/admin/login", payload);
    let role = data.data.data.existingUser.role;
    let name = data.data.data.existingUser.name;
    let token = data.data.token;
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("userName", name);

    token ? navigate("/home") : alert("invalid credential");
  };
  return (
    <div id={style.signin}>
      <div id={style.signinbox}>
        <h1>log in to your account</h1>
        <div id={style.otheracc}>
          <p>Login in using networks</p>
          <div id={style.icons}>
            <AiFillGoogleCircle className={style.icon} />
            <FaFacebook className={style.icon} />
            <FaLinkedin className={style.icon} />
          </div>
        </div>

        <div id={style.or}>
          <div id={style.left}></div>
          <p>or</p>
          <div id={style.right}></div>
        </div>
        <form action="" id={style.form}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <button type="button" onClick={handleLogin}>
            sign in
          </button>
        </form>
      </div>
      <div id={style.signupbox}>
        <img src={logoImg} id={style.logoImg} alt="logo" />
        <h1>New Here?</h1>
        <p>Sign up and discover a great amount of new experiences</p>
        <Link to="/signupadmin">
          <button type="button">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Signinadmin;
