import React, { useEffect, useState } from "react";
import Nav from "../../Nav Bar/Nav";
import { Link, useParams } from "react-router-dom";
import style from "./style.module.css";
import axiosInstance from "../../../Helper/axiosInstance";

const Checkout = () => {
  const { id } = useParams("id");
  const token = localStorage.getItem("token");
  const [blog, setBlog] = useState({});
  useEffect(() => {
    const fetchBlog = async () => {
      const { data } = await axiosInstance.get(`/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBlog(data.data.blog);
    };
    fetchBlog();
    setTimeout(() => {}, 2000);
  }, []);

  console.log(id)

  const handlePayment = async () => {
    try {
      const res = await axiosInstance.post(
        `/payment/create-checkout-session/${blog._id}`,
        null,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div id={style.checkoutMain}>
      <Nav />
      <div id={style.checkoutBox}>
        <h1>BUY NOW</h1>

        <div id={style.card}>
          <div id={style.element}>
            <div id={style.label}>
              <p>
                <span>Title</span> <span>:</span>
              </p>
              <p>
                <span>Snippet</span> <span>:</span>
              </p>
              {/* <p>
                        <span>Author</span> <span>:</span>
                      </p> */}
              <p>
                <span>Rating</span> <span>:</span>
              </p>
              <p>
                <span>Price</span> <span>:</span>
              </p>
            </div>
            <div id={style.values}>
              <p> {blog.title}</p>
              <p> {blog.snippet}</p>
              {/* <p> {blog.author.name}</p> */}
              <p> {blog.rating}</p>
              <p> {blog.price}</p>
            </div>
          </div>
          <div id={style.btns}>
              {/* <button onClick={handlePayment}>Proceed</button> */}
              <form
                action={`http://localhost:5000/app/v1/payment/create-checkout-session/${id}`}
                method="POST"
              >
                <button id={style.buy} type="submit">Proceed to buy...</button>
              </form>
          </div>
        </div>
      </div>
      <div id={style.instructions}>
        <h1>instructions</h1>
        <p>
          <strong>Enter Card Details</strong>: Enter your card details,
          including the card number, expiration date, CVC (Card Verification
          Code), and billing address if required.
        </p>
        <p>
          <strong>Complete Payment</strong>: Click the "Pay" or "Complete
          Purchase" button to submit your payment information.
        </p>
        <p>
          <strong>Processing Payment</strong>: Your payment will be securely
          processed by Stripe. This may take a few moments..
        </p>
        <p>
          <strong>Payment Confirmation</strong>: Once the payment is processed
          successfully, you will receive a confirmation message indicating that
          your payment was successful.
        </p>
        <p>
          <strong>Receipt or Confirmation</strong>: You may receive a receipt or
          confirmation email for your payment, depending on the settings of the
          website or application.
        </p>
        <p>
          <strong>Refunds and Disputes</strong>: If you need a refund or want to
          dispute a charge, please contact our support team for further
          assistance.
        </p>
      </div>
    </div>
  );
};

export default Checkout;
