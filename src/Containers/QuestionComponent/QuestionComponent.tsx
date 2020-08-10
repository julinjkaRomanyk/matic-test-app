import React, {useRef, useReducer} from "react";

import { Button } from "Components/Button";
import { Input } from "Components/Input";
import { Select } from "Components/SearchSelect";

import "./QuestionComponent.scss"
import { Field, FieldId } from "Containers/MainComponent/api";
import { InfoStore } from "utils/types";
import { statesList } from "utils/index";
import { validationErrorsReducer, initialValidationErrors, initializeValidators } from "./validation";

export type Props = {
    questionTitle: string;
    questionNumber: number;
    buttonLabel?: string;
    fields: Field[];
    infoStore: InfoStore;

    onValueChange(changes: any): void;
    onButtonClick(number: number): void;

}

export const QuestionComponent: React.FC<Props> = ({ questionTitle, buttonLabel, onButtonClick, onValueChange, questionNumber,  fields, infoStore }) => {
    const [validationErrors, setValidationErrors] = useReducer(validationErrorsReducer, initialValidationErrors);
    const { current: validators } = useRef(initializeValidators(setValidationErrors));
 

        const handleButtonClick = () => {
            // All switch cases can be refactored in favor of a small method that could automatically take RegExp
            //  from the api and just test field with proper regex string and return default "Invalid value" error message
            // So later I'd like to explain my choice of creating separate error form

            const isFormValid = fields.map(field => {
                switch (field.id) {
                    case FieldId.firstName: return validators.firstNameValid(infoStore[field.id]);
                    case FieldId.lastName: return validators.lastNameValid(infoStore[field.id]);
                    case FieldId.phoneNumber: return validators.phoneNumberValid(infoStore[field.id]);
                    case FieldId.stateName: return validators.stateNameValid(infoStore[field.id]);
    
                    default: return true;
                }
            });
    
            const validFields = isFormValid.every(field => field)
    
            if(validFields) {
                onButtonClick(questionNumber)
                }

        }

        const handleValueChange = (value: string, fieldId: FieldId  ) => {
            setValidationErrors({...validationErrors, [fieldId] : "" })
            onValueChange({ [fieldId] : value })
        }

        const selectProps = {
            placeholder: "Select",
            options: statesList,
          };

        const getQuestionFields = (fields : Field[]) => {
            return (
                <>
                    <div className="QuestionComponent-Inputs-Wrapper">
                        {
                            fields.map((field: Field) => {
                                switch (field.type) {
                                    case "input": return <Input key={questionNumber + field.id} error={validationErrors[field.id]} label={field.label} onChange={(event) => handleValueChange(event, field.id )} mask={field.mask} />;           
                                    case "select": return <Select key={questionNumber + field.id} error={validationErrors[field.id]} selectProps={{...selectProps, onChange: (state: any) => handleValueChange(state.value, field.id) }} label={field.label} />;
                                    default: return <Input  key={questionNumber + field.id} onChange={ () => {} } />;
                                }
                            })
                        }
                    </div>
                    <Button label={buttonLabel} onClick={handleButtonClick} data-testid="button-callback" />
                </>
            )
         
        };

    return (
        <div className="QuestionComponent-Wrapper">
            <div className="QuestionComponent-QuestionTitle">
                {questionTitle}
            </div>
            <div className="QuestionComponent-Input-Wrapper">
            {getQuestionFields(fields)}
            </div>
        </div>
    )
};