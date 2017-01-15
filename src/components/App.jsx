import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../store'

const App = ({count, add, subtract}) => (
  <div>
    <button onClick={add}>+</button>
    <span>{count}</span>
    <button onClick={subtract}>-</button>
  </div>
)

const mapStateToProps = (state) => {
  return {
    count: state
  }
}

export default connect(
  mapStateToProps,
  actions
)(App);
