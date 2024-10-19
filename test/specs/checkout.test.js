import checkoutPage from "../pageobjects/checkout.page.js";

export async function checkout() {
    it("should continue for payment", async () => {
        await checkoutPage.continueToPayment();
        await browser.pause(2000);
        await (await checkoutPage.confirmCheckout()).click();
    });

    it("should verify successful payment", async () => {
        const isSuccessful = await checkoutPage.isTransactionSuccessful();
        expect(isSuccessful).toBe(true);
        await browser.pause(5000);
    });
}
