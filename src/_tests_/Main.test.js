import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Main from '../components/Main/Main';

describe('Main', function() {
    it('runs the Main', function() {
        const rendered = shallow(<Main />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});

