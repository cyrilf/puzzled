import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Grid from '../Grid/Grid'
import Controls from '../Controls/Controls'
import game from '../../game'
import './Puzzle.css'

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

  restart = (type) => { this.setState(() => ({ grid: game.reset(type), gameWon: false })) }

  render() {
    const { grid, gameWon } = this.state

    return (
      <>
        { gameWon
          ? <div className="congrats">Congrats!</div>
          : <Grid items={grid} onClick={this.onCellClick}/>
        }
        <Controls restart={this.restart}/>
      </>
    )
  }
}

export default Puzzle
