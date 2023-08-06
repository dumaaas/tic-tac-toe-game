import { useContext, useEffect, useState } from "react";
import img1 from "../assets/cc2_preview_rev_1.png";
import img2 from "../assets/cc_preview_rev_1.png";
import img3 from "../assets/zek_preview_rev_1.png";
import PlayerContext from "../context/PlayerContext";

type ActionButtonProps = {
  countMoves: number;
  fieldName: number;
  setCountMoves: (n: number) => void;
};

function ActionButton({
  countMoves,
  fieldName,
  setCountMoves,
}: ActionButtonProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [imageButton, setImageButton] = useState("");

  const {
    playerOneMoves,
    setPlayerOneMoves,
    playerTwoMoves,
    setPlayerTwoMoves,
    gameDisabled,
    setGameDisabled,
    playerOne,
    playerTwo,
    playerTwoWins,
    setPlayerTwoWins,
    playerOneWins,
    setPlayerOneWins,
    tiesCount,
    setTiesCount,
    shouldGameReset,
    setShouldGameReset,
  } = useContext(PlayerContext);

  const isPlayerOneMove = countMoves % 2 === 0;

  const resetGame = () => {
    setPlayerOneMoves([]);
    setPlayerTwoMoves([]);
    setShouldGameReset(true);
    setGameDisabled(false);
  };

  useEffect(() => {
    if (shouldGameReset) {
      setTimeout(() => {
        setImageButton("");
        setIsClicked(false);
        setShouldGameReset(false);
      }, 200);
    }
  }, [shouldGameReset, setShouldGameReset]);

  const handlePress = () => {
    if (isClicked) return;
    setIsClicked(true);
    setCountMoves(countMoves + 1);
    isPlayerOneMove ? setImageButton(playerOne) : setImageButton(playerTwo);
    if (isPlayerOneMove) {
      let newMoves = [...playerTwoMoves];
      newMoves.push(fieldName);
      setPlayerTwoMoves(newMoves);
      if (countMoves > 3) {
        let isWin = checkWinningCombination(newMoves, winning);

        if (isWin) {
          setGameDisabled(true);
          setPlayerOneWins(playerOneWins + 1);
          setCountMoves(0);
          resetGame();
        } else {
          if (countMoves === 8) {
            setGameDisabled(true);
            setTiesCount(tiesCount + 1);
            setCountMoves(0);
            resetGame();
          }
        }
      }
    } else {
      let newMoves = [...playerOneMoves];
      newMoves.push(fieldName);
      setPlayerOneMoves(newMoves);
      if (countMoves > 3) {
        let isWin = checkWinningCombination(newMoves, winning);

        if (isWin) {
          setGameDisabled(true);
          setPlayerTwoWins(playerTwoWins + 1);
          setCountMoves(0);
          resetGame();
        } else {
          if (countMoves === 8) {
            setGameDisabled(true);
            setTiesCount(tiesCount + 1);
            setCountMoves(0);
            resetGame();
          }
        }
      }
    }
  };
  function checkWinningCombination(player: any, winning: any) {
    // Iteriramo kroz svaku pobjedničku kombinaciju
    for (let i = 0; i < winning.length; i++) {
      const currentCombination = winning[i];
      let isWinningCombination = true;

      // Provjeravamo svaki broj u pobjedničkoj kombinaciji
      for (let j = 0; j < currentCombination.length; j++) {
        const winningNumber = currentCombination[j];

        // Provjeravamo da li se broj nalazi u player1 nizu
        if (!player.includes(winningNumber)) {
          isWinningCombination = false;
          break; // Nema potrebe dalje provjeravati ovu kombinaciju
        }
      }

      // Ako je pronalazak kombinacije uspješan, vraćamo true
      if (isWinningCombination) {
        return true;
      }
    }

    // Ako nismo pronašli nijednu pobjedničku kombinaciju, vraćamo false
    return false;
  }

  // Testiranje funkcije s primjerom koji ste naveli
  const winning = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [4, 5, 6],
    [7, 8, 9],
  ];

  return (
    <div
      onClick={!gameDisabled ? () => handlePress() : () => null}
      className="w-[120px] h-[120px] border-yellow-500 border flex items-center justify-center"
    >
      {isClicked ? (
        <img src={imageButton} className="w-[60%]" alt="bate moj" />
      ) : null}
    </div>
  );
}

export default ActionButton;
