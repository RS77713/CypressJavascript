export class BasePage {
  static click(selector) {
    cy.get(selector).click();
  }

  static clickButtonWithText(selector, text) {
    cy.get(selector).contains(text).click()
  }

  static selectOption(selector, option) {
    cy.get(selector).select(option)
  }

  static clickFirst(selector) {
    cy.get(selector).first().click();
  }

  static type(selector, text) {
    cy.get(selector).type(text);
  }

  static isVisible(selector) {
    cy.get(selector).should("be.visible");
  }

  static exist(selector) {
    cy.get(selector).should("exist");
  }

  static acceptCookies() {
    cy.get("#onetrust-button-group #onetrust-accept-btn-handler").click();
  }

  static hasText(selector, text) {
    cy.get(selector).should("have.text", text);
  }

}
