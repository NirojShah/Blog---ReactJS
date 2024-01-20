import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import style from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useSpring, animated } from "react-spring";



const Nav = () => {
  const navigate = useNavigate()
  const props = useSpring({
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: -50 },
    config: { duration: 300 },
  });

  const handleBack = ()=>{
    navigate(-1)
  }

  return (
    <animated.div id={style.navMain} style={props}>
      <div id={style.navBox}>
        <button id={style.back} onClick={handleBack}>{<IoMdArrowRoundBack/>}</button>
        <Link to="/home">
          <Logo />
        </Link>
        <Menu />
      </div>
    </animated.div>
  );
};

export default Nav;
