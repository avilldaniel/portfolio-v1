import { useState } from "react";
import Image from "next/image";
import sx from "../styles/Gif.module.css";
import bird from "../../public/gifs/bird.gif";
import donut from "../../public/gifs/donut.gif";
import office from "../../public/gifs/office.gif";
import { IconArrowBigLeft, IconArrowBigRight } from "@tabler/icons";

const GifSlider = () => {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    console.log("previous clicked.");
  };

  const nextSlide = () => {
    console.log("next clicked.");
  };

  return (
    <div className={sx["gif-container"]}>
      <button className={sx.left} onClick={previousSlide}>
        <IconArrowBigLeft />
      </button>

      {/* GIFs */}
      <Image src={bird} alt="bird GIF" height={360} width={240} />
      <Image src={donut} alt="donut GIF" height={360} width={240} />
      <Image src={office} alt="office GIF" height={360} width={240} />

      <button className={sx.right} onClick={nextSlide}>
        <IconArrowBigRight />
      </button>
    </div>
  );
};

export default GifSlider;
