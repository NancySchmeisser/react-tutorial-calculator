import React from 'react';
import ReactDOM from 'react-dom';
import CalculatorDisplay from './CalculatorDisplay';
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalculatorDisplay currentValue={7} operator="+" newValue={3} currentValueShift={1} newValueShift={1} hasComma={false}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it ('shows the correct string', () => {
    const wrapper = mount (<CalculatorDisplay currentValue={7} operator="+" newValue={3} currentValueShift={1} newValueShift={1} hasComma={false}/>)
    expect(wrapper.text()).toBe('7 + 3')
})

it ('shows only current value if operator is empty', () => {
    const wrapper = mount (<CalculatorDisplay currentValue={7} operator="" newValue={0} currentValueShift={1} newValueShift={1} hasComma={false}/>)
    expect(wrapper.text()).toBe('7')
})

it ('if operator is empty and currentValueShift is 100, then show Comma', () => {
  const wrapper = mount (<CalculatorDisplay currentValue={7} operator="" newValue={0} currentValueShift={100} newValueShift={1} hasComma={true}/>)
  expect(wrapper.text()).toBe('0.07')
})

it ('shows the correct string', () => {
  const wrapper = mount (<CalculatorDisplay currentValue={7} operator="+" newValue={3} currentValueShift={10} newValueShift={1000} hasComma={true}/>)
  expect(wrapper.text()).toBe('0.7 + 0.003')
})

it ('shows the correct string with comma', () => {
  const wrapper = mount (<CalculatorDisplay currentValue={7} operator="" newValue={0} currentValueShift={1} newValueShift={1} hasComma={true}/>)
  expect(wrapper.text()).toBe('7.')
})


