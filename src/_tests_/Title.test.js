import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Title from '../components/Main/Title';

describe('Title', function() {
    it('runs the Title', function() {
        const rendered = shallow(<Title />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});
