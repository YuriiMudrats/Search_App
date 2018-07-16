import React from 'react';
import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";

import { GoogleSuggestion } from './index.jsx';


const googleLists = [
  'world cup',
  'world map',
  'world of tanks',
  'worldtimebuddy',
  'world cup groups',
  'world of warcraft',
  'world cup standings',
  'world news',
  'world cup results',
  'world cup matches'
];

const renderComponent = (props = {}) =>
  shallow(<GoogleSuggestion googleLists={googleLists} {...props} />);

describe('<GoogleSuggestion />', () => {
  it('should render null', () => {
    const renderedComponent = shallow(<GoogleSuggestion googleLists={[]} />);;
    expect(renderedComponent.type()).toEqual(null);
  });
  it('should render an <ul> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('ul');
  });
  it('<ul> should have className attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('className')).toBeDefined();
  });
  it('should have 10 of <li> tags', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('li').length).toEqual(10);
  });
  it('<li> should have className attribute', () => {
    const renderedComponent = renderComponent();
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

});
