import { $ } from "@wdio/globals";
class HomePage {
    async openMenu(menu) {
        const element = await $(
            `//android.widget.TextView[@resource-id="tab-profile"]`
        );
        await element.waitForDisplayed();
        await element.click();
    }
    async search() {
        const searchProductsElement = await $(
            `//android.widget.TextView[@resource-id="search-products"]`
        );
        await searchProductsElement.waitForDisplayed();
        await searchProductsElement.click();
    }
    async home() {
        return await $(`//android.widget.TextView[@resource-id="tab-home"]`);
    }
}

export default new HomePage();
