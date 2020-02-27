import { NightwatchBrowser } from 'nightwatch';

export class SearchScene {
    constructor(
        private browser: NightwatchBrowser,
    ) {}

    async waitForSearchPage(): Promise<void> {
        await this.browser.waitForElementPresent(SELECTORS.searchInput, 2000);
    }

    async typeInSearch(text: string): Promise<void> {
        await this.browser.setValue(SELECTORS.searchInput, text);
    }

    async getTypedText(): Promise<string> {
        const text: any = await this.browser.getValue(SELECTORS.searchInput);
        return text.value;
    }

    async clickSearch(): Promise<void> {
        await this.browser.click(SELECTORS.clickSearch);
    }
}

const SELECTORS = {
    searchInput: 'input[title="Szukaj"]',
    clickSearch: 'input[value="Szukaj w Google"]'
}