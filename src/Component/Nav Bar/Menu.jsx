import React from "react";
import style from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  let navigate = useNavigate();
  let role = localStorage.getItem("role");
  let name = localStorage.getItem("userName");
  const handleLogout = () => {
    if (role === "author") {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("userName");
      navigate("/signinauthor");
    } else if (role === "user") {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("userName");
      navigate("/signin");
    } else if (role === "admin") {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("userName");
      navigate("/signinadmin");
    }
  };
  return (
    <div id={style.menu}>
      <p id={style.greet}>Hi {name}..</p>
      {role === "author" ? (
        <>
          <Link to={"/write_blog"}>
            <p>Write Blog</p>
          </Link>
          <Link to={"/myblogs"}>
            <p>My Blogs</p>
          </Link>
        </>
      ) : (
        ""
      )}
      <Link to={"/explore"}>
        <p>Explore</p>
      </Link>
      <Link>
        <p>Contact Us</p>
      </Link>
      {/* <Link to="/signin"> */}
      <button onClick={handleLogout}>Log out</button>
      {/* </Link> */}
    </div>
  );
};

export default Menu;
