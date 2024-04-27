import type { ChangeEvent } from 'react';

export function Player({ name, symbol }: { name: string;symbol: string }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing(wasEditing => !wasEditing);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setPlayerName((e.target as HTMLInputElement)?.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = <input aria-label="player name" type="text" value={playerName} onChange={e => handleChange(e)} />;
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button type="button" onClick={handleClick}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
}
