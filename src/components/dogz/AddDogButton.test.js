import React from 'react';
import { shallow } from 'enzyme';
import AddDogButton from './AddDogButton';

describe('Add dog button component', () => {
    it('renders add dog button', () => {
        const wrapper = shallow(<AddDogButton submitForm={() => {}} onChange={() => {}} name="" age="" weight="" />);
        expect(wrapper).toMatchSnapshot();
    });
});
  
