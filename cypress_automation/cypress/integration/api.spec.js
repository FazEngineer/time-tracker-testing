/// <reference types="cypress" />
describe('API tests - Endpoints', () => {
    it('Test GET Request', function () {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3001/api/sessions'

        }).then(function (response) {
            expect(response.status).to.eq(200)
        });
    });

    it('Test POST Request', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3001/api/sessions',
            body: {
                "time": 4772,
                "name": "newsession2222",
                "createdAt": "Sat Apr 16 2022 18:57:03 GMT+0100 (British Summer Time)"
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        });
    });

});