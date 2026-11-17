export abstract class BasePage {

    protected abstract rootSelector: string;

    protected getElement(
        selector: string,
        timeout?: number
    ): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy
            .get(this.rootSelector)
            .find(selector, { timeout });
    }

    protected click(
        selector: string,
        timeout?: number
    ): void {

        this.getElement(selector, timeout)
            .should('be.visible')
            .click();
    }

    protected clearAndType(
        selector: string,
        value: string,
        timeout?: number
    ): void {

        this.getElement(selector, timeout)
            .should('be.visible')
            .clear()
            .type(value);
    }

    protected verifyVisible(
        selector: string,
        timeout?: number
    ): void {

        this.getElement(selector, timeout)
            .should('be.visible');
    }

    protected verifyNotVisible(
        selector: string
    ): void {

        this.getElement(selector)
            .should('not.be.visible');
    }

    protected verifyText(
        selector: string,
        expected: string,
        timeout?: number
    ): void {

        this.getElement(selector, timeout)
            .should('contain.text', expected);
    }

    protected verifyExactText(
        selector: string,
        expected: string,
        timeout?: number
    ): void {

        this.getElement(selector, timeout)
            .should('have.text', expected);
    }

}