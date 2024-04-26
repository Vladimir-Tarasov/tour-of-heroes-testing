export class DashboardApp {
    link = {
        heroName: 'app-dashboard .heroes-menu a',
        magneta: 'app-dashboard .heroes-menu a[ng-reflect-router-link="/detail/15"]'
    };

    clickOnMagneta() {
        cy.get(this.link.magneta).click();
    }

    clickOnRandomHeroesName() {
        cy.get(this.link.heroName)
            .then(links => {
                const randomIndex = Math.floor(Math.random() * links.length);
                cy.wrap(links[randomIndex])
                    .invoke('text')
                    .as('randomName');
                cy.wrap(links[randomIndex]).click();
            });
    }
}