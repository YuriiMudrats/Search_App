import React from 'react';
import { shallow } from 'enzyme';

import A from './index.jsx';


const href = 'https://en.wikipedia.org/';
const children = <h1>Test</h1>;
const renderComponent = (props = {}) =>
  shallow(
    <A href={href} {...props}>
      {children}
    </A>,
  );

describe('<A />', () => {
  it('should render an <a> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('a');
  });
  it('should have a target attribute', () => {
    const renderedComponent = renderComponent();
      expect(renderedComponent.prop('target')).toBeDefined();
    });
  it('A target attribute should be _blank', () => {
    const renderedComponent = renderComponent();
      expect(renderedComponent.prop('target')).toEqual('_blank');
  });
  it('should have a rel attribute', () => {
    const renderedComponent = renderComponent();
      expect(renderedComponent.prop('rel')).toBeDefined();
    });
  it('A rel attribute should be noopener noreferrer', () => {
    const renderedComponent = renderComponent();
      expect(renderedComponent.prop('rel')).toEqual('noopener noreferrer');
  });
  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });

});