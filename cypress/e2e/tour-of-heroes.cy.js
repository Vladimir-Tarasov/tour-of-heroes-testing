///<reference types="cypress" />

const { DashboardApp } = require('./dashboard-app.view');
const { HeroesDetail } = require('./heroes-detail.view');
const { HeroesSearching } = require('./heroes-search.view');
const { HeroesMenu } = require('./heroes-menu.view');
const { Router } = require('./router.view');
const { HeroesApp } = require('./heroes-app.view');
const { MessagesApp } = require('./messages-app.view');
const { Data } = require('../fixtures/mocs');

describe('Tour of heroes testing', () => {
    const heroesMenu = new HeroesMenu();
    const router = new Router();
    const dashboardApp = new DashboardApp();
    const heroesDetail = new HeroesDetail;
    const heroesSearching = new HeroesSearching();
    const heroesApp = new HeroesApp();
    const messagesApp = new MessagesApp();
    const name = Data.name();

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
        heroesApp.addHero(name)
            .removeHero()
    })

    it('should check messages app', () => {
        messagesApp.removeMessages();
    })
})