import { Reducer } from "react";
import { FieldId } from "Containers/MainComponent/api";

export const initialValidationErrors = {
  [FieldId.firstName]: "",
  [FieldId.lastName]: "",
  [FieldId.phoneNumber]: "",
  [FieldId.stateName]: ""
};

export type ValidationErrors = {
  firstName: string,
  lastName: string,
  phoneNumber: string,
  stateName: string
}

export const validationErrorsReducer: Reducer<ValidationErrors, Partial<ValidationErrors>> = (state, newState) => ({
  ...state,
  ...newState
});

export const requiredFieldError = "This field is required";
export const minCharactersLengthError = "Should contain at least 3 characters";
export const maxCharactersLengthError = "Should not be greater than 128 characters";

export const initializeValidators = (setValidationErrors: React.Dispatch<Partial<ValidationErrors>>) => ({
  firstNameValid(name: string) {
    const trimmedName = name.trim();
    if (!trimmedName) {
      setValidationErrors({
        firstName: requiredFieldError
      });

      return false;
    }

    if (trimmedName.length < 3) {
      setValidationErrors({
        firstName: minCharactersLengthError
      });

      return false;
    }

    if (trimmedName.length > 128) {
      setValidationErrors({
        firstName: maxCharactersLengthError
      });

      return false;
    }

    setValidationErrors({
      firstName: ""
    })

    return true;
  },

  lastNameValid(name: string) {
    const trimmedName = name.trim();
    if (!trimmedName) {
      setValidationErrors({
        lastName: requiredFieldError
      });

      return false;
    }

    if (trimmedName.length < 3) {
      setValidationErrors({
        lastName: minCharactersLengthError
      });

      return false;
    }

    if (trimmedName.length > 128) {
      setValidationErrors({
        lastName: maxCharactersLengthError
      });

      return false;
    }

    setValidationErrors({
      lastName: ""
    });

    return true;
  },

  phoneNumberValid(number: string) {
    const trimmedPhoneNumber = number.trim();
    if (!trimmedPhoneNumber) {
      setValidationErrors({
        phoneNumber: requiredFieldError
      });

      return false;
    }

    if (!number.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) {
      setValidationErrors({
        phoneNumber: "Seems like this number is not valid"
      });

      return false;
    }

    setValidationErrors({
      phoneNumber: ""
    });

    return true;
  },

  stateNameValid(state: string) {
    if (!state.trim()) {
      setValidationErrors({
        stateName: requiredFieldError
      });

      return false;
    }

    setValidationErrors({
      stateName: ""
    });

    return true;
  }
});