import React from 'react';
import { shallow } from 'enzyme';

import SearchForm from './index.jsx';

const value = 'hello';
const onSubmit = jest.fn(() => true);
const changeOrder = jest.fn();
const renderComponent = (props = {}) =>
  shallow(
    <SearchForm query={value} onSubmit={onSubmit} changeOrder={changeOrder} />
  );

describe('<SearchForm />', () => {
  it('should render an <form> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('form');
  });
  it('should have a onSubmit attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('onSubmit')).toBeDefined();
  });
  it('should have one button', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('button').length).toEqual(1);
  });
  it('button should have an attribute type', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('button').prop('type')).toBeDefined();;
  });
  it(' onSubmit must work', () => {

    const renderedComponent = renderComponent();

    renderedComponent.simulate('submit');
    expect(onSubmit).toHaveReturned();
  });
});
