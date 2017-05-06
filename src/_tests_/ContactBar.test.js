import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ContactBar from '../components/Main/ContactBar';

describe('ContactBar', function() {
    it('runs the ContactBar', function() {
        const rendered = shallow(<ContactBar />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});
