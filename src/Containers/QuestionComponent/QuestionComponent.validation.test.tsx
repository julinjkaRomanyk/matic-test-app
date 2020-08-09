import { getTestName } from "utils/test-utils";

import { initializeValidators, requiredFieldError, minCharactersLengthError, maxCharactersLengthError } from "./validation";


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
      expect(setValidationErrorsSpy).toHaveBeenCalledWith({ firstName: requiredFieldError });
    });

    test(`should return 'Should contain at least 3 characters' error when first name is less than 3 characters`, () => {
        const isValid = validators.firstNameValid("e ");
  
        expect(isValid).toEqual(false);
        expect(setValidationErrorsSpy).toHaveBeenCalledWith({ firstName: minCharactersLengthError });
      });

      test(`should return 'Should not be greater than 128 characters' when first name is greater than 128 characters`, () => {
        const isValid = validators.firstNameValid("jgoirejgporjhbpo aerhjerihg ierjgoierj geruhgpierajgoer nughvroidfjrgbkerjngie 555555rjgoirajgrghinughvroidfjrgbkerjngie 555555rjgoirajgrghinughvroidfjrgbkerjngie 555555rjgoirajgrghi ");
  
        expect(isValid).toEqual(false);
        expect(setValidationErrorsSpy).toHaveBeenCalledWith({ firstName: maxCharactersLengthError });
      });
  });


  describe(`lastNameValid()`, () => {
    test(`should return 'This field is required' error when there is no value or empty spaces`, () => {
      const isValid = validators.lastNameValid("     ");

      expect(isValid).toEqual(false);
      expect(setValidationErrorsSpy).toHaveBeenCalledWith({ lastName: requiredFieldError });
    });

    test(`should return 'Should contain at least 3 characters' error when last name is less than 3 characters`, () => {
        const isValid = validators.lastNameValid("e ");
  
        expect(isValid).toEqual(false);
        expect(setValidationErrorsSpy).toHaveBeenCalledWith({ lastName: minCharactersLengthError });
      });

      test(`should return 'Should not be greater than 128 characters' when first name is greater than 128 characters`, () => {
        const isValid = validators.lastNameValid("jgoirejgporjhbpo aerhjerihg ierjgoierj geruhgpierajgoer nughvroidfjrgbkerjngie 555555rjgoirajgrghinughvroidfjrgbkerjngie 555555rjgoirajgrghinughvroidfjrgbkerjngie 555555rjgoirajgrghi ");
  
        expect(isValid).toEqual(false);
        expect(setValidationErrorsSpy).toHaveBeenCalledWith({ lastName: maxCharactersLengthError });
      });
  });

  describe(`phoneValid()`, () => {
    test(`should return 'This field is required' error when there is no value or empty spaces`, () => {
      const isValid = validators.phoneNumberValid("     ");

      expect(isValid).toEqual(false);
      expect(setValidationErrorsSpy).toHaveBeenCalledWith({ phoneNumber: requiredFieldError });
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

    describe(`stateNameValid()`, () => {
      test(`should return 'This field is required' error when there is no value or empty spaces`, () => {
        const isValid = validators.stateNameValid("     ");
  
        expect(isValid).toEqual(false);
        expect(setValidationErrorsSpy).toHaveBeenCalledWith({ stateName: requiredFieldError });
      });
  
        test(`should not return error in case state name is provided`, () => {
          const isValid = validators.stateNameValid("Alaska");
    
          expect(isValid).toEqual(true);
          expect(setValidationErrorsSpy).toHaveBeenCalledWith({ stateName: "" });
        });
      });

    
});
