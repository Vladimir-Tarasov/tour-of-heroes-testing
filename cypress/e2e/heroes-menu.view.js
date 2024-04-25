export class HeroesMenu {
    menu = {
        item: 'app-dashboard .heroes-menu a'
    };

    expectedHeroes = ['Bombasto', 'Celeritas', 'Magneta', 'RubberMan'];

    checkItems() {
        cy.get(this.menu.item)
            .should('have.length', 4);
        return this;
    }

    checkMostHeroicHeroes() {
        cy.get(this.menu.item)
            .invoke('text')
            .then(text => {
                this.expectedHeroes.forEach(expected => {
                    expect(text).to.include(expected);
                });
            });
    }
}