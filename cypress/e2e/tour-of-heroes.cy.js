///<reference types="cypress" />

const { HeroesMenu } = require('./heroes-menu.view');

describe('Tour of heroes testing', () => {
    const heroesMenu = new HeroesMenu();

    beforeEach(() => {
        cy.visit('http://localhost:4200/dashboard');
    })

    it('should check heroes menu', () => {
        heroesMenu.checkItems()
            .checkMostHeroicHeroes();
    })
})