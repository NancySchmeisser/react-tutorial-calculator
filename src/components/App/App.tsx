import React, { Component } from 'react';
import CalculatorDisplay from '../CalculatorDisplay/CalculatorDisplay';
import CalculatorInput from '../CalculatorInput/CalculatorInput';


class App extends Component {
  render() {
    return (
      <div className="App container">
       <CalculatorDisplay currentValue={7} operator="+" newValue={3}/>
       <CalculatorInput/>
       </div>
    );
  }
}

export default App;
