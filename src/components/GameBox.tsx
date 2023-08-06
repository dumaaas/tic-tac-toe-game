import { useContext, useEffect, useState } from "react";
import ActionButton from "./ActionButton";
import PlayerContext from "../context/PlayerContext";

function GameBox() {
  const [countMoves, setCountMoves] = useState(0);
  const [animateLine, setAnimateLine] = useState(false);

  const { winningCombination } = useContext(PlayerContext);

  useEffect(() => {
    console.log(winningCombination, "HEJ TI?");
    if (winningCombination !== 0) setAnimateLine(true);
    else setAnimateLine(false);
  }, [winningCombination]);

  return (
    <div className="relative cursor-pointer flex flex-wrap sm:w-[368px] w-[284px] overflow-hidden mx-auto mb-8 mt-12 border-yellow-500 border-4 rounded-[20px]">
      {[...Array(9)].map((e, i) => (
        <ActionButton
          key={i}
          fieldName={i + 1}
          countMoves={countMoves}
          setCountMoves={setCountMoves}
        />
      ))}
      {winningCombination === 1 && (
        <div
          className={`${
            animateLine ? "width-animation-final-small" : "width-animation"
          }  top-[60px] left-[20px]  absolute h-[8px] bg-yellow-500 rounded-[8px] transform`}
        ></div>
      )}
      {winningCombination === 2 && (
        <div
          className={`${
            animateLine ? "width-animation-final-small" : "width-animation"
          }  top-[176px] rotate-90 left-[-99px] absolute h-[8px] bg-yellow-500 rounded-[8px] transform`}
        ></div>
      )}

      {winningCombination === 3 && (
        <div
          className={`${
            animateLine ? "width-animation-final-big" : "width-animation"
          }  top-[176px] rotate-45 left-0 absolute h-[8px] bg-yellow-500 rounded-[8px] transform`}
        ></div>
      )}
      {winningCombination === 4 && (
        <div
          className={`${
            animateLine ? "width-animation-final-small" : "width-animation"
          }  top-[176px] rotate-90 left-[19px] absolute h-[8px] bg-yellow-500 rounded-[8px] transform`}
        ></div>
      )}
      {winningCombination === 5 && (
        <div
          className={`${
            animateLine ? "width-animation-final-small" : "width-animation"
          }  top-[176px] rotate-90 left-[139px] absolute h-[8px] bg-yellow-500 rounded-[8px] transform`}
        ></div>
      )}
      {winningCombination === 6 && (
        <div
          className={`${
            animateLine ? "width-animation-final-big" : "width-animation"
          }  top-[176px] -rotate-45 left-0  absolute h-[8px] bg-yellow-500 rounded-[8px] transform`}
        ></div>
      )}
      {winningCombination === 7 && (
        <div
          className={`${
            animateLine ? "width-animation-final-small" : "width-animation"
          }  top-[180px] left-[20px]  absolute h-[8px] bg-yellow-500 rounded-[8px] transform`}
        ></div>
      )}
      {winningCombination === 8 && (
        <div
          className={`${
            animateLine ? "width-animation-final-small" : "width-animation"
          }  top-[300px] left-[20px]  absolute h-[8px] bg-yellow-500 rounded-[8px] transform`}
        ></div>
      )}
    </div>
  );
}

export default GameBox;
