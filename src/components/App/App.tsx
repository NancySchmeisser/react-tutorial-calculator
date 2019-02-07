import React, { Component } from 'react';
import CalculatorDisplay from '../CalculatorDisplay/CalculatorDisplay';


class App extends Component {
  render() {
    return (
      <div className="App container">
       <CalculatorDisplay currentValue={7} operator="+" newValue={3}/>
      </div>
    );
  }
}

export default App;
