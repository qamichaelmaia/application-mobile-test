import { $, $$ } from "@wdio/globals";

class BrowsePage {
    get searchInput() {
        return $(`//android.widget.EditText[@resource-id="searchInput"]`);
    }
    get products() {
        return $$("android.widget.TextView[resource-id='productDetails']");
    }
    get selectProduct() {
        return $(`//android.widget.TextView[@text="Mouse Gamer RGB"]`).click();
    }
    async searchForProduct(productName) {
        await this.searchInput.setValue(productName);
    }
}

export default new BrowsePage();
