export const config = {
    /*runner: "local",
    hostname: "127.0.0.1",
    port: 4723, 
    path: "/", */
    
    ///specs: ["./test/specs/**/*.js"],
    ///maxInstances: 1,
    /*capabilities: [
        {
            "platformName": "Android",
            "appium:deviceName": "ebac-qe",
            "appium:platformVersion": "9.0",
            "appium:automationName": "UiAutomator2",
            "appium:app": `${process.cwd()}/app/ebacshop.apks`
          },
    ],
    suites: {
        login: [
            './test/specs/login.test.js'
        ],
        product: [
            './test/specs/product.test.js'
        ],
        search: [
            './test/specs/search.test.js'
        ],
    },

    logLevel: "info",
    waitforTimeout: 20000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: "mocha",
    reporters: [
        "spec",
        [
            "allure",
            {
                outputDir: "allure-results",
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
            },
        ],
    ],
    mochaOpts: {
        ui: "bdd",
        timeout: 300000,
    },
    ///afterSuite: async function () {},
    afterTest: async function (test, context, { error, result, duration, passed, retries }
    ) {
        await driver.takeScreenshot();
        await driver.execute('mobile: terminateApp', { bundleId: 'br.com.lojaebac' })

    },
    afterSuite: async function () {},
    ///beforeSuite: async function () {
    beforeTest: async function () {
        let state = await driver.queryAppState("br.com.lojaebac")
        if(state !== 4){
            await driver.execute('mobile: launchApp', { bundleId: 'br.com.lojaebac' })
        }
    },*/
};
