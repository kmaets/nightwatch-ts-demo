import { LoginPage } from '@poms/loginPage';
import { SideMenu } from '@components/sideMenu';

import { SAUCE_URLS } from '@config/urls';
import { USER_CREDS } from '@config/credentials';

describe('Login page', () => {
	before((browser) => {
		browser.window.maximize();
	});

	afterEach((browser) => {
		browser.executeScript(() => {
			localStorage.clear();
			sessionStorage.clear();
		});
		browser.cookies.deleteAll();
	});

	after((browser) => {
		browser.end();
	});

	it('should open swag labs login page', async () => {
		await browser.url(SAUCE_URLS.base);
		await browser.verify.equal(await browser.title(), 'Swag Labs');
	});

	it('should log in with valid credentials and log out', async () => {
		const loginPage = new LoginPage(browser);
		const sideMenu = new SideMenu(browser);

		await browser.url(SAUCE_URLS.base);
		await loginPage.waitForLoginPage();
		await loginPage.login({ username: USER_CREDS.users.standard, password: USER_CREDS.password });
		await browser.verify.urlMatches(new RegExp(`${SAUCE_URLS.allProducts}`));

		await sideMenu.clickSideMenuLink('Logout');
		await browser.verify.equal(await loginPage.isLoginPageVisible(), true);
	});

	it('should log in with invalid credentials', async () => {
		const loginPage = new LoginPage(browser);

		await browser.url(SAUCE_URLS.base);
		await loginPage.waitForLoginPage();
		await loginPage.login({ username: USER_CREDS.users.fake, password: USER_CREDS.password });

		await browser.verify.equal(await loginPage.isLoginErrorVisible(), true);
		await browser.verify.match(await loginPage.getLoginErrorMessage(), /Username and password do not match/);
	});
});
