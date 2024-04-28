interface GameBoardArgs { onSelectSquare: Function; board: any[] }

export function GameBoard({ onSelectSquare, board }: GameBoardArgs) {
  /* const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex: number, colIndex: number) {
    setGameBoard(((prevBoard) => {
      const updatedBoard = [...prevBoard.map(innerArr => [...innerArr])];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    }));

    onSelectSquare();
  } */

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol: string, colIndex: number) => (
            // eslint-disable-next-line react/no-array-index-key
              <li key={colIndex}>
                <button type="button" onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={!!playerSymbol}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
