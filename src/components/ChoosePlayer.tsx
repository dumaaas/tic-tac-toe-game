import img1 from "../assets/cc2_preview_rev_1.png";
import img2 from "../assets/cc_preview_rev_1.png";
import img3 from "../assets/zek_preview_rev_1.png";

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
  return (
    <div className="flex gap-2 justify-center flex-col items-center sm:mt-8 sm:mb-8 mx-auto my-4">
      <p className="text-[30px] text-yellow-500 font-bold">{title} </p>
      <div className="flex items-center justify-center gap-2">
        <div
          onClick={() => (oponentPlayer === img1 ? null : onChoose(img1))}
          className={`${
            selectedPlayer === img1
              ? "bg-yellow-500 border-black"
              : "bg-transparent border-yellow-500"
          } ${
            oponentPlayer === img1 ? "opacity-20 pointer-events-none" : ""
          } w-[100px] h-[100px] rounded-full border-4 cursor-pointer hover:bg-yellow-500 transition-all ease-in-out duration-300 hover:border-black flex items-center justify-center`}
        >
          <img className="w-[60%]" src={img1} alt="hej ti" />
        </div>
        <div
          onClick={() => (oponentPlayer === img2 ? null : onChoose(img2))}
          className={`${
            selectedPlayer === img2
              ? "bg-yellow-500 border-black"
              : "bg-transparent border-yellow-500"
          } ${
            oponentPlayer === img2 ? "opacity-20 pointer-events-none" : ""
          } w-[100px] h-[100px] rounded-full border-4 cursor-pointer hover:bg-yellow-500 transition-all ease-in-out duration-300 hover:border-black flex items-center justify-center`}
        >
          <img className="w-[60%]" src={img2} alt="hej ti" />
        </div>
        <div
          onClick={() => (oponentPlayer === img3 ? null : onChoose(img3))}
          className={`${
            selectedPlayer === img3
              ? "bg-yellow-500 border-black"
              : "bg-transparent border-yellow-500"
          } ${
            oponentPlayer === img3 ? "opacity-20 pointer-events-none" : ""
          } w-[100px] h-[100px] rounded-full border-4 cursor-pointer hover:bg-yellow-500 transition-all ease-in-out duration-300 hover:border-black flex items-center justify-center`}
        >
          <img className="w-[50%]" src={img3} alt="hej ti" />
        </div>
      </div>
    </div>
  );
}

export default ChoosePlayer;
