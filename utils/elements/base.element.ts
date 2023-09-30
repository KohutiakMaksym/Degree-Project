import { Locator, Page } from '@playwright/test';
import baseConfig from '../../playwright.config';

type ClickOptions = Parameters<BaseElement['locator']['click']>[0];
type IsVisibleOptions = Parameters<BaseElement['locator']['isVisible']>[0];

export class BaseElement {
    readonly name: string;
    protected defaultActionTimeout = 10000;
    protected readonly page: Page;
    protected readonly selector: string;
    protected readonly locator: Locator;

    public constructor(page: Page, selector: string, name: string) {
        this.page = page;
        this.selector = selector;
        this.locator = this.page.locator(selector);
        this.name = name;
    }

    public getLocator() {
        return this.locator;
    }

    async click(options?: ClickOptions) {
        await this.waitForVisible();
        await this.locator.click(options);
    }

    async isVisible(options?: IsVisibleOptions) {
        return await this.locator.isVisible(options);
    }

    async waitForVisible(
        timeout: number = baseConfig.use?.actionTimeout ??
        this.defaultActionTimeout,
    ) {
        await this.locator.waitFor({ state: 'visible', timeout: timeout });
    }

    async waitForHidden(
        timeout: number = baseConfig.use?.actionTimeout ??
        this.defaultActionTimeout,
    ) {
        await this.locator.waitFor({ state: 'hidden', timeout: timeout });
    }

    async getValue() {
        return await this.locator.inputValue();
    }

    async getText() {
        return await this.locator.textContent();
    }
}