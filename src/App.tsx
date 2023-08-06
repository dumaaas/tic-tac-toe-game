import { useState } from "react";
import "./App.css";
import GameWrapper from "./components/GameWrapper";
import PlayerContext from "./context/PlayerContext";

function App() {
  const [playerOneMoves, setPlayerOneMoves] = useState<number[]>([]);
  const [playerTwoMoves, setPlayerTwoMoves] = useState<number[]>([]);
  const [gameDisabled, setGameDisabled] = useState<boolean>(false);
  const [playerOne, setPlayerOne] = useState<string>("");
  const [playerTwo, setPlayerTwo] = useState<string>("");
  const [playerOneWins, setPlayerOneWins] = useState<number>(0);
  const [playerTwoWins, setPlayerTwoWins] = useState<number>(0);
  const [tiesCount, setTiesCount] = useState<number>(0);
  const [shouldGameReset, setShouldGameReset] = useState<boolean>(false);
  const [winningCombination, setWinningCombination] = useState<number>(0);

  document.title ="Tic Tac Toe Game"; 
  
  return (
    <main className="bg-blue-600">
      <PlayerContext.Provider
        value={{
          playerOneMoves,
          setPlayerOneMoves,
          playerTwoMoves,
          setPlayerTwoMoves,
          gameDisabled,
          setGameDisabled,
          playerOne,
          setPlayerOne,
          playerTwo,
          setPlayerTwo,
          playerOneWins,
          setPlayerOneWins,
          playerTwoWins,
          setPlayerTwoWins,
          tiesCount,
          setTiesCount,
          shouldGameReset,
          setShouldGameReset,
          winningCombination,
          setWinningCombination,
        }}
      >
        <GameWrapper />
      </PlayerContext.Provider>
    </main>
  );
}

export default App;
