export class MessagesApp {
    message = 'app-messages div div';
    button = {
        clear: '.clear'
    };

    removeMessages() {
        cy.get(this.message)
            .invoke('text')
            .should('contain', 'HeroService');
        cy.get(this.button.clear).click();
        cy.get(this.message).should('not.exist');
    }
}