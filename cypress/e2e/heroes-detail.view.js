import { HeroesSearching } from './heroes-search.view';

export class HeroesDetail extends HeroesSearching {
    input = {
        heroName: 'app-hero-detail input#hero-name[ng-reflect-model]'
    };

    button = 'app-hero-detail button';

    checkName() {
        cy.get(this.input.heroName)
            .should('have.value', 'Magneta');
        return this;
    }

    clickOnGoBack() {
        cy.get(this.button).eq(0).click();
        cy.url().should('include', '/dashboard');
    }

    checkRandomName() {
        cy.get('@randomName').then(randomName => {
            cy.get(this.input.heroName)
                .invoke('val')
                .then(actualValue => {
                    const trimmedActualValue = actualValue.trim().replace(/&nbsp;/g, ' ');
                    const trimmedExpectedValue = randomName.trim().replace(/&nbsp;/g, ' ');
                    expect(trimmedActualValue).to.equal(trimmedExpectedValue);
                });
        });
    }

    checkSearchedName(savedName) {
        cy.get(this.input.heroName)
            .should('have.value', savedName);
    }
}