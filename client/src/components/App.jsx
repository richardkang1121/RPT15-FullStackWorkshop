import React from 'react';
import $ from 'jquery';

function List(props) {
  return (<div>
    <ol>
      {props.gifts.map((item, i) => {
        return <li key={i}>{`${item.name}  Price: $${item.price}`}
          <ul>
            <li></li>
          </ul>
        </li>
      })}
    </ol>
  </div>)
};

function Form(props) {
  return (<form onSubmit={props.submit}>
    <label>
      Gift Name:  <input type='text' name='name' placeholder='Enter the gift name.'></input>
    </label>
    <br />
    <label>
      Price:  <input type='number' name='price' placeholder='Enter the price of the gift.'></input>
    </label>
    <br />
    <label>
      Link to gift: <input type='text' name='url' placeholder='Enter a hyperlink to the gift.'></input>
    </label>
    <br />
    <label>
      Picture of gift:  <input type='text' name='image' placeholder='Enter an image of the gift.'></input>
    </label>
    <br />
    <input type='submit' value='Add to wishlist!'/>
  </form>)
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    $.get('http://localhost:3000/find', (data) => {
      this.setState({list: data});
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    $.post('http://localhost:3000/add', {
      name: e.target.name.value,
      price: e.target.price.value,
      url: e.target.url.value,
      image: e.target.image.value
    }, (data) => {
      this.setState({
        list: data
      });
    })
  }

  render() {
    let list;
    if (this.state.list.length === 0) {
      list = <p>There is currently nothing on your wishlist.</p>;
    } else {
      list = <List gifts={this.state.list} />;
    }
    return (<div>
      <h1>Christmas List</h1>
      <Form submit={this.handleSubmit.bind(this)}/>
      {list}
    </div>)
  }
}