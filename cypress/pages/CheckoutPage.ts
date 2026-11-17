import type { CheckoutData } from "../types/models";
import { BasePage } from "./BasePage";

export class CheckoutPage extends BasePage {
  protected rootSelector = "body";
  private readonly firstNameInput = '[data-test="firstName"]';
  private readonly lastNameInput = '[data-test="lastName"]';
  private readonly postalCodeInput = '[data-test="postalCode"]';
  private readonly continueButton = '[data-test="continue"]';
  private readonly finishButton = '[data-test="finish"]';
  private readonly checkoutContainer = '[data-test="checkout-info-container"]';
  private readonly overviewContainer = '[data-test="checkout-summary-container"]';
  private readonly confirmation = '[data-test="complete-header"]';

  fillCheckoutInformation(data: CheckoutData): void {
    this.clearAndType(this.firstNameInput, data.firstName);
    this.clearAndType(this.lastNameInput, data.lastName);
    this.clearAndType(this.postalCodeInput, data.postalCode);
  }

  clickContinue(): void {
    this.click(this.continueButton);
  }

  clickFinish(): void {
    this.click(this.finishButton);
  }

  verifyCheckoutInformationPageLoaded(): void {
    this.verifyVisible(this.checkoutContainer);
  }

  verifyCheckoutOverviewPageLoaded(): void {
    this.verifyVisible(this.overviewContainer);
  }

  verifyOrderConfirmation(): void {
    this.verifyVisible(this.confirmation);
    this.verifyText(this.confirmation, "Thank you for your order");
  }
}
