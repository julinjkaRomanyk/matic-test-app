export type Question = {
  title: string;
  fields: Field[];
  questionNumber: number;
};

export type Field = {
  id: FieldId;
  label: string;
  type: string;
  mask?: string;
};

export enum FieldId {
  firstName = "firstName",
  lastName = "lastName",
  phoneNumber = "phoneNumber",
  stateName = "stateName"
}

export const questionArray: Question[] = [
    {
      "title": "What is Your Name?",
      questionNumber: 1,
      "fields": [
        {
          "id": FieldId.firstName,
          "label": "First Name",
          "type": "input",
          "mask": ""
        },
        {
          "id": FieldId.lastName,
          "label": "Last Name",
          "type": "input",
          "mask": ""
        }
      ]
    },
    {
      "title": "How Can We Reach Out to You?",
      questionNumber: 2,
      "fields": [
        {
          "id": FieldId.phoneNumber,
          "label": "Phone Number",
          "type": "input",
          "mask": "(999) 999-9999"
        }
      ]
    },
    {
      "title": "Where is Your House Located In?",
      questionNumber: 3,
      "fields": [
        {
          "id": FieldId.stateName,
          "label": "State",
          "type": "select"
        }
      ]
    }
  ]
  