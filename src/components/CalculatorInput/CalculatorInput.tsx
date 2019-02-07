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
                        <button className="btn btn-info">9</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info">+</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-info">4</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info">5</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info">6</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info">-</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-info">1</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info">2</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info">3</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info">x</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-info">0</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info">.</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info">=</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info">/</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default CalculatorInput;
