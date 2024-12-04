import { NightwatchAPI } from 'nightwatch';

export class SideMenu {
	constructor(
		private browser: NightwatchAPI,
	) {}

	async waitForSideMenu(): Promise<void> {
		await this.browser.waitForElementVisible(SELECTORS.sideMenu.container);
	};

	async openSideMenu(): Promise<void> {
		await this.browser.element.findByText(SELECTORS.openMenu).click();
	};

	async closeSideMenu(): Promise<void> {
		await this.browser.element.findByText(SELECTORS.closeMenu).click();
	};

	async clickSideMenuLink(link: string): Promise<void> {
		await this.openSideMenu();
		await this.waitForSideMenu();
		switch (link) {
			case 'All Items':
				await this.browser.element.findByText(SELECTORS.sideMenu.allItems).click();
				break;
			case 'About':
				await this.browser.element.findByText(SELECTORS.sideMenu.about).click();
				break;
			case 'Logout':
				await this.browser.element.findByText(SELECTORS.sideMenu.logout).click();
				break;
			default:
				break;
		}
	};
}

const SELECTORS = {
	sideMenu: {
		container: 'nav',
		allItems: 'All Items',
		about: 'About',
		logout: 'Logout',
		resetSate: 'Reset App State',
	},
	openMenu: 'Open Menu',
	closeMenu: 'password',
	loginButtonText: 'Login',
};
