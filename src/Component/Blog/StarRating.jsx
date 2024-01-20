import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import axiosInstance from "../../Helper/axiosInstance";
import { useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import Ratinguser from "./Ratings User/Ratinguser";

const StarRating = (props) => {
  let { id } = useParams("id");
  let token = localStorage.getItem("token");
  let role = localStorage.getItem("role");
  let [ratings, setRatings] = useState([]);
  let [ratingE, setRatingE] = useState([1, 2, 3, 4, 5]);
  useEffect(() => {
    let fetchRating = async () => {
      let ratingsFetched = await axiosInstance(`/blogs/rating/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRatings(ratingsFetched.data.data.ratings);
    };
    fetchRating();
  }, []);

  return (
    <div id={style.starRating}>
      <div id={style.fetchRating}>
        {ratings.map((rate, key) => {
          return (
              <div id={style.ratingEach} key={key}>
                <div id={style.starBoxE}>
                {ratingE.map((x) => {
                  return x <= rate.ratings ?<CiStar id={style.star}/> : "";
                })}
                </div>
                <p>{rate.user.name}</p>
              </div>
          );
        })}
      </div>
      {role === "user" ? <Ratinguser own={props.own}/> : null}
    </div>
  );
};

export default StarRating;
