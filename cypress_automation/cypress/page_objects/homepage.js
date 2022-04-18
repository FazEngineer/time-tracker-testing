export class Homepage {
    navigate() {
        cy.visit('http://localhost:3000/');
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
        cy.on('window:alert', (alertText) => {
            //window:alert is the event which get fired on alert open
            expect(alertText).to.have.string('Your session has been saved');
            cy.get('[name="alert"]').click();
        });

    }
}