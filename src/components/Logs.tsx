import React from 'react';

export function Logs({ turns }: { turns: any[] }) {
  return turns && (
    <ol id="log">
      {turns.map((turn, index) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player}
          {' '}
          selected
          {' '}
          {'<--> '}
          {turn.square.row}
          ,
          {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
