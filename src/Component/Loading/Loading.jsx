import React from "react";
import style from "./style.module.css";
import { PacmanLoader } from "react-spinners";
import Nav from "../Nav Bar/Nav";

const Loading = () => {
  return (
    <>
      <Nav />
      <div id={style.loading}>
        <PacmanLoader color="#36d7b7" />
      </div>
    </>
  );
};

export default Loading;
