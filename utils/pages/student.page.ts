import {BaseElement} from "../elements";
import {BasePage} from "./base.page";
import {Page} from "@playwright/test";

export class StudentPage extends BasePage{
    private iAmAStudentSelected = new BaseElement(
        this.page,
        'span[class="hero__select-selected"]:text("A STUDENT")',
        'I Am a Student Selected Button'
    );

    constructor(page: Page) {
        super(page, 'https://www.uni.lodz.pl/en/student-zone');
    }

    async waitForSelectedStudent() {
        await this.iAmAStudentSelected.waitForVisible();
    }
}