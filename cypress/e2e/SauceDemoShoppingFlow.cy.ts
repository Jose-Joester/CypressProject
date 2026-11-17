import { CheckoutPage } from "../pages/CheckoutPage";
import { CartPage } from "../pages/CartPage";
import { InventoryPage } from "../pages/InventoryPage";
import { LoginPage } from "../pages/LoginPage";
import type { User } from "../types/models";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();
const standardUser: User = {
  username: "standard_user",
  password: "secret_sauce",
};

describe("SauceDemo shopping flow", () => {
  beforeEach(() => {
    cy.session(standardUser.username, () => {
      loginPage.visit();
      loginPage.login(standardUser.username, standardUser.password);
    });

    inventoryPage.visit();
  });

  it("sorts products by price from low to high", () => {
    inventoryPage.sortBy("Price (low to high)");
    inventoryPage.productPrices().then((prices: number[]) => {
      expect(prices).to.deep.equal([...prices].sort((a, b) => a - b));
    });
  });

  it("adds a product and completes checkout", () => {
    inventoryPage.addProduct("Sauce Labs Backpack");
    inventoryPage.openCart();
    cartPage.verifyContainsProduct("Sauce Labs Backpack");
    cartPage.checkout();

    checkoutPage.verifyCheckoutInformationPageLoaded();
    checkoutPage.fillCheckoutInformation({
      firstName: "Jane",
      lastName: "Tester",
      postalCode: "90210",
    });
    checkoutPage.clickContinue();
    checkoutPage.verifyCheckoutOverviewPageLoaded();
    checkoutPage.clickFinish();
    checkoutPage.verifyOrderConfirmation();
  });

  it("removes a product from the cart", () => {
    inventoryPage.addProduct("Sauce Labs Bike Light");
    inventoryPage.openCart();
    cartPage.removeProduct("Sauce Labs Bike Light");
    cartPage.verifyEmpty();
  });
});
