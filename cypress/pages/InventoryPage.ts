import { BasePage } from "./BasePage";

export class InventoryPage extends BasePage {
  protected rootSelector = "body";
  private readonly inventoryContainer = '[data-test="inventory-container"]';
  private readonly sortDropdown = '[data-test="product-sort-container"]';
  private readonly cartLink = '[data-test="shopping-cart-link"]';

  visit(): void {
    cy.visit("/inventory.html", { failOnStatusCode: false });
    this.verifyInventoryPageLoaded();
  }

  verifyInventoryPageLoaded(): void {
    this.verifyVisible(this.inventoryContainer);
  }

  sortBy(option: string): void {
    this.getElement(this.sortDropdown).select(option);
  }

  addProduct(productName: string): void {
    this.getElement('[data-test="inventory-item"]')
      .contains(productName)
      .closest('[data-test="inventory-item"]')
      .should("be.visible")
      .find('button[data-test^="add-to-cart"]')
      .click();
  }

  productPrices(): Cypress.Chainable<number[]> {
    return this.getElement('[data-test="inventory-item-price"]').then(($prices) =>
      [...$prices].map((price) => Number(price.innerText.replace("$", ""))),
    );
  }

  openCart(): void {
    this.click(this.cartLink);
  }
}
