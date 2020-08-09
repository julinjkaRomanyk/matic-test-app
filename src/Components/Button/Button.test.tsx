import React from "react";
import { getTestName } from "utils/test-utils";
import { render, fireEvent } from "@testing-library/react";

import { Button } from "./Button";

const fakeButtonCallback = jest.fn();

describe(getTestName(__dirname), () => {
    test("Match snapshot", () => {
      const { container } = render(<Button label="" onClick={fakeButtonCallback} />);
  
      expect(container.firstChild).toMatchSnapshot();
    });

    test("Should call fakeButtonCallback onClick", () => {
        const { getByTestId } = render(<Button label="" onClick={fakeButtonCallback} />);
    
        const button = getByTestId("button")
        fireEvent.click(button);

        expect(fakeButtonCallback).toBeCalledTimes(1);
      });

  });
  