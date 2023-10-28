import {test} from "../fixtures/test.fixture";
import {expect} from "@playwright/test";

test.describe('Contact data: ', async () => {
    test('faculty of Math and CS @student-zone', async ({
        homePage,
        studentPage,
        mathStudentZonePage,
        }) => {
        const expectedTelephone = 'tel: 42/635 59 49';
        const expectedFax = 'fax: 42/635 42 66';
        await homePage.navigate();
        await homePage.waitForLoaded();

        await homePage.clickChooseWhoIAm();
        await homePage.clickStudent();

        await studentPage.waitForSelectedStudent();
        await homePage.clickChooseFaculty();
        await homePage.clickFacultyOfMathAndCS();

        await mathStudentZonePage.waitForSelectedFacultyOfMathAndCS();

        const contact = (await mathStudentZonePage.getContactTelephoneText())
            .split(/(?=fax:)/);
        const [ tel, fax ] = contact;

        expect(tel.trim()).toBe(expectedTelephone);
        expect(fax.trim()).toBe(expectedFax);
    });
});
