import React from "react";
import { getTestName } from "utils/test-utils";
import { render } from "@testing-library/react";

import { Header } from "./Header";


describe(getTestName(__dirname), () => {
    test("Match snapshot", () => {
      const { container } = render(<Header />);
  
      expect(container.firstChild).toMatchSnapshot();
    });

  });
  