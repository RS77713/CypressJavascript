import { ProductsPage } from "../pageObjects/productsPage";
import { LoginPage } from "../pageObjects/loginPage";
import { BasePage } from "../pageObjects/basePage";

describe("Login test cases", () => {
  beforeEach(() => {
    cy.visit("/");
    BasePage.acceptCookies();
  });

  it("Create new profile", () => {
    LoginPage.goToLoginPage();
    LoginPage.createProfile();
  });

  it("Logging in - valid user", () => {
    LoginPage.goToLoginPage();
    LoginPage.inputUserDetails("edgars");
    ProductsPage.checkIfContainerVisible();
  });

  it("Logging in - with invalid user", () => {
    LoginPage.goToLoginPage();
    LoginPage.inputUserDetails("edgarsWrong");
    LoginPage.verifyErrorMessage("This email address or password is incorrect");
  });

  it("Logging in - with invalid user + steps with forget password", () => {
    LoginPage.goToLoginPage();
    LoginPage.inputLoginDataAndLogin("1@gmail.com", "pasword");
    LoginPage.verifyErrorMessage("This email address or password is incorrect");
    LoginPage.clickForgottenYourPasswordButton();
    LoginPage.verifyTextMessage('Create a new password');
  });
});
