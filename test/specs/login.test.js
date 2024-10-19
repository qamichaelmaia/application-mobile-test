import { expect, driver } from "@wdio/globals";
import homePage from "../pageobjects/home.page.js";
import loginPage from "../pageobjects/login.page.js";
import profilePage from "../pageobjects/profile.page.js";

export async function login() {
    let profileTab = driver.isAndroid ? "profile" : "profile";
    await homePage.openMenu(profileTab);
    await loginPage.login("michael@ebac.com", "GD*peToHNJ1#c$sgk08EaYJQ");
    await homePage.openMenu(profileTab);
    expect(
        (await profilePage.profileName("EBAC Cliente")).isDisplayed()
    ).toBeTruthy();
    await browser.pause(500);
    await (await homePage.home()).click();
}
