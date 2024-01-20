import React, { useState } from "react";
import style from "./style.module.css";
import { CiStar } from "react-icons/ci";
import "../../../index.css";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../Helper/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Ratinguser = (props) => {
  const token = localStorage.getItem("token");
  const { id } = useParams("id");
  let navigate = useNavigate();

  let [rate, setRate] = useState(1);

  const handleClick = async () => {
    try {
      let payload = {
        rating: +rate,
      };
      await axiosInstance.post(`/blogs/rating/${id}`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Rating Submitted", { position: "top-right" });
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      toast.error(error.response.data.data.msg);
    }
  };

  const handleChange = (e) => {
    setRate(e.target.value);
  };
  return (
    <div id={style.addRating}>
      <p id={style.rating}>Give your rating</p>

      <div className="ratingform">
        <form>
          <span className="star-rating star-5">
            <input
              type="radio"
              name="ratings"
              value="1"
              onChange={handleChange}
            />
            <i></i>
            <input
              type="radio"
              name="ratings"
              value="2"
              onChange={handleChange}
            />
            <i></i>
            <input
              type="radio"
              name="ratings"
              value="3"
              onChange={handleChange}
            />
            <i></i>
            <input
              type="radio"
              name="ratings"
              value="4"
              onChange={handleChange}
            />
            <i></i>
            <input
              type="radio"
              name="ratings"
              value="5"
              onChange={handleChange}
            />
            <i></i>
          </span>
        </form>
        <div id={style.btns}>
          {props.own === true ? (
            <button onClick={handleClick}>SUBMIT</button>
          ) : (
            <button id={style.disabled}>
              SUBMIT
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ratinguser;
