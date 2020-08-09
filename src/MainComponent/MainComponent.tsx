import React, { useState } from "react";

import { questionArray } from "./api";
import { QuestionComponent } from "./../QuestionComponent";
import { Fade } from "./../QuestionComponent/AnimationWrapper";
import { ProgressBarComponent } from "./../ProgressBar";
import { StartEndComponent } from "./../StartEndComponent";
import HomeImage from "./../images/HomeImage.png";
import ThankYouImage from "./../images/ThankYouImage.png";
import { welcomeMessage, getEndComponentQuestion } from "./../utils/index";

import { InfoStore } from "./../utils/types";
import "./MainComponent.scss"

export const initialStoreInfo: InfoStore = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    stateName: "",
}

export const MainComponent: React.FC = () => {
    const [infoStore, setInfoStore] = useState<InfoStore>(initialStoreInfo);
    const [questionCounter, setQuestionCounter] = useState<number>(0);

    const handleStoreChange = (changes: any) => {
        setInfoStore({ ...infoStore, ...changes });
    }

    const handleQuestionNumberChange = (counter: number) => {
        setQuestionCounter(counter + 1);
    }

    const renderQuestionComponent = () => {
        return questionArray.map(item => {

            return (
                <Fade show={questionCounter === item.questionNumber} key={item.questionNumber}>
                    <QuestionComponent
                        questionTitle={item.title}
                        questionNumber={item.questionNumber}
                        fields={item.fields}
                        infoStore={infoStore}
                        onValueChange={handleStoreChange}
                        onButtonClick={handleQuestionNumberChange}
                        buttonLabel={item.questionNumber === questionArray.length ? "Finish" : "Next"}
                    />
                </Fade>
            );
        })
    }

    const renderStartEndDateComponent = () => {
        return (
            <>
                {questionCounter === 0 && <StartEndComponent message={welcomeMessage} buttonLabel="Start" onButtonClick={() => setQuestionCounter(1)} image={HomeImage} />}
                {questionCounter === questionArray.length + 1 && <StartEndComponent message={getEndComponentQuestion(infoStore.firstName, infoStore.lastName, infoStore.phoneNumber)} image={ThankYouImage} />}
            </>
        );

    }

    return (
        <div className="MainComponent-Wrapper" >
            { questionCounter !== 0  && <ProgressBarComponent progress={{ current: questionCounter, total: questionArray.length }} /> }
            {renderStartEndDateComponent()}
            <div className="MainComponent">
                {renderQuestionComponent()}
            </div>

        </div>
    );
}