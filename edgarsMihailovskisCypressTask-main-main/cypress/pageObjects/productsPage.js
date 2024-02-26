import { BasePage } from "./basePage";

const LOGGED_IN_CHECK= "#divAccount";
const SELECT_PRODUCT_CATEGORY = "#lnkTopLevelMenu_2769263";
const SELECT_PRODUCT_SUBCATEGORY = ".category";
const PRODUCT_FILTER_OPTION_BRAND_A_Z = "#MobSortOptions_brand_asc";
const PRODUCT_PRICE_SORT = ".CurrencySizeLarge.curprice";
const PRODUCT_FILTERING_ICON = ".mobFilterAppIcon";
const PRODUCT_FILTERING_BY_BRAND = ".productFilterTitle";
const PRODUCT_BRAND = '[data-filtername="Nike"]';
const PRODUCT_BY_BRAND_APPLY = '.textIconWrap';
const PRODUCT_DESCRIPTION_BRAND = '.selectedFilter .selectedFilterLabel';
const PRODUCT_DESCRIPTION_NAME = "productdescriptionname";
const DISCOUNTED_PRODUCT_LIST = "navlist";
const DISCOUNTED_PRODUCT_EXCIST = "RefandPrice";

export class ProductsPage extends BasePage {
  static checkIfContainerVisible() {
    this.exist(LOGGED_IN_CHECK);
  }
  static selectMainCategory () {
    this.clickButtonWithText(SELECT_PRODUCT_CATEGORY, 'Christmas');
  }

  static productSubCategory () {
    this.clickButtonWithText(SELECT_PRODUCT_SUBCATEGORY, 'ACCESSORIES');
    //this.selectSortingOption(PRODUCT_FILTER_TITLE, 'Sort by');
  }

  static selectSortingOption() {
    cy.get('.MobSortSelector .productFilterList').contains('Brand (A To Z)').click();
  }

  static productFiltering() {
    this.click(PRODUCT_FILTERING_ICON);
    this.clickButtonWithText(PRODUCT_FILTERING_BY_BRAND, 'Brand');
    this.click(PRODUCT_BRAND);
    this.clickButtonWithText(PRODUCT_BY_BRAND_APPLY, 'Apply');
    cy.get(PRODUCT_DESCRIPTION_BRAND).contains('Nike');
    //or -just dont know which apprroach is better cy.get('.selectedFiltersGroup .selectedFilterLabel');
  }

  static discauntSecondPriceChecking() {
    cy.get(DISCOUNTED_PRODUCT_LIST).children().each((li) => {
      cy.wrap(li).within(() => {
          cy.get(PRODUCT_DESCRIPTION_NAME, { log: false }).invoke('text').then((productName) => {
              cy.log(`${productName} discount:`)
          })
          cy.get(DISCOUNTED_PRODUCT_EXCIST).should('exist')
      })
  })
  }
}
