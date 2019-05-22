export const generateGrid = (size) =>
  [...Array(size ** 2).keys()].sort(() => Math.random() > 0.5 ? 1 : -1)
// [1,2,3,4,5,6,7,0,8] // easy to solve solution

// Convert a 1D array index into a 2D index
export const getCoords = (index, gridSize) => ({
  row: Math.floor(index / Math.sqrt(gridSize)),
  column: Math.floor(index % Math.sqrt(gridSize)),
})
