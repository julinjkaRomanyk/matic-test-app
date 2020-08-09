import React, { useState } from "react";
import InputMask from "react-input-mask";

import "./Input.scss"

export type Props = {
    label?: string;
    error?: string;
    mask?: string;

    onChange(value: string): void;
}

export const Input: React.FC<Props> = ({ label = "", error = "", onChange, mask = "" }) => {
    const [inputValue, setInputValue] = useState<string>("");

    const handleValueChange = (value: string) => {
        setInputValue(value);
        onChange(value);
    }

    const getInputComponent = () => {
        if (mask) {
            return (
                <InputMask
                    value={inputValue}
                    onChange={event => handleValueChange(event.target.value)}
                    mask={mask}
                >
                    {(inputProps: any) => <input {...inputProps} data-testid="Input" />}
                </InputMask>
            )
        } else return (
            <input
                onChange={event => handleValueChange(event.target.value)}
                value={inputValue}
                data-testid="Input" />
        )
    };

    return (
        <div className={`Input-Wrapper ${error ? "Input-Wrapper-Error" : ""}`} >
            {label ? <span className="Input-Label" data-testid="Input-Label" > {label} </span> : null}
            {getInputComponent()}
            {!!error ? <span className="Input-Error" data-testid={"Input-Error"}> {error} </span> : null}
        </div>
    )
}