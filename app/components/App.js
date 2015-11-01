import React from 'react'
import {Link}  from 'react-router'

class App extends React.Component {
  render() {
    console.log(7777);
    return (
      <div>
        <div style={{ padding: 20,backgroundColor:"red" }}>
        <Link to="/list">list</Link>
        <Link to="/messages">messages</Link>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
