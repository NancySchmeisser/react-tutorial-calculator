import React, { Component } from 'react';
import "./Calculator.css";
import CalculatorDisplay from '../CalculatorDisplay/CalculatorDisplay';
import CalculatorInput from '../CalculatorInput/CalculatorInput';



interface CalculatorProps {
    currentValue: number,
    operator: string,
    newValue: number,
}


class Calculator extends Component<CalculatorProps> {
    render() {
        return (
            <div className="Calculator">
                <CalculatorDisplay currentValue={7} operator="+" newValue={3} />
                <CalculatorInput />
            </div>
        );
    }
}

export default Calculator;
