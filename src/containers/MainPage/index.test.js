import React from 'react';
import { shallow } from 'enzyme';

import { MainPage } from './index.jsx';
import list from '../../../test/mockList';

const renderComponent = (props = {}) => shallow(<MainPage query="hello" suggestions={[]} />)

describe('<MainPage />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('div');
  });
  it('<div> should have className attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('className')).toBeDefined();
  });
  it('should have 2 of <div> tags', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('div').length).toEqual(2);
  });
});
