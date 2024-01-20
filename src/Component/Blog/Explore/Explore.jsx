import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import Nav from "../../Nav Bar/Nav";
import { FaSearch } from "react-icons/fa";
import axiosInstance from "../../../Helper/axiosInstance";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading";

const Explore = () => {
  const token = localStorage.getItem("token");
  let [searchVal, setSearch] = useState("");
  let [searchRes, setSearchRes] = useState([]);
  let [allBlogs, setAllBlogs] = useState([]);
  let [page, setPage] = useState({
    limit: 0,
    page: 0,
    totalPages: 0,
    previous: 0,
    next: 0,
  });
  let [loadingV, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      let res = await axiosInstance.get("/blogs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAllBlogs(res.data.data.all_Blog);
      setPage({
        limit: res.data.limit,
        page: res.data.page,
        totalPages: res.data.totalPages,
        previous: res.data.previous,
        next: res.data.next,
      });
      setLoading(true);
    };
    fetchBlog();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };
  const handleSearch = async () => {
    try {
      const res = await axiosInstance.get(`/blogs?search=${searchVal}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSearchRes(res.data.data.all_Blog);
      console.log(page);
    } catch (error) {}
  };

  const handlePagination = async (next) => {
    console.log(next);
    let res = await axiosInstance.get(`/blogs?page=${next}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setPage({
      limit: res.data.limit,
      page: res.data.page,
      totalPages: res.data.totalPages,
      previous: res.data.previous,
      next: res.data.next,
    });
    setAllBlogs(res.data.data.all_Blog);
  };
  return (
    <>
      {loadingV ? (
        <div id={style.explore}>
          <Nav />
          <div id={style.searchBox}>
            <p>Find Blogs</p>
            <input type="text" onChange={handleChange} />
            <button type="button" onClick={handleSearch}>
              {<FaSearch id={style.icon} />}
            </button>
          </div>
          {searchRes.length >= 1 ? (
            <div id={style.searchMain}>
              <h1>Search Result</h1>
              <div id={style.searchRes}>
                {searchRes.map((val, key) => {
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
                        </div>
                        <div id={style.values}>
                          <p> {val.title}</p>
                          <p> {val.snippet}</p>
                          <p> {val.author.name}</p>
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
          ) : (
            ""
          )}
          <div id={style.allBlogs}>
            <h1>All Blogs</h1>
            <div id={style.blogss}>
              {allBlogs.map((val, key) => {
                return (
                  <div id={style.card} key={key}>
                    <div id={style.element}>
                      <div id={style.label}>
                        <p>
                          <span>Title</span>
                        </p>
                        <p>
                          <span>Snippet</span>
                        </p>
                        <p>
                          <span>Author</span>
                        </p>
                        <p>
                          <span>Rating</span>
                        </p>
                      </div>
                      <div id={style.values}>
                        <p> {val.title}</p>
                        <p> {val.snippet}</p>
                        <p> {val.author.name}</p>
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
            <div id={style.pagination}>
              {page.previous ? (
                <Link>
                  <button
                    onClick={() => {
                      handlePagination(page.previous);
                    }}
                  >
                    -
                  </button>
                </Link>
              ) : (
                ""
              )}
              <p>{page.page}</p>
              {page.next <= page.totalPages ? (
                <Link>
                  <button
                    type="button"
                    onClick={() => {
                      handlePagination(page.next);
                    }}
                  >
                    +
                  </button>
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Explore;
