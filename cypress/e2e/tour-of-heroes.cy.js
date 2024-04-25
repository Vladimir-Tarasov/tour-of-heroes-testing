///<reference types="cypress" />

const { HeroesMenu } = require('./heroes-menu.view');
const { Router } = require('./router.view');

describe('Tour of heroes testing', () => {
    const heroesMenu = new HeroesMenu();
    const router = new Router();

    beforeEach(() => {
        cy.visit('http://localhost:4200');
    })

    it('should check heroes menu', () => {
        heroesMenu.checkItems()
            .checkMostHeroicHeroes();
    })

    it.only('should check navigation between the views', () => {
        router.checkNavigationBetweenTheViews();
    })
})