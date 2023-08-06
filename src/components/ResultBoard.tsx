import { useContext, useState } from "react";
import ChoosePlayer from "./ChoosePlayer";
import GameBox from "./GameBox";
import Title from "./Title";
import PlayerContext from "../context/PlayerContext";

function ResultBoard() {
  const { playerOneWins, playerTwoWins, tiesCount, playerOne, playerTwo } =
    useContext(PlayerContext);

  return (
    <div className="rounded-[12px] bg-transparent max-w-[500px] mx-auto border-4 border-yellow-500 flex flex-row items-center justify-between px-8 py-2 mt-8">
        <div className="flex items-center gap-2 border-r-2 border-r-yellow-500 pr-8">
          <img src={playerOne} alt="playerone" className="w-[52.5px]" />
          <p className="text-[60px] text-yellow-500 font-bold">{playerOneWins}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[60px] text-yellow-500 font-bold">{tiesCount}</p>
        </div>
        <div className="flex items-center gap-2 border-l-2 border-l-yellow-500 pl-8">
          <img src={playerTwo} alt="playerone" className="w-[52.5px] min-w-[52.5px] " />
          <p className="text-[60px] text-yellow-500 font-bold">{playerTwoWins}</p>
        </div>
    </div>
  );
}

export default ResultBoard;
