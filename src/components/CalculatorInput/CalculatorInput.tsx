import React, { Component } from 'react';
import "./CalculatorInput.css";


interface CalculatorInputProps {

}




class CalculatorInput extends Component<CalculatorInputProps> {

    handleButtonclick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.innerText);
    }

    render() {
        return (
            <div className="CalculatorInput">
                <div className="row">
                    <div className="col">
                        <button className="btn btn-info" onClick={this.handleButtonclick}>7</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info" onClick={this.handleButtonclick}>8</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info" onClick={this.handleButtonclick}>9</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info" onClick={this.handleButtonclick}>+</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-info" onClick={this.handleButtonclick}>4</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info" onClick={this.handleButtonclick}>5</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info" onClick={this.handleButtonclick}>6</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info" onClick={this.handleButtonclick}>-</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-info" onClick={this.handleButtonclick}>1</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info" onClick={this.handleButtonclick}>2</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info" onClick={this.handleButtonclick}>3</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info" onClick={this.handleButtonclick}>x</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-info" onClick={this.handleButtonclick}>0</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info" onClick={this.handleButtonclick}>.</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info" onClick={this.handleButtonclick}>=</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info" onClick={this.handleButtonclick}>/</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default CalculatorInput;
