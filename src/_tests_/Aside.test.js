import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Aside from '../components/Aside';

describe('Aside', function() {
    it('runs the Aside', function() {
        const rendered = shallow(<Aside />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});
