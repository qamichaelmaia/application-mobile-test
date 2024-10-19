import addressPage from "../pageobjects/address.page.js";

export async function address() {
    it("should add new address", async () => {
        await addressPage.addNewAddress(
            "Michael",
            "71988665577",
            "Caixa Dagua",
            "Jacobina",
            "Bahia",
            "4470555"
        );
        await browser.pause(4000);
    });
}
