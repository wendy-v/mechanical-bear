import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from 'react-tooltip';
import { VictoryPie, VictoryLabel, VictoryLine, VictoryChart } from 'victory';


import bears from './rilak-lemons.gif';
import lemonade from './lemonade.png';
import cookingMama from './cooking_mama.jpeg';
import drinks from './drinks.png';

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
      {this._getPage(this.state.page)}
      </div>
      );
  }

  _getPage(currentState) {
    switch (currentState) {
      case "home":
      return (
        <div>
        <Welcome />
        <button className="button" onClick={() => {this._handleClick("recipe")}}>
          View Lemonade Recipe
        </button>
        </div>
        );
      case "recipe":
      return (
        <div>
        <Recipe />
        <button className="button" onClick={() => {this._handleClick("results")}}>
          View Revenue
        </button>
        </div>
        );
      case "results":
        return (
          <div>
          <Results />
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
    const recipe = [{
      col1: "1 cup",
      col2: "lemon juice"
    }, {
      col1: "1/2 cup",
      col2: "strawberries"
    }, {
      col1: "8 cups",
      col2: "water"
    }];

    const rowLegend = {
      row1: "gold",
      row2: "pink",
      row3: "lightblue"
    };

    return (
      <div class="Text">
      <ReactTooltip />
      <img data-tip="Making the best lemonade!" src={cookingMama} height="250" />
      <h1>The Perfect Lemonade Recipe</h1>
      <Table data={recipe} />
      {this._recipePie()}
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
        { x: 2, y: 0.5, label: "strawberries" },
        { x: 3, y: 8, label: "water" }
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

class Results extends React.Component {
  render() {
    return (
      <div className="Text">
      <ReactTooltip />
      <img data-tip="New Startup Idea: Lemonade Stands." src={drinks} height="250" />
      <h1>Revenue from Lemonade Stands</h1>
      <VictoryChart
      height={200}
        >
        <VictoryLine
        style={{
          data: { stroke: "gold" },
          parent: { border: "1px solid #ccc"},
          labels: { fill: "green", fontSize: 10} 
        }}
        data={[
          { x: 1, y: 2, label: "hi" },
          { x: 2, y: 3, label: "bye" },
          { x: 3, y: 5, label: "good" }
          ]}
          />
      </VictoryChart>
      </div>
      );
  } 
}

class Share extends React.Component {
  render() {
    return (
      <div className="Text">
      <ReactTooltip />
      <img data-tip="A toast to lemons." src={drinks} height="250" />
      <h1>Share Your Lemonade Recipe</h1>
      </div>
      );
  } 
}

class Table extends React.Component {
  render() {
    var data = this.props.data;
    return (
      <table className="Table">
      {data.map(element =>
        this._createRow(element)
        )}
      </table>
      );
  }

  _createRow(dataObject) {
    var valueArray = Object.values(dataObject);
    return (
      <tr>
      {valueArray.map(element =>
        <td>{element}</td>
        )}
    </tr>
    );
  }
}

export default App;
