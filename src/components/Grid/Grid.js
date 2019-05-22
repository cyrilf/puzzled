import React from 'react'
import PropTypes from 'prop-types'

import Cell from '../Cell/Cell'
import './Grid.css'

const Grid = ({ items, onClick }) => {
  return (
    <div className="grid">
      {items.map((item, index) => (
        <Cell
          key={index}
          index={index}
          number={item}
          onClick={() => onClick(index)}/>
      ))}
    </div>
  )
}
Grid.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
}


export default Grid
