import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

const App = ({children, query}) => (
  <div>
    <div>
      <Link to={{pathname: '/', query}}>Home</Link>
      <Link to={{pathname: '/about', query}}>About</Link>
      <div>User: {query.user || 'Anonymous'}</div>
    </div>
    {children}
  </div>
)

App.propTypes = {
  children: PropTypes.object.isRequired,
  query: PropTypes.object
}

const mapStateToProps = (state, ownProps) => ({
  query: ownProps.location.query
})

export default connect(mapStateToProps)(App)
