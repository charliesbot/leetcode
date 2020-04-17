var isValidSudoku = function(board: string[][]) {
  for (let i = 0; i < board.length; i++) {
    const set = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
    for (let j = 0; j < board[i].length; j++) {
      const current = board[i][j];

      if (current === ".") {
        continue;
      }

      if (!set.has(current)) {
        return false;
      }

      set.delete(current);
    }
  }

  for (let i = 0; i < board.length; i++) {
    const set = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
    for (let j = 0; j < board[i].length; j++) {
      const current = board[j][i];

      if (current === ".") {
        continue;
      }

      if (!set.has(current)) {
        return false;
      }

      set.delete(current);
    }
  }

  for (let row = 0; row < board.length; row += 3) {
    for (let column = 0; column < board.length; column += 3) {
      const set = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
      for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
          const current = board[row + y][column + x];
          if (current === ".") {
            continue;
          }

          if (!set.has(current)) {
            return false;
          }

          set.delete(current);
        }
      }
    }
  }

  return true;
};

const input = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

console.log(isValidSudoku(input));
