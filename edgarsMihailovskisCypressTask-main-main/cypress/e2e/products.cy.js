import { ProductsPage } from "../pageObjects/productsPage";
import { LoginPage } from "../pageObjects/loginPage";
import { BasePage } from "../pageObjects/basePage";

describe("Product test cases", () => {
  beforeEach(() => {
    cy.visit("/");
    BasePage.acceptCookies();
  });

  it("Sorting shown products - By Brand - A to Z", () => {
    ProductsPage.selectMainCategory();
    ProductsPage.productSubCategory();
    ProductsPage.selectSortingOption();
    //ProductsPage.verifyLowToHighPrices();
  });

  it("Filtering the shown products by a specific Brand", () => {
    ProductsPage.selectMainCategory();
    ProductsPage.productSubCategory();
    ProductsPage.productFiltering();
  });

  it("Products shown in the “Sales” page have got a discount applied to them", () => {
    ProductsPage.selectMainCategory();
    ProductsPage.productSubCategory();
    ProductsPage.discauntSecondPriceChecking();//fails because has one product without discounted price
  });

});
