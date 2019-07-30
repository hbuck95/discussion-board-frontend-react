import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import DiscussionBar from './components/DiscussionBar';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
        <Header/>
        <DiscussionBar/>

    </div>
  );
}

export default App;
