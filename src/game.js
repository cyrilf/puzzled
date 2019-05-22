import { generateGrid, swap, isNextToEmptyCell } from './utils'

const Game = {
  init({ size, type = 'default' }) {
    this.size = size
    this.grid = generateGrid(size, type)
    this.won = false

    return this.grid
  },

  reset(type) { return this.init({size: this.size, type }) },

  swapCell(index) {
    const emptyIndex = this.grid.indexOf(0)
    isNextToEmptyCell(index, emptyIndex, this.grid.length) && swap(this.grid, index, emptyIndex)

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
