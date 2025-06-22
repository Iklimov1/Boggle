//things to work on:
// 1. make sure the countdown is not still running after the game is over into negative numbers
// 2. Cover the game pieces after game ends and blur out the game board but still make it accessible for after to check the words
// 3. align grid with a dictionary to show all words missed by the player
// 4. style the game board and make it look more appealing
// 5. allow the player to decide the size of the game board
// 6. allow the player to decide the duration of the game
// 7. fix start button issue, should not be able to click start button while game is in progress

import "./App.css";
import { Grid } from "./components/Grid";
import { useCallback, useState } from "react";
import { useTimer } from "./components/Timer";
// import { findAllPossibleWords } from "./WordFinder"; //
const cubeDefinitions = [
  ["A", "E", "A", "N", "E", "G"],
  ["A", "H", "S", "P", "C", "O"],
  ["A", "S", "P", "F", "F", "K"],
  ["O", "B", "J", "O", "A", "B"],
  ["I", "O", "T", "M", "U", "C"],
  ["R", "Y", "V", "D", "E", "L"],
  ["L", "R", "E", "I", "X", "D"],
  ["E", "I", "U", "N", "E", "S"],
  ["W", "N", "G", "E", "E", "H"],
  ["L", "N", "H", "N", "R", "Z"],
  ["T", "S", "T", "I", "Y", "D"],
  ["O", "W", "T", "O", "A", "T"],
  ["E", "R", "T", "T", "Y", "L"],
  ["T", "O", "E", "S", "S", "I"],
  ["T", "E", "R", "W", "H", "V"],
  ["N", "U", "I", "H", "M", "Qu"],
];

const shuffleCubes = () => {
  return cubeDefinitions.sort(() => Math.random() - 0.5);
};

function App() {
  const [cubes, setCubes] = useState(cubeDefinitions);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [duration, setDuration] = useState(90);
  // const [possibleWords, setPossibleWords] = useState([]); //

  const startGame = useCallback(() => {
    console.log("startGame");
    const shuffledCubes = cubeDefinitions.sort(() => Math.random() - 0.5);
    setCubes([...shuffledCubes]);
    // const words = findAllPossibleWords(shuffledCubes); //
    // setPossibleWords(words); //
    setIsGameStarted(true);
  }, []);

  const { Timer, counter } = useTimer({ isGameStarted, duration });

  const handleDurationChange = (e) => {
    const newDuration = parseInt(e.target.value, 10);
    setDuration(newDuration);
  };

  return (
    <div className="App">
      <h1>Boggle</h1>
      <div className={isGameStarted && counter > 0 ? "timer" : "hidden"}>
        {Timer}
      </div>
      <div className={`${counter === 0 ? "blur" : ""}`}>
        <Grid cubes={cubes} />
      </div>

      {counter > 0 ? null : <h1 className="gameover">Game Over</h1>}

      <button
        onClick={() => startGame()}
        className={isGameStarted && counter >= 0 ? "hidden" : ""}
      >
        Start Game
      </button>
      <div>
        Game Duration:
        <input
          class={isGameStarted && counter >= 0 ? "hidden" : "userTimer"}
          type="number"
          value={duration}
          onChange={handleDurationChange}
        />
      </div>
      {/* // class={isGameStarted && counter >= 0 ? "" : "hidden"} */}
      <button
        onClick={() => {
          setIsGameStarted(false);
        }}
        className={isGameStarted ? "" : "hidden"}
      >
        Reset
      </button>
      {/* {counter === 0 && (
        <div>
          <h2>Possible Words:</h2>
          <ul>
            {possibleWords.map((word) => (
              <li key={word}>{word}</li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
}

export default App;
