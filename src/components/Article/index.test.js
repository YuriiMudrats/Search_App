import React from 'react';
import { shallow } from 'enzyme';

import Article from './index.jsx';

describe('<Article />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<Article curId={14892} name="Intelligence quotient" text={"An intelligence quotient"} />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
  const renderedComponent = shallow(<Article curId={14892} name="Intelligence quotient" text={"An intelligence quotient"} />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });
  it('should have one h2', () => {
  const renderedComponent = shallow(<Article curId={14892} name="Intelligence quotient" text={"An intelligence quotient"} />);
    expect(renderedComponent.find('h2').length).toEqual(1);
  });

});