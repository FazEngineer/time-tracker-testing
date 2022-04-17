export class Homepage {
    navigate() {
        cy.visit('http://localhost:3001/');
    }

    selectStart() {
        cy.get('.row > .col-12 > :nth-child(1)').click();
    }

    selectStop() {
        cy.get('.row > .col-12 > :nth-child(2)').click();
    }

    selectReset() {
        cy.get('.col-12 > :nth-child(3)').click();
    }

    selectSave() {
        cy.get('.btn-primary').click();
    }

    fillSessionName(value) {
        cy.get('.form-control').type(value);
    }

    successMessage() {
        cy.get('.jumbotron').contains('You have successfully added a session');
    }
}