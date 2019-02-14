import React, { Component } from 'react';
import "./CalculatorDisplay.css";

interface CalculatorDisplayProps {
    currentValue: number,
    operator: string,
    newValue: number,
    currentValueShift: number,
    newValueShift: number,
    hasComma: boolean,
}


class CalculatorDisplay extends Component <CalculatorDisplayProps> {
  render() {
    return (
      <div className="CalculatorDisplay">
        {this.props.operator == "" ? `${this.props.currentValue / this.props.currentValueShift}${(this.props.hasComma == true && this. props.currentValueShift == 1)? ".": ""}` : this.props.newValue == 0 
        ?  `${this.props.currentValue/ this.props.currentValueShift} ${this.props.operator}`: 
        `${this.props.currentValue / this.props.currentValueShift} ${this.props.operator} ${this.props.newValue/ this.props.newValueShift}`}
      </div>
    );
  }
}

export default CalculatorDisplay;
