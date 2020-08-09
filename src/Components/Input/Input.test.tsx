import React from "react";
import { getTestName } from "utils/test-utils";
import { render, fireEvent } from "@testing-library/react";

import { Input } from "./Input";

const fakeInputCallback = jest.fn();

describe(getTestName(__dirname), () => {
    test("Match snapshot", () => {
      const { container } = render(<Input onChange={fakeInputCallback} />);
  
      expect(container.firstChild).toMatchSnapshot();
    });

     test("Should call fakeInputCallback onClick", () => {
        const { getByTestId } = render(<Input onChange={fakeInputCallback} />);
        const inputSymbol = "A";
    
        const input = getByTestId("Input")
        fireEvent.change(input, { target: { value: inputSymbol } });

        expect(fakeInputCallback).toBeCalledTimes(1);
        expect(fakeInputCallback).toBeCalledWith(inputSymbol)
      });

      test("Should render label in case it's provided", () => {
          const labelText = "Label";
        const { getByTestId } = render(<Input label={labelText} onChange={fakeInputCallback} />);
 
        const label = getByTestId("Input-Label");

        expect(label).toBeTruthy();
        expect(label.innerHTML).toEqual(` ${labelText} `);
      });

      test("Should render error incase it's provided", () => {
        const errorText = "Error";
      const { getByTestId } = render(<Input error={errorText} onChange={fakeInputCallback} />);

      const error = getByTestId("Input-Error");

      expect(error).toBeTruthy();
      expect(error.innerHTML).toEqual(` ${errorText} `);
    });

  });