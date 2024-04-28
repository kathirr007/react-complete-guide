function App() {
  const { deriveActivePlayer, deriveWinner, deriveGameBoard } = useTicTacToeGame();
  // const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState<any[]>([]);
  const [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2'
  });

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSquareSelection(rowIndex: number, colIndex: number) {
    setGameTurns(((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];
      return updatedTurns;
    }));
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handleUpdatePlayers(playerSymbol: string, playerName: string) {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [playerSymbol]: playerName };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} onUpdatePlayer={handleUpdatePlayers} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} onUpdatePlayer={handleUpdatePlayers} />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        ) }
        <GameBoard onSelectSquare={handleSquareSelection} board={gameBoard} />
      </div>
      <Logs turns={gameTurns} />
    </main>
  );
}

export default App;
