import type { ChangeEvent } from 'react';

interface PlayerArgs {
  name: string;
  symbol: string;
  isActive: boolean;
  onUpdatePlayer: Function;
}

export function Player({ name, symbol, isActive, onUpdatePlayer }: PlayerArgs) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleSave() {
    setIsEditing(wasEditing => !wasEditing);

    if (isEditing) {
      onUpdatePlayer(symbol, playerName);
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setPlayerName((e.target as HTMLInputElement)?.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = <input aria-label="player name" type="text" value={playerName} onChange={e => handleChange(e)} />;
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button type="button" onClick={handleSave}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
}
