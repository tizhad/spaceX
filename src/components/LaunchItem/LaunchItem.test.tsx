import React from "react";
// import { shallow } from 'enzyme';
import LaunchItem from "./LaunchItem";

describe("<LaunchItem />", () => {
  let component;

  beforeEach(() => {
    // component = shallow(<LaunchItem />);
  });

  test("It should mount", () => {
    expect(component.length).toBe(1);
  });
});
