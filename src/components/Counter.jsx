import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/count'

const Counter = ({count, add, subtract}) => (
  <div>
    <button onClick={add}>+</button>
    <span>{count}</span>
    <button onClick={subtract}>-</button>
  </div>
)

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  add: PropTypes.func.isRequired,
  subtract: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    count: state
  }
}

export default connect(
  mapStateToProps,
  actions
)(Counter)
