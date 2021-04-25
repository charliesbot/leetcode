/*
 * Given a matrix of m x n elements (m rows, n columns),
 * return all elements of the matrix in spiral order.
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) {
    return matrix;
  }
  const result = [];
  const itemsLength = matrix.length * matrix[0].length;
  let column = 0;
  let row = 0;
  const DIRECTION = {
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4
  };
  let limitBottom = 1;
  let currentDirection = DIRECTION.RIGHT;

  while (result.length < itemsLength) {
    result.push(matrix[row][column]);
    switch (currentDirection) {
      case DIRECTION.RIGHT: {
        if (column + row === matrix[0].length - 1) {
          currentDirection = DIRECTION.DOWN;
          row++;
        } else {
          column++;
        }
        break;
      }
      case DIRECTION.DOWN: {
        if (row === matrix.length - limitBottom) {
          currentDirection = DIRECTION.LEFT;
          limitBottom++;
          column--;
        } else {
          row++;
        }
        break;
      }
      case DIRECTION.LEFT: {
        if (column + row === matrix.length - 1) {
          currentDirection = DIRECTION.UP;
          row--;
        } else {
          column--;
        }
        break;
      }
      case DIRECTION.UP: {
        if (row - column === 1) {
          currentDirection = DIRECTION.RIGHT;
          column++;
        } else {
          row--;
        }
        break;
      }
    }
  }
  return result;
};

// const example = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// const example = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

const example = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

console.log(spiralOrder(example));
