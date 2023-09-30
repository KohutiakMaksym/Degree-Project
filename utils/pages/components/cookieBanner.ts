import { Page } from '@playwright/test';
import { BaseElement } from '../../elements';

export class CookiesBanner extends BaseElement {
    private acceptAllBtn = new BaseElement(
        this.page,
        'button[data-omcookie-panel-save="all"]',
        'Accept All Button',
    );

    constructor(page: Page) {
        super(page, 'div[class="om-cookie-panel active"]', 'Cookies Banner');
    }

    async clickAcceptAll() {
        await this.acceptAllBtn.click();
    }
}
