import React, { Component } from 'react';
import CalculatorDisplay from '../CalculatorDisplay/CalculatorDisplay';
import CalculatorInput from '../CalculatorInput/CalculatorInput';



interface CalculatorState {
    currentValue: number,
    operator: string,
    newValue: number,
}


class Calculator extends Component<{}, CalculatorState> {
    constructor(props: {}) {
        super(props)

        this.state = {
            currentValue: 0,
            operator: "",
            newValue: 0,
        }
    }
    
    handleKeyPress = (key: string) => {

        if( "+-=x/".indexOf(key) > -1 ) {

            let newValue=this.state.currentValue;
            let newOperator = (key == "=") ? "" : key

            if( this.state.operator !== "") {

                switch(this.state.operator) {
                    
                    case "+":
                        newValue = this.state.currentValue + this.state.newValue;
                    break;

                    case "-":
                        newValue = this.state.currentValue - this.state.newValue;
                    break;

                    case "x":
                        newValue = this.state.currentValue * this.state.newValue;
                    break;

                    case "/":
                        newValue = this.state.currentValue / this.state.newValue;
                    break;   
                }
            }

            this.setState( {
                currentValue: newValue,
                operator: newOperator,
                newValue: 0
            })

        } else {
            if(this.state.operator === "") {
                this.setState( { currentValue: this.state.currentValue * 10 + Number(key) })
            } else {
                this.setState( { newValue: this.state.newValue * 10 + Number(key) })
            }
        }
        
        console.log(key)
    }

    render() {
        return (
            <div className="Calculator">
                <CalculatorDisplay currentValue={this.state.currentValue} operator={this.state.operator} newValue={this.state.newValue} />
                <CalculatorInput handleKeyPress={this.handleKeyPress}/>
            </div>
        );
    }
}

export default Calculator;
