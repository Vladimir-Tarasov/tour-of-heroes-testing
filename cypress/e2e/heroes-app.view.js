import { Router } from './router.view';

export class HeroesApp extends Router {
    input = {
        myHero: '#new-hero'
    };

    button = {
        add: '.add-button',
        remove: '.delete'
    };

    list = {
        heroes: 'ul li a'
    };

    addHero() {
        cy.get(this.links.heroes).click();
        cy.get(this.input.myHero)
            .click()
            .type('new');
        cy.get(this.button.add).click();
        cy.get(this.list.heroes)
            .invoke('text')
            .should('include', 'new');
        return this;
    }

    checkButtonsLength(n) {
        cy.get(this.button.remove).should('have.length', n);
    }

    removeHero() {
        this.checkButtonsLength(10);

        cy.get(this.button.remove).then(buttons => {
            const randomIndex = Math.floor(Math.random() * buttons.length);
            const randomButton = buttons[randomIndex];
            cy.wrap(randomButton).click();
        });

        this.checkButtonsLength(9);
        return this;
    }
}