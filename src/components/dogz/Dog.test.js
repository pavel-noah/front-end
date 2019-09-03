import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';

describe('dog component', () => {
    it('renders dog', () => {
        const wrapper = shallow(<Dog dogName="" dogAge="" dogWeight="" />);
        expect(wrapper).toMatchSnapshot();
    });
});
  
