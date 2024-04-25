export class Router {
    links = {
        dashboard: '',
        heroes: ''
    };

    checkNavigationBetweenTheViews() {
        cy.get(this.links.heroes).click();

    }
}