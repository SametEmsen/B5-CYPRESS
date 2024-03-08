describe("First test suit", () => {
    beforeEach("To handle cookies", () => {
        cy.clearAllCookies();
        
    })
    xit("TC 01, Google search", () => {
        cy.visit('https://www.google.com/');
        cy.get('#APjFqb').should('be.visible').type("cypress{enter}");
        cy.url().should("include", "cypress");
        cy.get('[lang="en"] > .tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').wait(1000).should("have.text", "Cypress: Testing Frameworks for Javascript | Write, Run, Debug").click()
    })
    it("TC 02, Wikipedia search", () => {
        cy.visit('https://www.wikipedia.com/');
        cy.title().wait(1000).should("eq","Wikipedia");
        cy.get('#searchInput').clear().type("cypress{enter}");
        cy.url().should("include","/wiki/Cypress");
        cy.get('.mw-page-title-main').should('have.text','Cypress');
    })
})
