import { getTestName } from "../utils/test-utils";

import { initializeValidators } from "./validation";


describe(getTestName(__dirname), () => {
 
  let validators: any;
  let setValidationErrorsSpy: any;

  beforeEach(() => {
    setValidationErrorsSpy = jest.fn();
    validators = initializeValidators(setValidationErrorsSpy);
  });


  describe(`firstNameValid()`, () => {
    test(`should return 'This field is required' error when there is no value or empty spaces`, () => {
      const isValid = validators.firstNameValid("     ");

      expect(isValid).toEqual(false);
      expect(setValidationErrorsSpy).toHaveBeenCalledWith({ firstName: "This field is required" });
    });

    test(`should return 'Should contain at least 3 characters' error when first name is less than 3 characters`, () => {
        const isValid = validators.firstNameValid("e ");
  
        expect(isValid).toEqual(false);
        expect(setValidationErrorsSpy).toHaveBeenCalledWith({ firstName: "Should contain at least 3 characters" });
      });

      test(`should return 'Should not be greater than 128 characters' when first name is greater than 128 characters`, () => {
        const isValid = validators.firstNameValid("jgoirejgporjhbpo aerhjerihg ierjgoierj geruhgpierajgoer nughvroidfjrgbkerjngie 555555rjgoirajgrghinughvroidfjrgbkerjngie 555555rjgoirajgrghinughvroidfjrgbkerjngie 555555rjgoirajgrghi ");
  
        expect(isValid).toEqual(false);
        expect(setValidationErrorsSpy).toHaveBeenCalledWith({ firstName: "Should not be greater than 128 characters" });
      });
  });


  describe(`lastNameValid()`, () => {
    test(`should return 'This field is required' error when there is no value or empty spaces`, () => {
      const isValid = validators.lastNameValid("     ");

      expect(isValid).toEqual(false);
      expect(setValidationErrorsSpy).toHaveBeenCalledWith({ lastName: "This field is required" });
    });

    test(`should return 'Should contain at least 3 characters' error when last name is less than 3 characters`, () => {
        const isValid = validators.lastNameValid("e ");
  
        expect(isValid).toEqual(false);
        expect(setValidationErrorsSpy).toHaveBeenCalledWith({ lastName: "Should contain at least 3 characters" });
      });

      test(`should return 'Should not be greater than 128 characters' when first name is greater than 128 characters`, () => {
        const isValid = validators.lastNameValid("jgoirejgporjhbpo aerhjerihg ierjgoierj geruhgpierajgoer nughvroidfjrgbkerjngie 555555rjgoirajgrghinughvroidfjrgbkerjngie 555555rjgoirajgrghinughvroidfjrgbkerjngie 555555rjgoirajgrghi ");
  
        expect(isValid).toEqual(false);
        expect(setValidationErrorsSpy).toHaveBeenCalledWith({ lastName: "Should not be greater than 128 characters" });
      });
  });

  describe(`phoneValid()`, () => {
    test(`should return 'This field is required' error when there is no value or empty spaces`, () => {
      const isValid = validators.phoneNumberValid("     ");

      expect(isValid).toEqual(false);
      expect(setValidationErrorsSpy).toHaveBeenCalledWith({ phoneNumber: "This field is required" });
    });

    test(`should not return errors if valid phone number provided`, () => {
        const isValid = validators.phoneNumberValid("00000000234");
  
        expect(isValid).toEqual(false);
        expect(setValidationErrorsSpy).toHaveBeenCalledWith({ phoneNumber: "Seems like this number is not valid" });
      });

      test(`should return 'Seems like this number is not valid" error when invalid number formatting is provided`, () => {
        const isValid = validators.phoneNumberValid("(345) 333-3333");
  
        expect(isValid).toEqual(true);
        expect(setValidationErrorsSpy).toHaveBeenCalledWith({ phoneNumber: "" });
      });
    });
});
