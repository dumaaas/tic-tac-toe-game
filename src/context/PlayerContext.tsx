import { createContext } from "react";

type PlayerState = {
  playerOneMoves: number[];
  setPlayerOneMoves: React.Dispatch<React.SetStateAction<number[]>>;
  playerTwoMoves: number[];
  setPlayerTwoMoves: React.Dispatch<React.SetStateAction<number[]>>;
  gameDisabled: boolean;
  setGameDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  playerOne: string;
  setPlayerOne: React.Dispatch<React.SetStateAction<string>>;
  playerTwo: string;
  setPlayerTwo: React.Dispatch<React.SetStateAction<string>>;
  playerOneWins: number;
  setPlayerOneWins: React.Dispatch<React.SetStateAction<number>>;
  playerTwoWins: number;
  setPlayerTwoWins: React.Dispatch<React.SetStateAction<number>>;
  tiesCount: number;
  setTiesCount: React.Dispatch<React.SetStateAction<number>>;
  shouldGameReset: boolean;
  setShouldGameReset: React.Dispatch<React.SetStateAction<boolean>>;
  winningCombination: number;
  setWinningCombination: React.Dispatch<React.SetStateAction<number>>;
};

const defaultPlayerState: PlayerState = {
  playerOneMoves: [],
  setPlayerOneMoves: () => {},
  playerTwoMoves: [],
  setPlayerTwoMoves: () => {},
  gameDisabled: false,
  setGameDisabled: () => {},
  playerOne: "",
  setPlayerOne: () => {},
  playerTwo: "",
  setPlayerTwo: () => {},
  playerOneWins: 0,
  setPlayerOneWins: () => {},
  playerTwoWins: 0,
  setPlayerTwoWins: () => {},
  tiesCount: 0,
  setTiesCount: () => {},
  shouldGameReset: false,
  setShouldGameReset: () => {},
  winningCombination: 0,
  setWinningCombination: () => {},
};

const PlayerContext = createContext(defaultPlayerState);

export default PlayerContext;
