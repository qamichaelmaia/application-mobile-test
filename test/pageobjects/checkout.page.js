class CheckoutPage {
    get continueToPaymentButton() {
        return $(`//android.widget.TextView[@text="Continue to payment"]`);
    }
    async continueToPayment() {
        await this.continueToPaymentButton.waitForDisplayed();
        await this.continueToPaymentButton.click();
    }
    async confirmCheckout() {
        return await $(`//android.widget.TextView[@text="Checkout"]`);
    }
        get transactionSuccessfulImage() {
            return $(`//android.widget.ImageView[@resource-id="transactionSuccessfulImage"]`);
        }
        async isTransactionSuccessful() {
            await this.transactionSuccessfulImage.waitForDisplayed({
                timeout: 5000, 
                timeoutMsg: 'A imagem de sucesso da transação não foi exibida a tempo'
            });
            return this.transactionSuccessfulImage.isDisplayed();
        }
}

export default new CheckoutPage();
