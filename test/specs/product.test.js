import { expect } from "@wdio/globals";
import homePage from "../pageobjects/home.page.js";
import browsePage from "../pageobjects/browse.page.js";
import productPage from "../pageobjects/product.page.js";
import { address } from "./address.test.js";
import { login } from "./login.test.js";
import { checkout } from "./checkout.test.js";

describe("Product Details", () => {
    it("should view product info", async () => {
        await login();

        await homePage.search();
        await browsePage.searchInput.setValue("Mo");
        await (await browsePage.products).at(0);
        expect(productPage.getProductTitle("Mouse Gamer RGB")).toBeDisplayed();
        await await browsePage.selectProduct;
        await (await productPage.addToCartButton()).click();
        await (await productPage.addNewAddress()).click();
        await browser.pause(2000);
    });

    describe("Address Tests", () => {
        address();
    });
    describe("Should continue to payment", () => {
        checkout();
    });
});
