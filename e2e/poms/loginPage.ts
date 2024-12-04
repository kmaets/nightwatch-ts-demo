import { NightwatchAPI } from 'nightwatch';

interface UserCreds {
	username: string
	password: string
}

export class LoginPage {
	constructor(
		private browser: NightwatchAPI,
	) {}

	async waitForLoginPage(): Promise<void> {
		await this.browser.waitForElementPresent(SELECTORS.loginContainer, 2000);
	}

	async isLoginPageVisible(): Promise<boolean> {
		return this.browser.isVisible(SELECTORS.loginContainer);
	};

	async enterUsername(text: string): Promise<void> {
		await this.browser.setValue(SELECTORS.username, text);
	}

	async enterPassword(text: string): Promise<void> {
		await this.browser.setValue(SELECTORS.password, text);
	}

	async clickLogin(): Promise<void> {
		await this.browser.element.findElement(SELECTORS.loginButtonText).click();
	};

	async login({ username, password }: UserCreds) {
		await this.enterUsername(username);
		await this.enterPassword(password);
		await this.clickLogin();
	};

	async isLoginErrorVisible(): Promise<boolean> {
		return this.browser.element.findByRole('heading', { level: 3 }).isVisible();
	};

	async getLoginErrorMessage(): Promise<string> {
		return this.browser.element.findByRole('heading', { level: 3 }).getText();
	};
}

const SELECTORS = {
	loginContainer: 'div[data-test="login-container"]',
	username: '[data-test="username"]',
	password: '[data-test="password"]',
	loginButtonText: '[data-test="login-button"]',
};