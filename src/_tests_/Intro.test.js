import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Intro from '../components/Main/Intro';

describe('Intro', function() {
    it('runs the Intro', function() {
        const rendered = shallow(<Intro />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});
