import React from 'react'
import logoImg from "../../assets/logo transparent white.png"
import logoImg2 from "../../assets/logo transparent black.png"
import style from "./style.module.css"

const Logo = () => {
  return (
    <div id={style.logo}>
        <img id={style.logoImg} src={logoImg} alt="" />
    </div>
  )
}

export default Logo