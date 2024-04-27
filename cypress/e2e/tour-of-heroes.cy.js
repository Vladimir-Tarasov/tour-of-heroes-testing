///<reference types="cypress" />

const { DashboardApp } = require('./dashboard-app.view');
const { HeroesDetail } = require('./heroes-detail.view');
const { HeroesSearching } = require('./heroes-search.view');
const { HeroesMenu } = require('./heroes-menu.view');
const { Router } = require('./router.view');
const { HeroesApp } = require('./heroes-app.view');
const { MessagesApp } = require('./messages-app.view');
const { Chance } = require('chance');

describe('Tour of heroes testing', () => {
    var chance = new Chance();

    const heroesMenu = new HeroesMenu();
    const router = new Router();
    const dashboardApp = new DashboardApp();
    const heroesDetail = new HeroesDetail;
    const heroesSearching = new HeroesSearching();
    const heroesApp = new HeroesApp();
    const messagesApp = new MessagesApp();
    const randomName = chance.first();

    beforeEach(() => {
        cy.visit('http://localhost:4200');
    })

    it('should check heroes menu', () => {
        heroesMenu.checkItems()
            .checkMostHeroicHeroes();
    })

    it('should check router', () => {
        router.checkNavigationBetweenTheViews();
    })

    it('should check dashboard app', () => {
        dashboardApp.clickOnMagneta();
        heroesDetail.checkName()
            .clickOnGoBack();
        dashboardApp.clickOnRandomHeroesName();
        heroesDetail.checkRandomName();
    })

    it('should check searching', () => {
        heroesSearching.search();
        heroesDetail.checkSearchedName();
    })

    it('should check heroes app', () => {
        heroesApp.addHero(randomName)
            .removeHero()
    })

    it('should check messages app', () => {
        messagesApp.removeMessages();
    })
})