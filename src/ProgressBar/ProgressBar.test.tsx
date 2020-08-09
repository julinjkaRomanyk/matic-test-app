import React from "react";
import { getTestName } from "../utils/test-utils";
import { render } from "@testing-library/react";

import { ProgressBarComponent } from "./ProgressBar";


describe(getTestName(__dirname), () => {
    test("Match snapshot", () => {
      const { container } = render(<ProgressBarComponent  progress={ {current: 2, total: 5 }} />);
  
      expect(container.firstChild).toMatchSnapshot();
    });

  });
  