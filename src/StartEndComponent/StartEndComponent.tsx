import React from "react";

import { Button } from "./../Button";
import "./StartEndComponent.scss";

export type Props = {
    message: string;
    image: string;
    buttonLabel?: string;

    onButtonClick?(): void;

}

export const StartEndComponent: React.FC<Props> = ({ image, message, onButtonClick, buttonLabel = "Start" }) => {

    return (
        <div className="Component-Wrapper">
            <img src={image} alt="Matic" />
            <div className="Component-Message"> {message} </div>
            {!!onButtonClick && <Button label={buttonLabel} onClick={onButtonClick!} />}
        </div>
    )
}