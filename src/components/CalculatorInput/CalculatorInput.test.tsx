import React from 'react';
import ReactDOM from 'react-dom';
import CalculatorInput from './CalculatorInput';
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalculatorInput handleKeyPress={(key:string)=>{}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it ('calls handleKeyClick', () => {
  const mockHandleKeyClick = jest.fn( key => { })
  const wrapper = mount (<CalculatorInput handleKeyPress={mockHandleKeyClick}/>)
  expect(wrapper.find('button').first().text()).toBe("7")

  wrapper.find('button').first().simulate('click')
  expect (mockHandleKeyClick.mock.calls.length).toBe(1)
  expect (mockHandleKeyClick.mock.calls[0].length).toBe(1)
  expect (mockHandleKeyClick.mock.calls[0][0]).toEqual("7")
})