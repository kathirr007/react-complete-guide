import React from 'react';

export function GameOver({ winner, onRestart }: { winner: string; onRestart: Function }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner
        ? (
          <p>
            {winner}
            {' '}
            won!
          </p>
          )
        : <p>It's a draw</p> }

      <p>
        <button type="button" onClick={() => onRestart()}>Rematch!</button>
      </p>
    </div>
  );
}
