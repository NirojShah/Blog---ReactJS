import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { useParams } from "react-router-dom";
import Nav from "../../Nav Bar/Nav";
import axiosInstance from "../../../Helper/axiosInstance";
import Loading from "../../Loading/Loading";
const Success = () => {
  let { id } = useParams();
  let [blog, setBlog] = useState({});
  let token = localStorage.getItem("token");
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    if (blog) {
      console.log("asdjf");
    }
    let fetchBlog = async () => {
      let fBlog = await axiosInstance.get(`/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBlog(fBlog.data.data.blog);
      setLoading(true);
      console.log(fBlog.data.data.blog.author.name);
    };
    fetchBlog();

    let sendData = async () => {
      await axiosInstance.get(`/payment/paid/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    };
    sendData();
  }, []);

  return (
    <div id={style.success}>
      {loading ? (
        <>
          <Nav />
          <div id={style.successMain}>
            <h1>payment Successfull.....</h1>

            <div id={style.blog}>
              <div id={style.label}>
                <p>Title</p>
                <p>Snippet</p>
                <p>Author</p>
              </div>
              <div id={style.values}>
                <p>{blog.title}</p>
                <p>{blog.snippet}</p>
                <p>{blog.author.name}</p>
              </div>
            </div>

            <h2>Thank You</h2>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Success;
