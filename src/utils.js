// Generate a grid based on the size
// - type default is the default behavior
// - type easy generate a grid solvable in 1 move
export const generateGrid = (size, type = 'default') => {
  let grid = [...Array(size ** 2).keys()]

  if (type === 'easy') {
    grid = grid.slice(1, size ** 2)
    return [...grid.slice(0, grid.length - 1), 0, grid[grid.length - 1]]
  }

  return grid.sort(() => Math.random() > 0.5 ? 1 : -1)
}

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
