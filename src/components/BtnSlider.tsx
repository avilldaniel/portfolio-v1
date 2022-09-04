import sx from "../styles/Gif.module.css";
import { IconArrowBigLeftLines, IconArrowBigRightLines } from "@tabler/icons";

interface IBtnSlider {
  moveSlide: () => void;
  direction: string;
}
const BtnSlider = ({ moveSlide, direction }: IBtnSlider) => {
  return (
    <button
      className={direction === "next" ? sx.next : sx.prev}
      onClick={moveSlide}
    >
      {direction === "next" ? (
        <IconArrowBigRightLines />
      ) : (
        <IconArrowBigLeftLines />
      )}
    </button>
  );
};

export default BtnSlider;
