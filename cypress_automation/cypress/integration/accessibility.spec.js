/// <reference types="cypress" />
import { Homepage } from "../page_objects/homepage";
describe('time tracker application', () => {
    const homepage = new Homepage();
    beforeEach(() => {
        homepage.navigate();
    });
    it('should log any accessibility failures', () => {
        cy.injectAxe();
        cy.checkA11y();

    });

});