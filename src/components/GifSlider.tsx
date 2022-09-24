import { useState } from "react";
import Image from "next/image";
import sx from "../styles/Gif.module.css";
import BtnSlider from "./BtnSlider";

const GifSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // Array of GIFs
  const gifTags = [
    <Image
      src="https://d1i3aib8o7oh3l.cloudfront.net/portfolio/auth.gif"
      alt="Fit app authentication demo"
      layout="fill"
      width={861}
      height={812}
      className={sx.gif}
      key={0}
    />,
    <Image
      src="https://d1i3aib8o7oh3l.cloudfront.net/portfolio/exers.gif"
      alt="Fit app stats demo"
      layout="fill"
      width={861}
      height={812}
      className={sx.gif}
      key={1}
    />,
    <Image
      src="https://d1i3aib8o7oh3l.cloudfront.net/portfolio/workout.gif"
      alt="Fit app workout demo"
      layout="fill"
      width={861}
      height={812}
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
