import React, { Component } from 'react';
import Item from "./Item";
class Posts extends Component {

  state = {
    items: [],
    mounted : false
  };



  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(obj => this.setState({ items: obj, mounted: true }))

  }

  render() {
    console.log(this.state);
    return (
      <div>
        {/*!this.state.mounted && 'loading...'*/}
       {this.state.mounted ? '' : 'loading...'}
        {this.state.items.map((element, indexPoulet) =>
          <Item key={`list-${indexPoulet}`}
                title={element.title} />
        )}
      </div>
    )
  }
}

export default Posts;
