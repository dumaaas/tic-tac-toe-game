import img1 from "../assets/toma.png";
import img2 from "../assets/ckemi.png";
import img3 from "../assets/zeko.png";
import img4 from "../assets/lemi.png";
import img5 from "../assets/mrki.png";
import img6 from "../assets/duma.png";
import Slider from "react-slick";

type ChoosePlayerProps = {
  title: string;
  onChoose: (img: string) => void;
  selectedPlayer: string;
  oponentPlayer: string;
};

function ChoosePlayer({
  title,
  onChoose,
  selectedPlayer,
  oponentPlayer,
}: ChoosePlayerProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <div className="!flex gap-2 justify-center !flex-col items-center sm:mt-8 sm:mb-8 mx-auto my-4">
      <p className="text-[30px] text-yellow-500 font-bold">{title} </p>
      <div className="!flex items-center justify-center gap-2"></div>
      <Slider {...settings}>
        <div
          onClick={() => (oponentPlayer === img2 ? null : onChoose(img2))}
          className={`${
            selectedPlayer === img2
              ? "bg-yellow-500 border-black"
              : "bg-transparent border-yellow-500"
          } ${
            oponentPlayer === img2 ? "opacity-20 pointer-events-none" : ""
          } !w-[100px] h-[100px] rounded-full border-4 cursor-pointer hover:bg-yellow-500 transition-all ease-in-out duration-300 hover:border-black !flex items-center justify-center`}
        >
          <img className="w-[60%]" src={img2} alt="hej ti" />
        </div>
        <div
          onClick={() => (oponentPlayer === img1 ? null : onChoose(img1))}
          className={`${
            selectedPlayer === img1
              ? "bg-yellow-500 border-black"
              : "bg-transparent border-yellow-500"
          } ${
            oponentPlayer === img1 ? "opacity-20 pointer-events-none" : ""
          } !w-[100px] h-[100px] rounded-full border-4 cursor-pointer hover:bg-yellow-500 transition-all ease-in-out duration-300 hover:border-black !flex items-center justify-center`}
        >
          <img className="w-[55%]" src={img1} alt="hej ti" />
        </div>
        <div
          onClick={() => (oponentPlayer === img4 ? null : onChoose(img4))}
          className={`${
            selectedPlayer === img4
              ? "bg-yellow-500 border-black"
              : "bg-transparent border-yellow-500"
          } ${
            oponentPlayer === img4 ? "opacity-20 pointer-events-none" : ""
          } !w-[100px] h-[100px] rounded-full border-4 cursor-pointer hover:bg-yellow-500 transition-all ease-in-out duration-300 hover:border-black !flex items-center justify-center`}
        >
          <img className="w-[60%]" src={img4} alt="hej ti" />
        </div>
        <div
          onClick={() => (oponentPlayer === img3 ? null : onChoose(img3))}
          className={`${
            selectedPlayer === img3
              ? "bg-yellow-500 border-black"
              : "bg-transparent border-yellow-500"
          } ${
            oponentPlayer === img3 ? "opacity-20 pointer-events-none" : ""
          } !w-[100px] h-[100px] rounded-full border-4 cursor-pointer hover:bg-yellow-500 transition-all ease-in-out duration-300 hover:border-black !flex items-center justify-center`}
        >
          <img className="w-[58%]" src={img3} alt="hej ti" />
        </div>
        <div
          onClick={() => (oponentPlayer === img5 ? null : onChoose(img5))}
          className={`${
            selectedPlayer === img5
              ? "bg-yellow-500 border-black"
              : "bg-transparent border-yellow-500"
          } ${
            oponentPlayer === img5 ? "opacity-20 pointer-events-none" : ""
          } !w-[100px] h-[100px] rounded-full border-4 cursor-pointer hover:bg-yellow-500 transition-all ease-in-out duration-300 hover:border-black !flex items-center justify-center`}
        >
          <img className="w-[58%]" src={img5} alt="hej ti" />
        </div>
        <div
          onClick={() => (oponentPlayer === img6 ? null : onChoose(img6))}
          className={`${
            selectedPlayer === img6
              ? "bg-yellow-500 border-black"
              : "bg-transparent border-yellow-500"
          } ${
            oponentPlayer === img6 ? "opacity-20 pointer-events-none" : ""
          } !w-[100px] h-[100px] rounded-full border-4 cursor-pointer hover:bg-yellow-500 transition-all ease-in-out duration-300 hover:border-black !flex items-center justify-center`}
        >
          <img className="w-[60%]" src={img6} alt="hej ti" />
        </div>
      </Slider>
    </div>
  );
}

export default ChoosePlayer;
