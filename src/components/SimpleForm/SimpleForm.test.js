import React from 'react';
import { shallow } from 'enzyme'
import SimpleForm from './SimpleForm';

describe('SimpleForm', () => {
  it('renders without crashing', () => {
    shallow(<SimpleForm/>)
  });
})