import React, { Component } from 'react';
import SearchContainer from "./SearchContainer"

class Home extends Component {
  render() {
    return (
      <div>
        <a href="/FemiList"><img id="femLogo" src="http://i.imgur.com/Pbfm6sX.png" /></a>
        <SearchContainer />
      </div>
    );
  }
}

export default Home;
