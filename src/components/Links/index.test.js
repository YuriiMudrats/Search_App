import React from 'react';
import { shallow } from 'enzyme';

import LinkList from './index.jsx';

const href = 'https://en.wikipedia.org/';
const children = <h1>Test</h1>;
const renderComponent = (props = {}) =>
  shallow(<LinkList link="More info" id={12}  />);

describe('<LinkList />', () => {
  it('Link prop should ne equal', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.props().href).toEqual('https://en.wikipedia.org/?curid=12');
  });

  it('should have one p', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('p').length).toEqual(1);
  });
});
