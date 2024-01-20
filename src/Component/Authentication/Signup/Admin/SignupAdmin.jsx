import React from "react";
import style from "./style.module.css";
import logoImg from "../../../../assets/logo transparent white.png";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../../../../Helper/axiosInstance";

const Signupadmin = () => {
  window.document.title= "xyz || Admin"
  let [userInp, setUserinp] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    role: "",
  });

  let { name, email, password, confirm_password, role } = userInp;

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUserinp({ ...userInp, [name]: value });
  };

  let handleSignup = async () => {
    let payload = {
      name,
      email,
      password,
      confirm_password,
      role,
    };
    console.log(payload);
    await axiosInstance.post("/admin/signup", payload);
    alert("done...")

  };

  return (
    <div id={style.signup}>
      <div id={style.signinbox}>
        <img src={logoImg} id={style.logoImg} alt="logo" />
        <h1>Welcome Back</h1>
        <p>To keep connected with us please login with your personal info</p>
        <Link to="/signinadmin">
          <button type="button">Sign In</button>
        </Link>
      </div>
      <div id={style.signupbox}>
        <h1>Create Account</h1>
        <div id={style.otheracc}>
          <p>Create account using networks</p>
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
            type="text"
            placeholder="User Name"
            name="name"
            onChange={handleChange}
          />
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
          <input
            type="text"
            placeholder="Confirm Password"
            name="confirm_password"
            onChange={handleChange}
          />
          <select name="role" id={style.select} onChange={handleChange}>
            <option value="">SELECT ROLE</option>
            <option value="admin">Admin</option>
            <option value="author">Author</option>
            <option value="user">User</option>
          </select>
          <button type="button" onClick={handleSignup}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signupadmin;
