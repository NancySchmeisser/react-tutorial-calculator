import React, { Component } from 'react';
import "./CalculatorDisplay.css";

interface CalculatorDisplayProps {
    currentValue: number,
    operator: string,
    newValue: number,
}


class CalculatorDisplay extends Component <CalculatorDisplayProps> {
  render() {
    return (
      <div className="CalculatorDisplay">
        {this.props.operator == "" ? this.props.currentValue.toString() : `${this.props.currentValue} ${this.props.operator} ${this.props.newValue}`}
      </div>
    );
  }
}

export default CalculatorDisplay;
