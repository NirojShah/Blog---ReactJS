import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import Nav from "../Nav Bar/Nav";
import axiosInstance from "../../Helper/axiosInstance";
import { Link, useNavigate, useParams } from "react-router-dom";
import StarRating from "./StarRating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSpring, animated } from "react-spring";
import Loading from "../Loading/Loading";

const Eachblog = () => {
  const props = useSpring({
    to: { opacity: 1, marginLeft: 0 },
    from: { opacity: 0, marginLeft: -500 },
    config: { duration: 300 },
  });

  const navigate = useNavigate();
  let { id } = useParams("id");
  let { reload } = useParams("reload");
  let token = localStorage.getItem("token");
  let role = localStorage.getItem("role");
  let [blog, setBlog] = useState({});
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    let fetchBlog = async () => {
      let blog = await axiosInstance.get(`/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBlog(blog.data.data.blog)
      setLoading(true);
    };
    fetchBlog();
  }, []);

  const handleDelete = async () => {
    try {
      let res = await axiosInstance.delete(`/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Deleted Successfull", { position: "top-right" });
      setTimeout(() => {
        navigate("/myblogs");
      }, 3000);
    } catch (error) {
      toast.error(error.response.data.data.msg);
    }
  };

  return (
    <>
      {loading ? (
        <div id={style.eachBlogMain}>
          <Nav />
          <animated.div id={style.blogData} style={props}>
            <div id={style.blog}>
              <h1 id={style.title}>{blog.title}</h1>
              {/* <img src={blog.image[0].dir} alt=""/> */}
              {/* <img
                src="C:\Users\nongky7627\Desktop\Express\PROJECTS\3. Blogs\Server\public\uploads\721434.jpg"
                alt=""
              /> */}
              <p id={style.description}>
                {blog.description}
                {blog.own === false ? <h3>Buy to read full blog......</h3>:""}
              </p>
            </div>
            <div id={style.rating}>
              <h1>Ratings</h1>
              <StarRating own={blog.own}/>
              {role === "author" ? (
                <div id={style.authorControls}>
                  <div id={style.btns}>
                    <Link to={`/blog/${id}`}>
                      <button>Update</button>
                    </Link>

                    <Link>
                      <button onClick={handleDelete}>Delete</button>
                    </Link>
                  </div>
                </div>
              ) : (
                <Link to={`/checkout/${id}`}>
                  {blog.own === false ? (
                    <button id={style.buy}>Buy Now</button>
                  ) : (
                    ""
                  )}
                </Link>
              )}
            </div>
          </animated.div>
          <ToastContainer />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Eachblog;
