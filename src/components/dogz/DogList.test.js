import React from 'react';
import { shallow } from 'enzyme';
import DogList from './DogList';

describe('dog list', () => {
    it('renders dog list', () => {
        const wrapper = shallow(<DogList dogs={[]} />);
        expect(wrapper).toMatchSnapshot();
    });
});
  
