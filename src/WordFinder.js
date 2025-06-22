// import words from "an-array-of-english-words";

// // Create a dictionary set for fast lookup
// const dictionary = new Set(words.map((word) => word.toLowerCase()));

// export function findAllPossibleWords(cubes) {
//   // Convert cubes into a 4x4 grid
//   const grid = [];
//   for (let i = 0; i < 4; i++) {
//     grid.push(cubes.slice(i * 4, (i + 1) * 4));
//   }

//   const foundWords = new Set();

//   // Depth-First Search (DFS) for word finding
//   function dfs(row, col, currentWord, visited) {
//     if (currentWord.length >= 3 && dictionary.has(currentWord.toLowerCase())) {
//       foundWords.add(currentWord.toUpperCase());
//     }

//     // Directions for adjacent cells (including diagonals)
//     const directions = [
//       [-1, -1],
//       [-1, 0],
//       [-1, 1],
//       [0, -1],
//       [0, 1],
//       [1, -1],
//       [1, 0],
//       [1, 1],
//     ];

//     for (let [dx, dy] of directions) {
//       const newRow = row + dx;
//       const newCol = col + dy;

//       if (
//         newRow >= 0 &&
//         newRow < 4 &&
//         newCol >= 0 &&
//         newCol < 4 &&
//         !visited.has(`${newRow},${newCol}`)
//       ) {
//         const newVisited = new Set(visited);
//         newVisited.add(`${newRow},${newCol}`);
//         dfs(newRow, newCol, currentWord + grid[newRow][newCol], newVisited);
//       }
//     }
//   }

//   // Start search from each cell
//   for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < 4; j++) {
//       dfs(i, j, grid[i][j], new Set([`${i},${j}`]));
//     }
//   }

//   return Array.from(foundWords);
// }
