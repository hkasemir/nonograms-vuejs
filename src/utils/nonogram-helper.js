import invariant from 'invariant';

function getTopClues(solution) {
  let consecutive = 0;
  const finalClues = new Array(solution[0].length).fill(true);
  return finalClues.map((column, colIndex) => {
    const columnClues = [];
    solution.forEach((row, rowIndex) => {
      const cell = row[colIndex];
      if (consecutive && !cell) {
        columnClues.push(consecutive);
        consecutive = 0;
      }
      if (cell) {
        consecutive += 1;
      }
      if (rowIndex === solution.length - 1) {
        if (consecutive || !columnClues.length) {
          columnClues.push(consecutive);
        }
      }
    });
    consecutive = 0;
    return columnClues;
  });
}

function getSideClues(solution) {
  return solution.map((row) => {
    let consecutive = 0;
    const rowClues = [];
    row.forEach((cell, index) => {
      if (consecutive && !cell) {
        rowClues.push(consecutive);
        consecutive = 0;
      }
      if (cell) {
        consecutive += 1;
      }
      if (index === row.length - 1) {
        if (consecutive || !rowClues.length) {
          rowClues.push(consecutive);
        }
      }
    });
    consecutive = 0;
    return rowClues;
  });
}

export default {
  composeClues(solution, position) {
    /*
     * solution - a two dimensional array of 1s and 0s indicating filled (1) or
     * empty (0) gameboard cells.
     *
     * position - whether the clues are positioned on the top or side of the
     * gameboard.
     *
     * returns clues - a two dimensional array of integers representing
     * consecutive filled squares.
     */
    invariant(solution, 'must provide a solution to compose clues');
    invariant(position, 'must provide clue position - top or side');
    switch (position) {
      case 'top':
        return getTopClues(solution);
      case 'side':
        return getSideClues(solution);
      default:
        return new Array(solution.length).fill(new Array(solution[0].length).fill(0));
    }
  },
  getBoardSizeOptions() {
    return [
      '5x5',
      '5x10',
      '10x10',
      '10x15',
      '15x15',
    ];
  },
  createBlankBoard(boardSize) {
    const [height, width] = boardSize.split('x');
    return new Array(parseInt(height, 10)).fill(new Array(parseInt(width, 10)).fill(0));
  },
};
