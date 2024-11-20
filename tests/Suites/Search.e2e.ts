import { SearchScene } from '../Scenes/SearchScene';
import * as google from '../data/google';

describe('Google search', () => {
	beforeEach ((browser) => {
		console.log('Setting up...\n');
		browser.window.maximize();
	});

	afterEach ((browser) => {
		console.log('Closing down...\n');
		browser.end();
	});

	it('should type a text and click search', async () => {
		const searchScene = new SearchScene(browser);

		await browser.url(google.url);
		await searchScene.waitForSearchPage();
		await searchScene.clickRejectAll();
		await searchScene.typeInSearch(google.searchText);
		await searchScene.clickSearch();

		await browser.verify.titleContains(google.searchText);
	});
});
