import { BasePage } from "./BasePage";

export class ProductPage extends BasePage {
    protected rootSelector = "body";
    private readonly title = "#productTitle";
    private readonly productScore = "#acrPopover";

    assertTitle(expectedTitle: string): void {
        this.getElement(this.title)
            .should('have.text', expectedTitle);
    }

}