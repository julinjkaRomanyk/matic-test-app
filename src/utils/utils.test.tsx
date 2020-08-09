import { getEndComponentQuestion } from "./index";

test("Returns about-us for english language", () => {
    const firstName = "Julia";
    const lastName = "Romanyk";
    const number = "666";

        expect(getEndComponentQuestion(firstName, lastName, number)).toBe("Thanks for Your Answers, Julia Romanyk. We Will Call You at number: 666  Within 24 Hours");
});