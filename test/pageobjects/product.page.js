import { $ } from "@wdio/globals";

class ProductPage {
    async getProductTitle(name) {
        return await $(`//android.widget.TextView[@text="${name}"]`);
    }
    async addToCartButton() {
        return await $("//android.widget.TextView[@text='Add To Cart']");
    }
    async addNewAddress() {
        return await $("//android.widget.TextView[@text='Add New Address']");
    }
    async login() {
        return;
    }
}

export default new ProductPage();
