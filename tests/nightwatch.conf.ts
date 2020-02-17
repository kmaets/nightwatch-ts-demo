/* eslint-disable @typescript-eslint/camelcase */

module.exports = {
    src_folders: ['./build/e2e'],
    // src_folders: ['./tests/e2e'],

    webdriver: {
        start_process: true,
    },

    test_settings: {
        chrome: {
            webdriver: {
                server_path: require('chromedriver').path,
                port: 9515,
                cli_args: [
                    '--verbose'
                ]
            },
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    // args: [
                    //     '--disable-gpu',
                    //     '--disable-extensions',
                    //     '--headless',
                    //     '--no-sandbox',
                    //     '--window-size=1920,1080',
                    // ]
                }
            }
        },

        firefox: {
            webdriver: {
                server_path: require('geckodriver').path,
                port: 4444,
                cli_args: [
                    '--log',
                    'debug'
                ]
            },
            desiredCapabilities: {
                browserName: 'firefox'
            },
        },

        // Microsoft Edge Legacy ver. 18
        edge18: {
            selenium: {
                start_process: true,
                server_path: require('selenium-server').path,
                // server_path: 'C:\\Users\\Kamil\\Downloads\\selenium-server-standalone-3.9.1.jar',
                port: 17556,
                cli_args: {
                    'webdriver.edge.driver': 'C:/Windows/SysWOW64/MicrosoftWebDriver.exe',
                }
            },
            desiredCapabilities: {
                browserName: 'MicrosoftEdge',
            },
        },

        // Need to install Microsoft Edge
        edge: {
            selenium: {
                start_process: true,
                server_path: require('selenium-server').path,
                port: 9516,
                cli_args: {
                    'webdriver.edge.driver': 'C:/Users/Kamil/Downloads/msedgedriver.exe --port=9516',
                }
            },
            desiredCapabilities: {
                browserName: 'MicrosoftEdge',
                chromeOptions: {
                    w3c: false,
                    // binary: 'C:/Program Files (x86)/Microsoft/Edge Beta/Application/msedge.exe'
                }
            },
        },


        // Internet Explorer 11 - doesn't open pages due to Promises incompatibility 
        ie: {
            selenium: {
                start_process: true,
                server_path: require('selenium-server').path,
                port: 5555,
                cli_args: {
                    'webdriver.ie.driver': process.platform === 'win32' ? require('iedriver').path : ''
                }
            },
            desiredCapabilities: {
                browserName: 'internet explorer'
            }
        }
    }
}
