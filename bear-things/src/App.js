import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from 'react-tooltip';
import * as V from 'victory';


import bears from './rilak-lemons.gif';
import lemonade from './lemonade.png';
import cookingMama from './cooking_mama.jpeg';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        page: "home"
    };
  }

  render() {
    console.log(this.state.page);
    return (
      <div>
        {this._getPage(this.state.page)};
      </div>
    );
  }

  _getPage(currentState) {
    switch (currentState) {
      case "home":
        return (
          <div>
            <Welcome />
            <button className="button" onClick={() => {this._handleClick("recipe")}}>View Lemonade Recipe</button>
          </div>
        );
      case "recipe":
        return (
          <div>
            <Recipe />
          </div>
        );
    }
  }

  _handleClick(href) {
    this.setState({page: href});
  }
}

class Welcome extends React.Component {
  render() {
    return (
      <div className="Text">
        <ReactTooltip />
        <img data-tip="We've brought lemons." src={bears} height="250" />
        <h1>Bears Make Lemonade</h1>
        <p>
          Sometimes you lose some lemons. <br/>
          That's when you find some bears. <br/>
          You train them to find lemons. <br/>
          And you make lemonade!
        </p>
        <img src={lemonade} height="200" />
      </div>
    );
  }
}

class Recipe extends React.Component {
  render() {
    return (
      <div class="Text">
        <ReactTooltip />
        <img data-tip="Making the best lemonade!" src={cookingMama} height="250" />
        <h1>Perfect Lemonade Recipe</h1>
      </div>
    );
  }
}

export default App;
