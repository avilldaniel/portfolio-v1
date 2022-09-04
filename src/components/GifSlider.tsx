import { useState } from "react";
import Image from "next/image";
import sx from "../styles/Gif.module.css";
import bird from "../../public/gifs/bird.gif";
import donut from "../../public/gifs/donut.gif";
import office from "../../public/gifs/office.gif";
import BtnSlider from "./BtnSlider";

const GifSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // Array of GIFs
  const gifTags = [
    <Image
      src={bird}
      alt="bird GIF"
      height={360}
      width={240}
      className={sx.gif}
      key={0}
    />,
    <Image
      src={donut}
      alt="donut GIF"
      height={360}
      width={240}
      className={sx.gif}
      key={1}
    />,
    <Image
      src={office}
      alt="office GIF"
      height={360}
      width={240}
      className={sx.gif}
      key={2}
    />,
  ];

  // Button slider handlers
  const prevSlide = () => {
    setSlideIndex(slideIndex === 0 ? gifTags.length - 1 : slideIndex - 1);
  };
  const nextSlide = () => {
    setSlideIndex(slideIndex === gifTags.length - 1 ? 0 : slideIndex + 1);
  };

  return (
    <div className={sx["container-slider"]}>
      {/* GIF */}
      {gifTags.map((gif, i) => {
        return (
          <div
            key={i}
            className={
              slideIndex === i ? `${sx.slide} ${sx["active-gif"]}` : sx.slide
            }
          >
            {gif}
          </div>
        );
      })}

      {/* Button sliders */}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      {/* Dots */}
      <div className={sx.dots}>
        {gifTags.map((_, i) => {
          return (
            <div
              className={
                slideIndex === i ? `${sx.dot} ${sx["active-dot"]}` : sx.dot
              }
              key={i}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default GifSlider;
