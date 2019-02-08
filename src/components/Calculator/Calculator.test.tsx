import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Calculator';
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculator />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it ('calculates correctly', ()=>{
  const wrapper= mount(<Calculator/>)
  const display= wrapper.find('CalculatorDisplay')
  const input= wrapper.find('CalculatorInput')

  // initially there is a 0
  expect(display.text()).toBe('0')

  var btn7 =input.find('button').findWhere( btn => btn.text()=="7");
  btn7.simulate('click')
  expect(display.text()).toBe('7')

  var btnPlus =input.find('button').findWhere( btn => btn.text()=="+");
  btnPlus.simulate('click')
  expect(display.text()).toBe('7 + 0')


})