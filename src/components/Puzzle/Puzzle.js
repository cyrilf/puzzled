import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Grid from '../Grid/Grid'
import game from '../../game'

class Puzzle extends Component {
  static propTypes = {
    size: PropTypes.number
  }

  static defaultProps = {
    size: 3
  }

  state = {
    grid: game.init({ size: this.props.size }),
    gameWon: false,
  }

  onCellClick = (index) => {
    const [grid, isWon] = game.swapCell(index)
    this.setState(() => ({ grid, gameWon: isWon }))
  }

  onNewPuzzle = () => {
    this.setState(() => ({ grid: game.reset(), gameWon: false }))
  }

  render() {
    const { grid, gameWon } = this.state

    return (
      <>
        { gameWon
          ? <div>Congrats!</div>
          : <Grid items={grid} onClick={this.onCellClick}/>
        }
        <button onClick={this.onNewPuzzle}>Restart</button>
      </>
    )
  }
}

export default Puzzle
