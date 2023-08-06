import { useContext, useState } from "react";
import ChoosePlayer from "./ChoosePlayer";
import GameBox from "./GameBox";
import Title from "./Title";
import PlayerContext from "../context/PlayerContext";
import ResultBoard from "./ResultBoard";

function GameWrapper() {
  const {
    setPlayerOne,
    setPlayerTwo,
    playerOne,
    playerTwo,
    setPlayerOneWins,
    setPlayerTwoWins,
    setTiesCount,
    setPlayerOneMoves,
    setPlayerTwoMoves,
  } = useContext(PlayerContext);
  const [shouldStartGame, setShouldStartGame] = useState(false);

  const startGame = () => {
    if (!playerOne || !playerTwo) return;
    setShouldStartGame(true);
  };

  const newGame = () => {
    setPlayerOne("");
    setPlayerTwo("");
    setPlayerOneMoves([]);
    setPlayerTwoMoves([]);
    setShouldStartGame(false);
    setPlayerOneWins(0);
    setPlayerTwoWins(0);
    setTiesCount(0);
  };

  return (
    <div className="min-w-screen min-h-screen container md:px-8 px-4 mx-auto py-8">
      <Title
        title="TIC TOE GAME"
        subtitle="Let's chose your characters and play this awesome game! 🚀"
      />
      {!shouldStartGame ? (
        <div>
          <div className="flex justify-between max-w-[730px] flex-wrap mx-auto items-center gap-1 text-center">
            <ChoosePlayer
              onChoose={setPlayerOne}
              selectedPlayer={playerOne}
              oponentPlayer={playerTwo}
              title="Player 1:"
            />
            <ChoosePlayer
              onChoose={setPlayerTwo}
              selectedPlayer={playerTwo}
              oponentPlayer={playerOne}
              title="Player 2:"
            />
          </div>
          <div className="flex items-center justify-center mt-12">
            <button
              onClick={() => startGame()}
              className="transition-all ease-in-out duration-300 hover:bg-transparent hover:text-yellow-500 hover:border-yellow-500 bg-yellow-500 rounded-[12px] px-[16px] py-[4px] text-black border-black border-4 font-bold text-[32px]"
            >
              START
            </button>
          </div>
        </div>
      ) : null}
      {shouldStartGame ? (
        <div>
          <ResultBoard />
          <GameBox />
          <div className="flex items-center justify-center mt-12">
            <button
              onClick={() => newGame()}
              className="transition-all ease-in-out duration-300 hover:bg-transparent hover:text-yellow-500 hover:border-yellow-500 bg-yellow-500 rounded-[12px] px-[16px] py-[4px] text-black border-black border-4 font-bold text-[32px]"
            >
              NEW GAME
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default GameWrapper;
