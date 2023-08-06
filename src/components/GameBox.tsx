import { useState } from "react";
import ActionButton from "./ActionButton";

function GameBox() {
  const [countMoves, setCountMoves] = useState(0);

  return (
    <div className="cursor-pointer flex flex-wrap w-[368px] overflow-hidden mx-auto mb-8 mt-12 border-yellow-500 border-4 rounded-[20px]">
      {[...Array(9)].map((e, i) => (
        <ActionButton
          key={i}
          fieldName={i+1}
          countMoves={countMoves}
          setCountMoves={setCountMoves}
        />
      ))}
    </div>
  );
}

export default GameBox;
