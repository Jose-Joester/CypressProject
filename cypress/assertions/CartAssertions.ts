export class CartAssertions {
  private readonly cartItems = '[data-test="inventory-item"]';

  verifyContainsProduct(productName: string): void {
    cy.contains(this.cartItems, productName).should("be.visible");
  }

  verifyEmpty(): void {
    cy.get(this.cartItems).should("not.exist");
  }
}
