import React from 'react';
import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";

import { LinksBoard } from './index.jsx';
import lists from '../../../test/mockList';

describe('<LinksBoard />', () => {
  it('should return on pending <div>Loading...</div>', () => {
    const renderedComponent = shallow(<LinksBoard pending={true} notFound={false} lists={[]}/>);
    expect(renderedComponent.html()).toEqual('<div>Loading...</div>')
  });
  it('should return on not found <div>Not found</div>', () => {
    const renderedComponent = shallow(<LinksBoard pending={false} notFound={true} lists={[]}/>);
    expect(renderedComponent.html()).toEqual('<div>Not found</div>')
  });
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<LinksBoard pending={false} notFound={false} lists={lists}/>);
    expect(renderedComponent.type()).toEqual('div');
  });
  it('<div> should have className attribute', () => {
    const renderedComponent = shallow(<LinksBoard pending={false} notFound={false} lists={lists}/>);
    expect(renderedComponent.prop('className')).toBeDefined();
  });
  it('render component should have className attribute', () => {
    const renderedComponent = shallow(<LinksBoard pending={false} notFound={false} lists={lists}/>);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
