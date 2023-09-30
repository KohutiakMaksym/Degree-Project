import { test as base } from '@playwright/test';
import { CookiesBanner, HomePage } from '../utils/pages';

type Pages = {
    cookiesBanner: CookiesBanner;
    homePage: HomePage;
}

export const setup = base.extend<Pages>({
    cookiesBanner: async ({ page }, use) => {
        const cookiesBanner = new CookiesBanner(page);
        await use(cookiesBanner);
    },
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
});

export { expect } from '@playwright/test';