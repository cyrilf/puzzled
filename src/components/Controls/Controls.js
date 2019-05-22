import React from 'react'
import PropTypes from 'prop-types'

import './Controls.css'

const Controls = ({ restart }) => (
  <div className="controls">
    <button onClick={restart}>Restart</button>
  </div>
)
Controls.propTypes = {
  restart: PropTypes.func,
}

export default Controls
