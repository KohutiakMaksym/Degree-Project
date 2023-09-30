import { setup } from '../../fixtures/setup.fixture';
import { expect } from '@playwright/test';

setup(
    'Accepting all cookies',
    async ({ homePage, cookiesBanner }) => {
        await homePage.navigate();

        await expect(cookiesBanner.getLocator()).toBeVisible();
        await cookiesBanner.clickAcceptAll();

        await homePage.saveContext(`playwright/.auth/fixedUser.json`);
    },
);