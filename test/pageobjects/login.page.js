import { $, driver } from "@wdio/globals";

class LoginPage {
    get email() {
        return $('android=new UiSelector().text("Email")');
    }
    get password() {
        if (driver.isAndroid)
            return $('android=new UiSelector().text("Password")');
    }
    get btnLogin() {
        if (driver.isAndroid)
            return $('android=new UiSelector().text("Login")');
        return $("~btnLogin");
    }
    async login(email, password) {
        await this.email.setValue(email);
        await this.password.setValue(password);
        await this.btnLogin.click();
    }
}

export default new LoginPage();
