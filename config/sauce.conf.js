import {generalConf} from './general.conf.js';


export let sauceConf = { 
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',

    capabilities: process.env.PLATFORM === "android" ? [
        {
            platformName: 'Android',
            'appium:app': 'storage:filename=ebacshop.aab',
            'appium:deviceName': 'Samsung Galaxy S9 FHD GoogleAPI Emulator',
            'appium:platformVersion': '9.0',
            'appium:automationName': 'UiAutomator2',
            'sauce:options': {
               appiumVersion: '2.11.0',
               build: 'appium-build-teste-ebacshop-android',
               name: 'Ebac Shop Teste',
               deviceOrientation: 'PORTRAIT',
             },
           },
    ] : [
        /*{
            platformName: 'iOS',
            'appium:app': 'storage:filename=LojaEBAC.ipa',
            'appium:deviceName': 'iPhone.*',
            'appium:platformVersion': '17.0',
            'appium:automationName': 'XCUITest',
            'sauce:options': {
               appiumVersion: '2.1.3',
               build: 'appium-build-teste-ebacshop-ios',
               name: 'Ebac Shop Teste'
            },
        }*/
    ],
    ...generalConf
};