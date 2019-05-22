export const generateGrid = (size) =>
  [...Array(size ** 2).keys()].sort(() => Math.random() > 0.5 ? 1 : -1)
// [1,2,3,4,5,6,7,0,8] // easy to solve solution

// Convert a 1D array index into a 2D index
export const getCoords = (index, gridSize) => ({
  row: Math.floor(index / Math.sqrt(gridSize)),
  column: Math.floor(index % Math.sqrt(gridSize)),
})

export const isNextToEmptyCell = (index, emptyIndex, gridSize) => {
  const cellCoords = getCoords(index, gridSize)
  const emptyCoords = getCoords(emptyIndex, gridSize)

  const sameRow = cellCoords.row === emptyCoords.row
  const adjacentRow = Math.abs(cellCoords.row - emptyCoords.row) === 1
  const sameColumn = cellCoords.column === emptyCoords.column
  const adjacentColumn = Math.abs(cellCoords.column - emptyCoords.column) === 1
  return (sameRow && adjacentColumn) || (sameColumn && adjacentRow)
}

export const swap = (array, index, swapIndex) =>
  [array[index], array[swapIndex]] = [array[swapIndex], array[index]]
