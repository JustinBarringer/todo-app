import React from 'react'
import './index.css'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-title">My ToDo</div>
      </div>
    )
  }
}

export default Navbar