/*
 *  Given a keyboard like the ones that appear  on a TV screen and a word,
 *  print an optimal sequence of moves necessaries to type the word.
 *
 *  The possible moves are UP,DOWN,LEFT,RIGH,ENTER(to select a character).
 *  The starting point is always the top left corner.
*/

const keyboard = [
  ["a", "b", "c", "d", "e"],
  ["f", "g", "h", "i", "j"],
  ["k", "l", "m", "n", "o"],
  ["p", "q", "r", "s", "t"],
  ["u", "v", "w", "x", "y"],
  ["z"]
];

const coords = {};
let startFrom = keyboard[0][0];

function buildPath(char, hash) {
  let directions = "";
  while (char) {
    const { from, direction } = hash[char];
    if (from) {
      directions = direction + " " + directions;
    }
    char = from;
  }

  return directions + "@ ";
}

function setDirection(current, row, column, direction, hash, queue) {
  const value = keyboard[row] && keyboard[row][column];
  if (value && !hash[value]) {
    hash[value] = { from: current, direction };
    coords[value] = { row, column };
    queue.push(value);
  }
}

function bfs(char) {
  const queue = [startFrom];
  const hash = { [startFrom]: { from: undefined } };
  while (queue.length > 0) {
    const current = queue.shift();

    const { row, column } = coords[current];

    if (current === char) {
      startFrom = char;
      break;
    }

    setDirection(current, row - 1, column, "UP", hash, queue);
    setDirection(current, row + 1, column, "DOWN", hash, queue);
    setDirection(current, row, column + 1, "RIGHT", hash, queue);
    setDirection(current, row, column - 1, "LEFT", hash, queue);
  }
  return buildPath(char, hash);
}

const onScreenKeyboard = word => {
  coords[startFrom] = { row: 0, column: 0 };
  let result = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== " ") {
      result = result + bfs(word[i].toLowerCase());
    }
  }
  return result;
};

console.log(onScreenKeyboard("star wars"));
