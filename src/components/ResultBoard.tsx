import { useContext, useEffect, useState } from "react";
import ChoosePlayer from "./ChoosePlayer";
import GameBox from "./GameBox";
import Title from "./Title";
import PlayerContext from "../context/PlayerContext";

function ResultBoard() {
  const { playerOneWins, playerTwoWins, tiesCount, playerOne, playerTwo } =
    useContext(PlayerContext);

  const [playerOneChanged, setPlayerOneChanged] = useState<boolean>(false);
  const [playerTwoChanged, setPlayerTwoChanged] = useState<boolean>(false);
  const [tiesChanged, setTiesChanged] = useState<boolean>(false);

  useEffect(() => {
    if (!playerOneChanged) {
      setPlayerOneChanged(true);
      setTimeout(() => {
        setPlayerOneChanged(false);
      }, 500);
    }
  }, [playerOneWins]);

  useEffect(() => {
    if (!playerTwoChanged) {
      setPlayerTwoChanged(true);
      setTimeout(() => {
        setPlayerTwoChanged(false);
      }, 500);
    }
  }, [playerTwoWins]);

  useEffect(() => {
    if (!tiesChanged) {
      setTiesChanged(true);
      setTimeout(() => {
        setTiesChanged(false);
      }, 500);
    }
  }, [tiesCount]);

  return (
    <div className="rounded-[12px] bg-transparent max-w-[500px] mx-auto border-4 border-yellow-500 flex flex-row items-center justify-between px-8 py-2 mt-8">
      <div className="relative flex items-center gap-2 border-r-2 border-r-yellow-500 pr-8">
        <img
          src={playerOne}
          alt="playerone"
          className="w-[52.5px] min-w-[52.5px]"
        />
        <p
          className={`${
            playerOneChanged ? "text-green-500 scale-125" : "sm:text-yellow-500 text-black"
          } sm:relative sm:top-auto w-[40px] h-[40px] sm:rounded-none sm:bg-transparent sm:w-auto sm:h-auto sm:border-0 rounded-full bg-yellow-500 border-4 border-black flex items-center justify-center sm:right-auto absolute top-[-8px] right-[9px] transform scale-100 sm:text-[60px] text-[28px] transition-all duration-1000 ease-in-out font-bold`}
        >
          {playerOneWins}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <p
          className={`${
            tiesChanged ? "text-yellow-900 scale-125" : "text-yellow-500"
          } transform scale-100 text-[60px] transition-all duration-1000 ease-in-out font-bold`}
        >
          {tiesCount}
        </p>
      </div>
      <div className="relative flex items-center gap-2 border-l-2 border-l-yellow-500 pl-8">
        <img
          src={playerTwo}
          alt="playerone"
          className="w-[52.5px] min-w-[52.5px]"
        />
        <p
          className={`${
            playerTwoChanged ? "text-green-500 scale-125" : "sm:text-yellow-500 text-black"
          } w-[40px] h-[40px] sm:rounded-none sm:bg-transparent sm:w-auto sm:h-auto sm:border-0 rounded-full bg-yellow-500 border-4 border-black flex items-center justify-center sm:relative absolute top-[-5px] right-[-22px] sm:top-auto sm:right-auto transform scale-100 sm:text-[60px] text-[32px] transition-all duration-1000 ease-in-out font-bold`}
        >
          {playerTwoWins}
        </p>
      </div>
    </div>
  );
}

export default ResultBoard;
