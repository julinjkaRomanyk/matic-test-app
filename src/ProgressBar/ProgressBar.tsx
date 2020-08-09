import React from "react";
import "./ProgressBar.scss";

import { Progress } from "./../utils/types";

interface Props {
    progress: Progress;
    className?: string;
    progressTextValue?: string;
}

export const calculatePercentage = ({ current, total }: Progress) => (total === 0 ? 0 : (current * 100) / total);

export const ProgressBarComponent: React.FC<Props> = ({ progress, progressTextValue, className }) => {
    const width = `${calculatePercentage(progress)}%`;

    return (
        <div
            className={`jkl-progress-bar ${className}`}
            role="progressbar"
            aria-valuenow={progress.current}
            aria-valuemin={0}
            aria-valuetext={progressTextValue}
            aria-valuemax={progress.total}
            data-testid="jkl-progress-bar"
        >
            <span className="jkl-progress-bar__tracker" style={{ width }} data-testid="jkl-progress-bar__tracker" />
        </div>
    );
};