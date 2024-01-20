import React, { useEffect, useState } from "react";
import Nav from "../../Nav Bar/Nav";
import style from "./style.module.css";
import axiosInstance from "../../../Helper/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../../Loading/Loading";


const UpdateBlog = () => {
  let { id } = useParams();
const navigate = useNavigate()
  let token = localStorage.getItem("token");
  let [blogData, setBlogData] = useState({
    title: "",
    snippet: "",
    description: "",
    image: null,
  });
  let [loading,setLoading] = useState(false)

  let [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        let { data } = await axiosInstance.get(`/blogs/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBlog(data.data.blog);
        setBlogData(data.data.blog);
        setLoading(true)
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    fetchBlog();
  }, [id, token]);

  let handleReset = () => {
    setBlogData({
      title: "",
      snippet: "",
      description: "",
      image: null,
    });
  };

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.type === "file" ? e.target.files[0] : e.target.value;
    setBlogData({ ...blogData, [name]: value });
  };

  const { description, image, snippet, title } = blogData;

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let payload = {
        description,
        image,
        snippet,
        title,
      };

      const res = await axiosInstance.patch(`blogs/${id}`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type':"multipart/form-data"
        },
      });
      toast.success("Blog Updated...",{position:"top-right"})
      setTimeout(() => {
        navigate(`/viewblog/${id}`)
      }, 3000);

    } catch (error) {
      toast.error(error.msg,{position:"top-right"})
    }
  };

  return (
    <>
    {loading?<div id={style.writeblog}>
      <Nav />
      <div id={style.writepage}>
        <div id={style.form}>
          <form action="" encType="multipart/form-data" onSubmit={handleSubmit}>
            <div>
              <h1>Update Blog</h1>
              <input
                value={blogData.title}
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
              />
              <input
                value={blogData.snippet}
                type="text"
                name="snippet"
                placeholder="Snippet"
                onChange={handleChange}
              />
              <input type="file" name="image" onChange={handleChange} />
              <textarea
                value={blogData.description}
                name="description"
                cols="30"
                rows="10"
                placeholder="Start writing blog from here"
                onChange={handleChange}
              ></textarea>
              <div id={style.btns}>
                <button type="submit">
                  Update
                </button>
                <button type="reset" onClick={handleReset}>
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>:<Loading/>}
    </>
  );
};

export default UpdateBlog;
