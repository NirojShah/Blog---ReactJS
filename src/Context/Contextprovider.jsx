import React from "react";
import authorContext from "./Authorcontext";
import axiosInstance from "../Helper/axiosInstance";

const Contextprovider = ({ children }) => {
  const authorName = async (id) => {
    let token = localStorage.getItem("token");
    let { data } = await axiosInstance.get("/blogs/author/" + id, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log(data.data.name)
    return data.data.name;
  };
  return (
    <authorContext.Provider value={authorName}>
      {children}
    </authorContext.Provider>
  );
};

export default Contextprovider;
