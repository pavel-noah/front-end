import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Search', () => {
    it('renders search', () => {
        const wrapper = shallow(<Search submitSearch={() => {}} onChange={() => {}} searchInput="" />);
        expect(wrapper).toMatchSnapshot();
    });
});
  
