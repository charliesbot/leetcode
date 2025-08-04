/*
 * [79] Word Search
 *
 * Difficulty: TODO
 */

/*
 * Given a 2D board and a word, find if the word exists in the grid.
 *
 * The word can be constructed from letters of sequentially adjacent cell,
 * where "adjacent" cells are those horizontally or vertically neighboring.
 *
 * The same letter cell may not be used more than once.
 */
const dfs = (
  otherBoard: string[][],
  row: number,
  column: number,
  indexChar: number,
  word: string,
): boolean => {
  if (
    row < 0 ||
    row >= otherBoard.length ||
    column < 0 ||
    column >= otherBoard[row].length ||
    otherBoard[row][column] === '-' ||
    otherBoard[row][column] !== word[indexChar]
  ) {
    return false;
  }

  otherBoard[row][column] = '-';

  indexChar++;

  if (indexChar === word.length) {
    return true;
  }

  const result =
    dfs(otherBoard, row + 1, column, indexChar, word) ||
    dfs(otherBoard, row - 1, column, indexChar, word) ||
    dfs(otherBoard, row, column + 1, indexChar, word) ||
    dfs(otherBoard, row, column - 1, indexChar, word);

  otherBoard[row][column] = word[indexChar - 1];

  return result;
};

export const exist = (board: string[][], word: string): boolean => {
  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board[row].length; column++) {
      if (board[row][column] === word[0] && dfs(board, row, column, 0, word)) {
        return true;
      }
    }
  }

  return false;
};
