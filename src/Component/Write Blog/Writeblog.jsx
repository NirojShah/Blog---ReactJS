import React from "react";
import Nav from "../Nav Bar/Nav";
import style from "./style.module.css";
import { useState } from "react";
import axiosInstance from "../../Helper/axiosInstance";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSpring, animated } from "react-spring";

const Writeblog = () => {

  let token = localStorage.getItem("token");
  let navigate = useNavigate();
  let [blogData, setBlogData] = useState({
    title: "",
    snippet: "",
    description: "",
    price: "",
    image:null
  });

  let handleReset = () => {
    console.log("reset")
  };

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.type === "file" ? e.target.files[0] : e.target.value;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      let payload = {
        ...blogData,
      };
      console.log(payload);
      let response = await axiosInstance.post("/blogs/", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type':"multipart/form-data"
        },
      });
      toast.success("New Blog Created......", { position: "top-right" });
      setTimeout(() => {
        navigate("/myblogs");
      }, 3000);
    } catch (error) {
      toast.error(error.response.data.data.msg);
    }
  };


  return (
    <div id={style.writeblog}>
      <div id={style.select}></div>
      <Nav />
      <div id={style.writepage}>
        <div id={style.form}>
          <form action="" encType="multipart/form-data">
            <div>
              <h1>Write Blog</h1>
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
              />
              <input
                type="text"
                name="snippet"
                placeholder="Snippet"
                onChange={handleChange}
              />
              <input type="file" name="image" onChange={handleChange} />
              <input type="number" name="price" onChange={handleChange} />
              <textarea
                name="description"
                cols="30"
                rows="10"
                placeholder="Start writing blog from here"
                onChange={handleChange}
              ></textarea>
              <div id={style.btns}>
                <button type="button" onClick={handleSubmit}>
                  Done
                </button>
                <button type="reset" onClick={handleReset}>
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Writeblog;
