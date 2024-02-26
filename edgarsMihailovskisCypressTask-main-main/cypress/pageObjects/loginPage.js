import { BasePage } from "./basePage";

const LOGIN_ICON = "#divSignIn";
const USER_NAME_FIELD = "#Login_EmailAddress";
const PASSWORD_FIELD = "#Login_Password";
const LOGIN_BUTTON = "#LoginButton";
const ERROR_MESSAGE = ".field-validation-error";
const FORGOTTEN_PASSWORD_BUTTON = ".ForgotPasswordLinkButton";
const FORGOTTEN_PASWORD_EMAIL_FILL = "#EmailAddress";
const FORGOTTEN_PASSWORD_SEND_EMAIL = "#EmailRequestSubmit";
const FORGOTTEN_PASSWORD_SEND_EMAIL_TEXT = ".innerPass";
const CONTINUE_SECURELY_REGISTRATION_BUTTON = ".dnnPrimaryAction";
const REGISTRATION_TITLE = "#Registration_Title";
const NEW_USER_NAME_FIELD = "#Registration_FirstName";
const NEW_USER_LAST_NAME_FIELD = "#Registration_LastName";
const NEW_USER_EMAIL_FIELD = "#Registration_EmailAddress";
const NEW_USER_DATE_FIELD = "#Registration_DateOfBirthDay";
const NEW_USER_MONTH_FIELD = "#Registration_DateOfBirthMonth";
const NEW_USER_YEAR_FIELD = "#Registration_DateOfBirthYear";
const NEW_USER_PASSWORD_FIELD = "#txtPassword";
const NEW_USER_PASSWORD_CONFIRM_FIELD = "#Registration_ConfirmPassword";
const NEW_USER_SUBMIT_FIELD = "#RegistrationSubmit";
const RANDOM_NUMBER = Math.floor(Math.random()*999999999);


export class LoginPage extends BasePage {
        static goToLoginPage() {
            this.click(LOGIN_ICON);
            this.isVisible(USER_NAME_FIELD);
        }

        static createProfile() {
            this.clickButtonWithText(CONTINUE_SECURELY_REGISTRATION_BUTTON, 'Continue Securely');
            this.isVisible(REGISTRATION_TITLE);
            this.selectOption(REGISTRATION_TITLE, 'Mrs');
            this.type(NEW_USER_NAME_FIELD, `name${RANDOM_NUMBER}`);
            this.type(NEW_USER_LAST_NAME_FIELD, `lastName${RANDOM_NUMBER}`);
            this.type(NEW_USER_EMAIL_FIELD, `email${RANDOM_NUMBER}@gmail.com`);
            this.selectOption(NEW_USER_DATE_FIELD, '5');
            this.selectOption(NEW_USER_MONTH_FIELD, '4');
            this.selectOption(NEW_USER_YEAR_FIELD, '1990');
            this.type(NEW_USER_PASSWORD_FIELD, RANDOM_NUMBER);
            this.type(NEW_USER_PASSWORD_CONFIRM_FIELD, RANDOM_NUMBER);
            this.clickButtonWithText(NEW_USER_SUBMIT_FIELD, 'Register');
        }
        
        static inputLoginDataAndLogin(username, password) {
            this.type(USER_NAME_FIELD, username);
            this.type(PASSWORD_FIELD, password);
            this.click(LOGIN_BUTTON);
        }

        static clickStartLoginButton() {
            this.click(LOGIN_ICON);
        }

        static verifyErrorMessage(error) {
            this.isVisible(ERROR_MESSAGE);
            this.hasText(ERROR_MESSAGE, error);
        }
        static clickForgottenYourPasswordButton() {
            this.click(FORGOTTEN_PASSWORD_BUTTON);
            this.type(FORGOTTEN_PASWORD_EMAIL_FILL,`email${RANDOM_NUMBER}@gmail.com`);
            this.click(FORGOTTEN_PASSWORD_SEND_EMAIL);
        }
        static verifyTextMessage(){
            this.exist(FORGOTTEN_PASSWORD_SEND_EMAIL_TEXT);
        }

        static inputUserDetails(user) {
            cy.fixture("users").then((users) => {
              let chosenUser = users[user];
              this.type(USER_NAME_FIELD, chosenUser.email);
              this.type(PASSWORD_FIELD, chosenUser.pasword);
              this.click(LOGIN_BUTTON);
            
            });
        }
}
