class AddressPage {
    // Seletores dos elementos na página de endereço
    get name() {
        return $(`//android.widget.EditText[@text="Enter your name"]`); 
    }
    get phone() {
        return $(`//android.widget.EditText[@text="Enter your mobile number"]`); 
    }
    get address() {
        return $(`//android.widget.EditText[@text="Enter your address"]`); 
    }
    get city() {
        return $(`//android.widget.EditText[@text="City"]`); 
    }
    get state() {
        return $(`//android.widget.EditText[@text="State"]`); 
    }
    get zipCode() {
        return $(`//android.widget.EditText[@text="ZipCode"]`); 
    }
    get saveButton() {
        return $(`//android.widget.TextView[@text="Save"]`);
    }

    async addNewAddress(name, phone, address, city, state, zipCode) {
        await this.name.setValue(name); 
        await this.phone.setValue(phone); 
        await this.address.setValue(address); 
        await this.city.setValue(city); 
        await this.state.setValue(state);  
        await this.zipCode.setValue(zipCode); 
        await this.saveButton.click(); 
    }
}

export default new AddressPage();
