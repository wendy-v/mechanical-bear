import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from 'react-tooltip';
import { VictoryPie, VictoryLabel } from 'victory';


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
        <h1>The Perfect Lemonade Recipe</h1>
        {this._recipePie()};
      </div>
    );
  }

  _recipePie() {
    return (
      <VictoryPie
        height={200}
        colorScale={["gold", "pink", "lightblue"]}
        style={{
          data: { fillOpacity: 0.6, stroke: "white", strokeWidth: 2 },
          labels: { fill: "green", fontSize: 10} 
        }}
        labelRadius={65}
        data={[
          { x: 1, y: 1, label: "lemon juice" },
          { x: 2, y: 3, label: "strawberries" },
          { x: 3, y: 5, label: "water" }
        ]}
        events={[{
          target: "data",
          eventHandlers: {
            onMouseOver: () => {
              return [
                {
                  target: "data",
                    mutation: (props) => {
                      return { style: { fill: props.style.fill, fillOpacity: 1 } };
                    }
                  }
                ];
              },
              onMouseOut: () => {
                return [{
                  mutation: () => {
                    return null;
                  }
                }];
              }
            }
          }]}
      />
    );
  }
}

export default App;
