import React from "react";
import { getTestName } from "utils/test-utils";
import { render, fireEvent, act } from "@testing-library/react";

import  { FieldId } from "Containers/MainComponent/api";

import { QuestionComponent } from "./QuestionComponent";

export const validStoreInfo = {
    firstName: "Julia",
    lastName: "Romanyk",
    phoneNumber: "0987898909",
    stateName: "",
}

export const invalidStoreInfo = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    stateName: "",
}


const mockProps = {
    questionTitle: "What is Your Name?",
    questionNumber: 1,
    fields: [
        {
          "id": FieldId.firstName,
          "label": "First Name",
          "type": "input",
          "validation": "^.{3,128}$"
        },
        {
          "id": FieldId.lastName,
          "label": "Last Name",
          "type": "input",
          "validation": "^.{3,128}$"
        }
      ],
    infoStore: validStoreInfo,

    onValueChange: jest.fn(),
    onButtonClick: jest.fn(),
}

describe(getTestName(__dirname), () => {
    test("Match snapshot", () => {
      const { container } = render(<QuestionComponent {...mockProps}/>);
  
      expect(container.firstChild).toMatchSnapshot();
    });

    test(`should trigger onButtonClick callback, when button is pressed and inputs are filled with valid info`, async () => {
        const { getByTestId } = render(<QuestionComponent {...mockProps}/>);

        const saveButton = getByTestId("button");

          fireEvent.click(saveButton);

        expect(mockProps.onButtonClick).toHaveBeenCalled();
      });
  });
  