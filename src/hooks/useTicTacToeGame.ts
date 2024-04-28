import { WINNING_COMBINATIONS } from '@/winning-combinations';

export function useTicTacToeGame() {
  const INITIAL_GAME_BOARD: any[] = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  function deriveActivePlayer(turns: any[]): string {
    let currentPlayer = 'X';

    if (turns.length && turns[0].player === 'X') {
      currentPlayer = 'O';
    }
    return currentPlayer;
  }

  function deriveWinner(gameBoard: any[], players: { X: string; O: string }) {
    let winner: string = '';

    for (const combination of WINNING_COMBINATIONS) {
      const firstSquareSymbol: 'X' | 'O' = gameBoard[combination[0].row][combination[0].column];
      const secondSquareSymbol: 'X' | 'O' = gameBoard[combination[1].row][combination[1].column];
      const thirdSquareSymbol: 'X' | 'O' = gameBoard[combination[2].row][combination[2].column];

      if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
        winner = players[firstSquareSymbol];
      }
    }

    return winner;
  }

  function deriveGameBoard(gameTurns: any[]) {
    const gameBoard = [...INITIAL_GAME_BOARD.map(arr => [...arr])];

    for (const turn of gameTurns) {
      const { square: { row, col }, player } = turn;

      gameBoard[row][col] = player;
    }

    return gameBoard;
  }

  return {
    WINNING_COMBINATIONS,
    initialGameBoard: INITIAL_GAME_BOARD,
    deriveActivePlayer,
    deriveWinner,
    deriveGameBoard
  };
}
