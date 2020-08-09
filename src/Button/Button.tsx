import React from "react";

import "./Button.scss"

export type Props = {
    label?: string;
    onClick(): void;
}

export const Button: React.FC<Props> = ({ label, onClick }) => {
    return (
        <button className="Button" onClick={onClick} id="button" data-testid="button">
            {label}
        </button>
    )
}
