import { NightwatchAPI } from 'nightwatch';

export class SearchScene {
	constructor(
		private browser: NightwatchAPI,
	) {}

	async waitForSearchPage(): Promise<void> {
		await this.browser.waitForElementPresent(SELECTORS.searchInput, 2000);
	}

	async typeInSearch(text: string): Promise<void> {
		await this.browser.setValue(SELECTORS.searchInput, text);
	}

	async getTypedText(): Promise<string> {
		return this.browser.getValue(SELECTORS.searchInput);
	}

	async clickSearch(): Promise<void> {
		await this.browser.click(SELECTORS.clickSearch);
	}

	async clickRejectAll(): Promise<void> {
		await this.browser.element.findByText(SELECTORS.rejectAllText).click();
	}
}

const SELECTORS = {
	searchInput: 'textarea[title="Search"]',
	clickSearch: 'input[value="Google Search"]',
	rejectAllText: 'Reject all',
};
