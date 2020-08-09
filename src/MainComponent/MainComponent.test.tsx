import React from "react";
import { getTestName } from "../utils/test-utils";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render, fireEvent } from "@testing-library/react";

import { MainComponent } from "./MainComponent";

Enzyme.configure({ adapter: new Adapter() });

describe(getTestName(__dirname), () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init: any) => [init, setState]);

  beforeEach(() => {
    wrapper = Enzyme.mount(<MainComponent />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

    test("Match snapshot", () => {
      const { container } = render(<MainComponent />);
  
      expect(container.firstChild).toMatchSnapshot();
    });
  });
  