import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header';
import DiscussionBar from './components/DiscussionBar';
import PostPane from './components/PostPane';
import ItemList from './components/ItemList';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    axios.get("http://localhost:5000/item/getAll").then(items => {
      this.setState({ data: items.data });
      console.log(items.data.reverse());
    }).catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <DiscussionBar />
        <PostPane func={this.getPosts}/>
        <ItemList data={this.state.data} func={this.getPosts}/>
      </div>
    );
  }

}