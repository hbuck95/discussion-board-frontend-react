import React from 'react';
import './App.css';

import Header from './components/Header';
import DiscussionBar from './components/DiscussionBar';
import PostPane from './components/PostPane'

function App() {
  return (
    <div className="App">
        <Header/>
        <DiscussionBar/>
        <PostPane/>

    </div>
  );
}

export default App;
