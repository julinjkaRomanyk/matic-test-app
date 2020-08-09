import React from "react";
import { getTestName } from "utils/test-utils";
import { render } from "@testing-library/react";

import { Fade } from "./AnimationWrapper";

const inputToRender = () => {
    return (
        <>
             <span>Hello</span>
        </>
        )
    };

describe(getTestName(__dirname), () => {

    test("Match snapshot", () => {
      const { container } = render(<Fade show={true} children={inputToRender} />);
  
      expect(container.firstChild).toMatchSnapshot();
    });

    test("Should render wrapper when show props is true", () => {
      const { getByTestId } = render(<Fade show={true} children={inputToRender} />);

      const wrapper = getByTestId("animation-wrapper");
  
      expect(wrapper).toBeTruthy();
    });
  });
  