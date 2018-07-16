import React from 'react';
import { shallow } from 'enzyme';

import Input from './index.jsx';

const value = 'hello';
const onChange = jest.fn();
const renderComponent = (props = {}) =>
  shallow(<Input value={value} onChange={onChange} />);

describe('<Input />', () => {
  it('should render an <input> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('input');
  });
  it('should have a value attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('value')).toBeDefined();
  });
  it('The value should be equal hello', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('value')).toEqual('hello');
  });
  it('should have a onChange attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('onChange')).toBeDefined();
  });
  it(' onChange attribute should return value', () => {
    const event = {
      preventDefault() {},
      target: { value: 'the-value' }
    };

    const renderedComponent = renderComponent();
    renderedComponent.simulate('change', event.target.value);
    expect(onChange).toBeCalledWith('the-value');
  });

});
