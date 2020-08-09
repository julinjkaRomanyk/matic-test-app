import React from "react";
import { getTestName } from "../../utils/test-utils";
import { render, fireEvent } from "@testing-library/react";

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
  });
  
