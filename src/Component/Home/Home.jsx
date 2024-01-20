import React, { useState } from "react";
import style from "./style.module.css";
import Nav from "../Nav Bar/Nav";
import Corousal from "./Corousal/Corousal";
import Bestrated from "./Best Rated Blog/Bestrated";
import Loading from "../Loading/Loading";

const Home = () => {
  window.document.title="CC || Home"
  const token = localStorage.getItem("token");
  let [loading,setLoading] = useState(false)

  useState(()=>{
    function loading(){
      setTimeout(()=>{
        setLoading(true)
      },5000)
    }
    loading()
  },[])

  return (
    <>
    {loading?<div id={style.home}>
      {token ? (
        <>
          <Nav />
          <div id={style.corousal5}>
            <Corousal />
          </div>
          <Bestrated/>
        </>
      ) : (
        <h1>YOU HAVE TO LOGIN FIRST ..... BYE</h1>
      )}
    </div>:<Loading/>}
    </>
  );
};

export default Home;
