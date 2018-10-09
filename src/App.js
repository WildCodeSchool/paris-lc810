import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import Images from "./Images";
import Posts from './Posts';
import { AppBar, Tabs, Tab} from '@material-ui/core';

class App extends Component {

  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value: value })
  }

  render() {
    const { value } = this.state;
    return (
      <div className="App">

        <Header />
        <div >

          <AppBar position="static">
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="Posts" />
              <Tab label="Images" />
            </Tabs>
          </AppBar>
          {value === 0 && <Posts />}
          {value === 1 && <Images />}
        </div>
      </div>
    );
  }
}

export default App;
