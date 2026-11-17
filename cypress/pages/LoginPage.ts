import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  protected rootSelector = "body";
  private readonly usernameInput = '[data-test="username"]';
  private readonly passwordInput = '[data-test="password"]';
  private readonly loginButton = '[data-test="login-button"]';

  visit(): void {
    cy.visit("/");
  }

  login(username: string, password: string): void {
    this.clearAndType(this.usernameInput, username);
    this.clearAndType(this.passwordInput, password);
    this.click(this.loginButton);
  }
}
