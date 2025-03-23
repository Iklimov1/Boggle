//things to work on:
// 1. make sure the countdown is not still running after the game is over into negative numbers
// 2. Cover the game pieces after game ends and blur out the game board but still make it accessible for after to check the words
// 3. align grid with a dictionary to show all words missed by the player
// 4. style the game board and make it look more appealing

import "./App.css";
import { Grid } from "./components/Grid";
import { useCallback, useState } from "react";
import { useTimer } from "./components/Timer";

const cubeDefinitions = [
  ["A", "G", "E", "N", "E", "A"],
  ["A", "H", "S", "P", "C", "O"],
  ["A", "S", "P", "F", "F", "K"],
  ["O", "B", "J", "O", "A", "B"],
  ["I", "O", "T", "M", "U", "C"],
  ["R", "Y", "V", "D", "E", "L"],
  ["L", "R", "E", "I", "X", "D"],
  ["T", "E", "R", "W", "H", "V"],
  ["H", "E", "R", "I", "S", "N"],
  ["N", "U", "I", "H", "M", "Qu"],
  ["T", "E", "L", "P", "C", "I"],
  ["S", "F", "K", "A", "F", "P"],
  ["I", "E", "E", "H", "W", "V"],
  ["I", "D", "S", "Y", "T", "T"],
  ["E", "T", "I", "L", "I", "C"],
  ["M", "T", "O", "I", "C", "U"],
];

const shuffleCubes = () => {
  return cubeDefinitions.sort(() => Math.random() - 0.5);
};

function App() {
  const [cubes, setCubes] = useState(cubeDefinitions);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const startGame = useCallback(() => {
    console.log("startGame");
    const shuffledCubes = cubeDefinitions.sort(() => Math.random() - 0.5);
    setCubes([...shuffledCubes]);
    setIsGameStarted(true);
  }, []);

  const { Timer, counter } = useTimer({ isGameStarted });

  return (
    <div className="App">
      {/* html */}
      {counter > 0 ? null : (
        <h1
          style={{
            fontSize: "3rem",
            color: "red",
          }}
        >
          Game Over
        </h1>
      )}
      <Grid cubes={cubes} />

      <button onClick={() => startGame()}>Start Game</button>

      {Timer}
      <button
        onClick={() => {
          setIsGameStarted(false);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
