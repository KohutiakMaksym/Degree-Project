import {BaseElement} from "../elements";
import {BasePage} from "./base.page";
import {Page} from "@playwright/test";

export class HomePage extends BasePage{
    private iAmButton = new BaseElement(
        this.page,
        'button[aria-controls="iam"]',
        'I Am Button'
    );
    private chooseFacultyButton = new BaseElement(
        this.page,
        'button[aria-controls="departments"]',
        'Choose Faculty Button'
    );
    private aStudentLink = new BaseElement(
        this.page,
        'a[href="/en/student-zone"]',
        'I Am Button'
    );
    private facultyOfMathAndCSLink = new BaseElement(
        this.page,
        'a[href="https://www.math.uni.lodz.pl/en/students-zone"]',
        'Faculty of Math and Computer Science Button'
    );

    constructor(page: Page) {
        super(page, 'https://www.uni.lodz.pl/en/');
    }

    async clickChooseWhoIAm() {
        await this.iAmButton.click();
    }
    async clickChooseFaculty() {
        await this.chooseFacultyButton.click();
    }

    async clickStudent() {
        await this.aStudentLink.click();
    }

    async clickFacultyOfMathAndCS() {
        await this.facultyOfMathAndCSLink.click();
    }
}