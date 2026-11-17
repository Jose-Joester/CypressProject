import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
  protected rootSelector = "body";
  private readonly cartItems = '[data-test="inventory-item"]';
  private readonly checkoutButton = '[data-test="checkout"]';

  verifyContainsProduct(productName: string): void {
    this.getElement(this.cartItems).contains(productName).should("be.visible");
  }

  removeProduct(productName: string): void {
    this.getElement(this.cartItems)
      .contains(productName)
      .closest(this.cartItems)
      .should("be.visible")
      .find('button[data-test^="remove"]')
      .click();
  }

  checkout(): void {
    this.click(this.checkoutButton);
  }

  verifyEmpty(): void {
    this.getElement(this.cartItems).should("not.exist");
  }
}
