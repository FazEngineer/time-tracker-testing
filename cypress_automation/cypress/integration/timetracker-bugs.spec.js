/// <reference types="cypress" />
import { Homepage } from "../page_objects/homepage";

describe('Reset', () => {
    const homepage = new Homepage();
    beforeEach(() => {
        homepage.navigate();
    });
    it('bug 1: session duration should reset when it is started', () => {
        homepage.selectStart();
        cy.wait(1000);
        homepage.selectReset();
        cy.get('h1.text-center').should('have.text', '00:00:00');
    })
})

describe('New Sessions', () => {
    const homepage = new Homepage();
    beforeEach(() => {
        homepage.navigate();
    });
    it('bug 2: new session is created and saved with error', () => {
        homepage.selectStart();
        homepage.fillSessionName(' ');
        homepage.selectStop();
        homepage.selectSave();
        homepage.successMessage();
    });

    it('bug 3: new session is created and saved with error', () => {
        homepage.selectStart();
        homepage.fillSessionName(' ');
        homepage.selectReset();
        homepage.selectSave();
        homepage.successMessage();
    });

    it('bug 4: new session is created and saved with error', () => {
        homepage.selectStart();
        homepage.fillSessionName('bug4');
        homepage.selectStop();
        homepage.selectSave();
        homepage.successMessage();
    });

    it('bug 5: new session is created and saved with error', () => {
        homepage.selectStart();
        homepage.fillSessionName('bug5');
        homepage.selectReset();
        homepage.selectSave();
        homepage.successMessage();
    });

    it('bug 6: new session is created and saved with error', () => {
        homepage.fillSessionName('bug6');
        homepage.selectStart();
        homepage.selectStop();
        homepage.selectSave();
        homepage.successMessage();
    });

    it('bug 7: new session is created and saved with error', () => {
        homepage.fillSessionName('bug7');
        homepage.selectStart();
        homepage.selectReset();
        homepage.selectSave();
        homepage.successMessage();
    });
});




