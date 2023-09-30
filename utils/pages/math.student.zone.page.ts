import {BaseElement} from "../elements";
import {BasePage} from "./base.page";
import {Page} from "@playwright/test";

export class MathStudentZonePage extends BasePage{
    private facultyOfMathAndCSSelected = new BaseElement(
        this.page,
        'span[class="hero__select-selected"]:text("Faculty of Mathematics and Computer Science")',
        'I Am a Student Selected Button'
    );

    private contactTelephoneText = new BaseElement(
        this.page,
        'p:has-text("tel")',
        'Contact Telephone Number'
    );

    constructor(page: Page) {
        super(page, 'https://www.math.uni.lodz.pl/en/students-zone');
    }

    async waitForSelectedFacultyOfMathAndCS() {
        await this.facultyOfMathAndCSSelected.waitForVisible();
    }

    async getContactTelephoneText() {
        return await this.contactTelephoneText.getText();
    }
}