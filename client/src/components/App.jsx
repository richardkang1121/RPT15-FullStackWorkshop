import React, { Component } from 'react'
import $ from 'jquery'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [],
    }
  }

  componentDidMount() {
    $.get('http://localhost:3000/gifts', (data) => {
      console.log(data)
      this.setState({list: data})
    })
  }

  render() {
    return (
      <div>
        <h1>Christmas List</h1>
        <ul>
          {this.state.list.map((item) => {
            return <li key={item.id}>{item.gift}</li>
          })}
        </ul>
      </div>
    )
  }
}
