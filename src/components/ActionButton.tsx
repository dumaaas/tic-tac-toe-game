import { useContext, useEffect, useState } from "react";
import PlayerContext from "../context/PlayerContext";
import crossImg from "../assets/cross.png";

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
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [imageButton, setImageButton] = useState<string>("");
  const [hoverImageButton, setHoverImageButton] = useState<string>("");
  const [isCross, setIsCross] = useState<boolean>(false);

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
    setWinningCombination,
  } = useContext(PlayerContext);

  const isPlayerOneMove = countMoves % 2 === 0;

  useEffect(() => {
    if (isPlayerOneMove) setHoverImageButton(playerOne);
    else setHoverImageButton(playerTwo);
  }, [isPlayerOneMove]);

  const resetGame = () => {
    setTimeout(() => {
      setGameDisabled(false);
      setPlayerOneMoves([]);
      setPlayerTwoMoves([]);
      setShouldGameReset(true);
      setWinningCombination(0);
    }, 1200);
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
    isPlayerOneMove ? setIsCross(true) : setIsCross(false);
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
        setWinningCombination(i + 1);
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
      className={`${
        !isClicked ? "hover:bg-blue-500" : ""
      } relative group transition-all ease-in-out duration-300 sm:w-[120px] sm:h-[120px] w-[92px] h-[92px] border-yellow-500 border flex items-center justify-center`}
    >
      {isClicked ? (
        <>
          <img
            src={imageButton}
            className="select-none w-[60%] pointer-events-none opacity-60"
            alt="bate moj"
          />
          {isCross ? (
            <img
              src={crossImg}
              className="select-none w-full pointer-events-none absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
              alt="bate moj"
            />
          ) : (
            <div className="w-[80px] h-[80px] rounded-full border-[10px] border-green-500 bg-transparent absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"></div>
          )}
        </>
      ) : null}
      {!isClicked ? (
        <img
          src={hoverImageButton}
          className="select-none pointer-events-none absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-[60%] opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300"
          alt="bate moj"
        />
      ) : null}
    </div>
  );
}

export default ActionButton;
