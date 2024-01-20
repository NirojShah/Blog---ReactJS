import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import img1 from "../../../assets/corousal/Vidha.jpg";
import style from "./style.module.css";

const Corousal = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}
      isPlaying={true}
      interval={5000}
      playDirection="forward"
    >
      <Slider>
        <Slide index={0}>
          <div id={style.slide}>
            <img id={style.img} src={img1} alt="" />
            <h1>bengaluru</h1>
          </div>
        </Slide>
        <Slide index={1}>
          <div id={style.slide}>
            <img
              id={style.img}
              src="https://static.toiimg.com/photo/imgsize-409176,msid-90383441/90383441.jpg"
              alt=""
            />
            <h1>cubon park</h1>
          </div>
        </Slide>
        <Slide index={2}>
          <div id={style.slide}>
            <img
              src="https://www.royalorchidhotels.com/images/Blog/04_Jul_2022_05_13_10160317893-56a3befb5f9b58b7d0d394fe.jpg"
              alt=""
            />
            <h1>cubon park</h1>
          </div>
        </Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
};

export default Corousal;
