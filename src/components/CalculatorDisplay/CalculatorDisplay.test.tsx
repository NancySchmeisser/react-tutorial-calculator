import React from 'react';
import ReactDOM from 'react-dom';
import CalculatorDisplay from './CalculatorDisplay';
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalculatorDisplay currentValue={7} operator="+" newValue={3} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it ('shows the correct string', () => {
    const wrapper = mount (<CalculatorDisplay currentValue={7} operator="+" newValue={3}/>)
    expect(wrapper.text()).toBe('7 + 3')
})

it ('shows only current value if operator is empty', () => {
    const wrapper = mount (<CalculatorDisplay currentValue={7} operator="" newValue={0}/>)
    expect(wrapper.text()).toBe('7')
})