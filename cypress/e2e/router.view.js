export class Router {
    links = {
        dashboard: 'nav a[routerlink="/dashboard"]',
        heroes: 'nav a[routerlink="/heroes"]'
    };

    checkNavigationBetweenTheViews() {
        cy.get(this.links.heroes).click();
        cy.url()
            .should('include', '/heroes')
    }
}