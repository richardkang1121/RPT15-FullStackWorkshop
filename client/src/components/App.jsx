import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [],
    }
  }

  render() {
    return (
      <div>
        <h1>Christmas List</h1>
      </div>
    )
  }
}
