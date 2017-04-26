// /* eslint-disable */
import React from 'react';
// import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Title from '../components/Main/Title';

describe('Title', function() {
    it('runs the Title', function() {
        const rendered = shallow(<Title />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});

// TODO: investigate/disable these linting errors and
// determine which npm packages to actually use
