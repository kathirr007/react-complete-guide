function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing(wasEditing => !wasEditing);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? <input type="text" value={name} /> : <span className="player-name">{name}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
}

// export { Player };
export default Player;
