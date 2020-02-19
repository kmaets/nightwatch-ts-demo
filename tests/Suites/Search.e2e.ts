import { NightwatchBrowser } from 'nightwatch';
import { SearchScene } from '../Scenes/SearchScene'

module.exports = {

    'Search test': async (browser: NightwatchBrowser): Promise<void> => {

        const searchScene = new SearchScene(browser);

        await browser.maximizeWindow();
        await browser.url('https://www.google.com');

        await searchScene.waitForSearchPage();
        await searchScene.typeInSearch('nightwatch');

        // const result: any = await browser.getValue('input[name="email"]');
        // console.log('Value', result.value);
        const text = await searchScene.getTypedText();

        // console.log('Value', await searchScene.getTypedText());
        console.log('Value', text);

        await browser.end();
    }
};