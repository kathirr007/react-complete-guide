function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <CommonPlayer name="Player 1" symbol="X" />
          <CommonPlayer name="Player 2" symbol="O" />
        </ol>
      </div>
    </main>
  );
}

export default App;
