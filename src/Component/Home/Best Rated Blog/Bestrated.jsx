import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../../../Helper/axiosInstance";
import style from "./style.module.css";
import authorContext from "../../../Context/Authorcontext";
import { Link } from "react-router-dom";

const Bestrated = () => {
  window.document.title = "HOME";

  let authorName = useContext(authorContext);

  let [allBlog, setAllBlog] = useState([]);
  let [author, setAuthor] = useState("");
  let token = localStorage.getItem("token");
  useEffect(() => {
    let fetchBlog = async () => {
      let bestRatedBlog = await axiosInstance.get(
        "/blogs?limit=6&sort=-rating",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(bestRatedBlog.data.data.all_Blog)
      setAllBlog(bestRatedBlog.data.data.all_Blog);
    };
    fetchBlog();
  }, []);

  return (
    <div id={style.bestRatedMain}>
      <h1>BEST RATED</h1>
      <div id={style.bestRated}>
        {allBlog.map((val, key) => {
          return (
            <div id={style.card} key={key}>
              <div id={style.element}>
                <div id={style.label}>
                  <p><span>Title</span> <span>:</span></p>
                  <p><span>Snippet</span> <span>:</span></p>
                  <p><span>Author</span> <span>:</span></p>
                  <p><span>Rating</span> <span>:</span></p>
                </div>
                <div id={style.values}>
                  <p> {val.title}</p>
                  <p> {val.snippet}</p>
                  <p> {val.author.name}</p>
                  {/* <p> : {author}</p> */}
                  {/* <p>{authorName(val.author)}</p> */}
                  <p> {val.rating}</p>
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
  );
};

export default Bestrated;
