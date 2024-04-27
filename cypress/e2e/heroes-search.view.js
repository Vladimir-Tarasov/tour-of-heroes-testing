export class HeroesSearching {
    input = {
        search: 'app-hero-search #search-box'
    };

    link = {
        result: 'app-hero-search .search-result li a'
    };

    search(savedName) {
        cy.get(this.input.search)
            .click()
            .type(savedName);
        cy.get(this.link.result)
            .click();
    }
}