import React, {PropTypes} from 'react'
import {Link} from 'react-router'

const App = ({children}) => (
  <div>
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
    {children}
  </div>
)

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
