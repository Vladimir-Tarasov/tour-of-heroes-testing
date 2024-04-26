export class HeroesSearching {
    input = {
        search: 'app-hero-search #search-box'
    };

    link = {
        result: 'app-hero-search .search-result li a'
    };

    heroesName = ['Bombasto', 'Celeritas', 'Magneta', 'RubberMan'];
    randomName = this.heroesName[Math.floor(Math.random() * this.heroesName.length)];

    search() {
        cy.get(this.input.search)
            .click()
            .type(this.randomName);
        cy.get(this.link.result)
            .click();
    }
}