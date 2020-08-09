import React from "react";
import { getTestName } from "../utils/test-utils";
import { render, fireEvent } from "@testing-library/react";

import { StartEndComponent } from "./StartEndComponent";

const startComponentProps = {
message: "Hello",
buttonLabel: "Start",
image: "image",
onButtonClick: jest.fn()
}

describe(getTestName(__dirname), () => {
    test("Match snapshot", () => {
      const { container } = render(<StartEndComponent {...startComponentProps} />);
  
      expect(container.firstChild).toMatchSnapshot();
    });

    test("Button should be rendered in case Start Component", () => {
      const { getByTestId } = render(<StartEndComponent {...startComponentProps} />);

      const startButton = getByTestId("button");
  
      expect(startButton).toBeTruthy();
    });

    test("onButtonClick should be called in case button is clicked", () => {
      const { getByTestId } = render(<StartEndComponent {...startComponentProps} />);

      const startButton = getByTestId("button");

      fireEvent.click(startButton);
  
      expect(startComponentProps.onButtonClick).toHaveBeenCalled();
    });
  });
  
