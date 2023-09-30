import { Page } from '@playwright/test';
import baseConfig from '../../playwright.config';

export abstract class BasePage {
    protected defaultNavigationTimeout = 40000;

    protected readonly page: Page;
    protected readonly url: string;

    protected constructor(page: Page, url: string) {
        this.page = page;
        this.url = url;
    }

    async navigate(endpoint?: string) {
        const finalUrl = endpoint ? this.url + endpoint : this.url;
        await this.page.goto(finalUrl);
    }

    async waitForLoaded(
        timeout: number = baseConfig.use?.navigationTimeout ??
        this.defaultNavigationTimeout,
    ) {
        await this.page.waitForURL(this.url, {
            waitUntil: 'load',
            timeout: timeout,
        });
        await this.page.waitForLoadState('load');
    }

    doesPageContainText(expectedText: string) {
        return this.page.getByText(expectedText) !== undefined;
    }

    async clickOnPage() {
        await this.page.click('body');
    }

    async saveContext(path: string) {
        await this.page.context().storageState({ path: path });
    }

    async pressEnter() {
        await this.page.keyboard.press('Enter');
    }
}