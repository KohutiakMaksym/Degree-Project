import { test as base } from '@playwright/test';
import {HomePage, MathStudentZonePage, StudentPage} from "../utils/pages";

type Pages = {
    homePage: HomePage;
    studentPage: StudentPage;
    mathStudentZonePage: MathStudentZonePage
}

export const test = base.extend<Pages>({
    page: [
        async ({context}, use) => {
            const page = await context.newPage();
            await use(page);

            await page.close();
            await context.close();
        },
        {timeout: 10000, scope: 'test'},
    ],
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    studentPage: async ({ page }, use) => {
        const studentPage = new StudentPage(page);
        await use(studentPage);
    },
    mathStudentZonePage: async ({ page }, use) => {
        const mathStudentZonePage = new MathStudentZonePage(page);
        await use(mathStudentZonePage);
    },
})