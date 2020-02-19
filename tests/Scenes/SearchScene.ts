import { NightwatchBrowser } from 'nightwatch';

export class SearchScene {
    protected browser: NightwatchBrowser;

    constructor(browser: NightwatchBrowser) {
        this.browser = browser;
    }

    async waitForSearchPage(): Promise<void> {
        await this.browser.waitForElementPresent(this.SELECTORS.searchInput, 2000);
    }

    async typeInSearch(text: string): Promise<void> {
        await this.browser.setValue(this.SELECTORS.searchInput, text);
    }

    async getTypedText(): Promise<string> {
        const text: any = await this.browser.getValue(this.SELECTORS.searchInput);
        return text.value;
    }

    async clickSearch(): Promise<void> {
        await this.browser.click(this.SELECTORS.clickSearch);
    }


    protected SELECTORS = {
        searchInput: 'input[title="Szukaj"]',
        clickSearch: 'input[value="Szukaj w Google"]'
    }
}
