import React from 'react';
import { shallow } from 'enzyme';
import LaunchDetail from './LaunchDetail';

describe('<LaunchDetail />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<LaunchDetail />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
