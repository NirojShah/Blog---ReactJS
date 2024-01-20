import React, { useEffect, useState } from "react";
import Nav from "../../Nav Bar/Nav";
import style from "./style.module.css";
import axiosInstance from "../../../Helper/axiosInstance";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading";

const MyBlogs = () => {
  let token = localStorage.getItem("token");
  let [myBlogs, setMyBlogs] = useState([]);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    let fetchMyBlogs = async () => {
      let { data } = await axiosInstance.get("/blogs/author", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMyBlogs(data.data.author_Blog);
      setLoading(true);
    };
    fetchMyBlogs();
  }, []);
  return (
    <>
      {loading ? (
        <div id={style.myblogs}>
          <div id={style.select}></div>
          <Nav />
          <div id={style.blogBox}>
            <h1>MY BLOGS</h1>
            <div id={style.cardBox}>
              {myBlogs.map((val, key) => {
                return (
                  <div id={style.card} key={key}>
                    <div id={style.element}>
                      <div id={style.label}>
                        <p>
                          <span>Title</span> <span>:</span>
                        </p>
                        <p>
                          <span>Snippet</span> <span>:</span>
                        </p>
                        <p>
                          <span>Author</span> <span>:</span>
                        </p>
                        <p>
                          <span>Rating</span> <span>:</span>
                        </p>
                        <p>
                          <span>Price</span> <span>:</span>
                        </p>
                      </div>
                      <div id={style.values}>
                        <p> {val.title}</p>
                        <p> {val.snippet}</p>
                        <p> {val.author.name}</p>
                        <p> {val.rating}</p>
                        <p>₹ {val.price}</p>
                      </div>
                    </div>
                    <div id={style.btns}>
                      <Link to={`/viewblog/${val._id}`}>
                        <button>View</button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default MyBlogs;
