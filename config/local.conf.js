import { generalConf } from "./general.conf.js";

export let localConf = {
    runner: "local",
    hostname: "127.0.0.1",
    port: 4723,
    path: "/",

    capabilities:
        process.env.PLATFORM === "android"
            ? [
                  {
                      platformName: "Android",
                      "appium:deviceName": "ebac-qe",
                      "appium:platformVersion": "9.0",
                      "appium:automationName": "UiAutomator2",
                      "appium:app": `${process.cwd()}/app/ebacshop.apks`,
                  },
              ]
            : [
                  {
                      platformName: "iOS",
                      deviceName: "iPhone 15",
                      platformVersion: "17.2",
                      automationName: "XCUITest",
                      app: join(process.cwd(), "./app/ios/loja-ebac.app"),
                  },
              ],
    ...generalConf,
};