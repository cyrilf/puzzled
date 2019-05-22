import { generateGrid, getCoords } from './utils'

const Game = {
  init({ size }) {
    this.size = size
    this.grid = generateGrid(size)
    this.won = false

    return this.grid
  },

  reset() {
    return this.init({size: this.size })
  },

  isNextToEmptyCell(index, emptyIndex) {
    const cellCoords = getCoords(index, this.grid.length)
    const emptyCoords = getCoords(emptyIndex, this.grid.length)

    const sameRow = cellCoords.row === emptyCoords.row
    const adjacentRow = Math.abs(cellCoords.row - emptyCoords.row) === 1
    const sameColumn = cellCoords.column === emptyCoords.column
    const adjacentColumn = Math.abs(cellCoords.column - emptyCoords.column) === 1
    return (sameRow && adjacentColumn) || (sameColumn && adjacentRow)
  },

  swap(index, emptyIndex) {
    [this.grid[index], this.grid[emptyIndex]] = [this.grid[emptyIndex], this.grid[index]]
  },

  swapCell(index) {
    const emptyIndex = this.grid.indexOf(0)
    this.isNextToEmptyCell(index, emptyIndex) && this.swap(index, emptyIndex)

    return [this.grid, this.isWon()]
  },

  isWon() {
    this.won = this.grid
      .slice(0, this.grid.length - 1)
      .every((cell, index) => cell === index + 1)
    return this.won
  }
}

export default Game
