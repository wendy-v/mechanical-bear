import React from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from 'react-tooltip';
import bears from './rilak-lemons.gif';
import lemonade from './lemonade.png';
import './App.css';

class Chart extends React.Component {
  render() {
    return (
      <div>
        <a href="./App.js" class="button">Go to Home</a>
      </div>
    );
  }
}

class Welcome extends React.Component {
  render() {
    return (
      <div class="Welcome">
        <ReactTooltip />
        <img data-tip="We've brought lemons." src={bears} />
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

export default App;
