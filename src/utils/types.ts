export type InfoStore = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    stateName: string;
};

export type Progress = {
    current: number;
    total: number;
};

export enum Fields {
    nameQuestion = "nameQuestion",
    phoneQuestion = "phoneQuestion",
    stateQuestion = "stateQuestion",
};


export type DefaultOption = { 
    label: string; 
    value: string 
};