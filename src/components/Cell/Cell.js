import React from 'react'
import PropTypes from "prop-types"

import './Cell.css'

const Cell = ({ index, number, onClick }) => (
  <button
    className={`cell ${index + 1 === number ? 'cell-valid' : ''} ${number === 0 ? 'cell-void' : ''}`}
    onClick={onClick}>
    {number}
  </button>
)

Cell.propTypes = {
  index: PropTypes.number,
  number: PropTypes.number,
  onClick: PropTypes.func,
}

export default Cell
