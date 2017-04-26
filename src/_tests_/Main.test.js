// /* eslint-disable */
import React from 'react';
// import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Main from '../components/Main/Main';

describe('Main', function() {
    it('runs the Main', function() {
        const rendered = shallow(<Main />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});

// TODO: investigate/disable these linting errors and
// determine which npm packages to actually use
