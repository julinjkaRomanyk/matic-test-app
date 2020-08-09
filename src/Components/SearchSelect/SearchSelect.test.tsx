import React from "react";
import { render } from "@testing-library/react";
import { getTestName } from "utils/test-utils";
import { Select } from ".";

const defaultProps = {
    label: "label",
    selectProps: {
    defaultValue: { value: "PREROLL", label: "Pre Roll" },
    options: [
      { value: "PREROLL", label: "Pre Roll" },
      { value: "BRANDED_CONTENT", label: "Branded content" }
    ]
  }
};

describe(getTestName(__dirname), () => {
  test("Renders markup correctly", () => {
    const { container } = render(<Select {...defaultProps} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test("Renders markup correctly", () => {
    const { getByTestId } = render(<Select {...defaultProps} />);

    const selectLabel = getByTestId("label-select");

    expect(selectLabel).toBeTruthy();
  });
});

