import React from 'react';
import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";

import { SearchBoard } from './index.jsx';
import list from '../../../test/mockList';

describe('<SearchBoard />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<SearchBoard articleBoard={list}/>);
    expect(renderedComponent.type()).toEqual('div');
  });
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<SearchBoard articleBoard={list}/>);
    expect(renderedComponent.children().length).toEqual(10);
  });

});
