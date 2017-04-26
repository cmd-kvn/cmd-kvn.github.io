/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Aside from '../components/Aside';

describe('Aside', function () {
    it('runs the Aside', function () {
        const rendered = shallow(<Aside />);
        expect(toJson(rendered)).toMatchSnapshot();
    })
});