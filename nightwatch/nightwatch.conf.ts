module.exports = {
    src_folders: ['tests'],

    test_workers: {
        enabled: true
    },

    webdriver: {
        start_process: true,
    },

    output_folder: 'tests_output',

    test_settings: {
        default: {
			disable_error_log: false,
			end_session_on_fail: false,
			skip_testcases_on_fail: true,

			screenshots: {
				enabled: false,
				path: 'screens',
				on_failure: true,
			},

			/* test_runner: {
				type: 'mocha',
				options: {
					ui: 'bdd',
					timeout: 60000,
					reporter: 'mochawesome', // list, mochawesome
					reporterOptions: {
						reportDir: './tests_output',
						// reportFilename: "[status]_[datetime]-[name]-report",
					},
				},
			}, */
		},
        chrome: {
            webdriver: {
                port: 9515,
                cli_args: [
                    '--verbose'
                ]
            },
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    w3c: true,
                    args: [
                    //     '--disable-gpu',
                    //     '--disable-extensions',
                    //     '--headless',
                    //     '--no-sandbox',
                    //     '--window-size=1920,1080',
                    ]
                }
            }
        },

        firefox: {
            webdriver: {
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

        // Need to install Microsoft Edge, download msedgedriver and place in project root folder
        edge: {
			webdriver: {
				start_process: true,
				server_path: './msedgedriver.exe',
				port: 9516,
				cli_args: [
					'--log',
					'debug',
				],
			},
			desiredCapabilities: {
				platform: 'Windows 10',
				browserName: 'MicrosoftEdge',
				javascriptEnabled: true,
				edgeOptions: {
					// w3c: false
				},
			},
		},
    },
}
