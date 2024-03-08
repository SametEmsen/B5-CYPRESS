context('Second Test Suit',()=>{
    beforeEach(function(){
        //run before each test case in this test suit
        cy.visit('https://the-internet.herokuapp.com/')
    });
    it.only('First Test Case',function(){
        //test case 1
        expect(false).to.equal(false);

        //tag name
        cy.get('h1').should('have.text','Welcome to the-internet')
        //by id
        cy.get('#page-footer').should('have.text','Powered by ')
        //by classname
        cy.get('.large-4.large-centered.columns').should('be.visible')
        //By attribute name
        cy.get('[target]').should('be.visible')
        //by attribute value and the tag name
       // cy.get('div[id="page-footer"]')
        cy.get('div[id="page-footer"]').should('be.visible')

        //contains
        cy.contains('A/B Testing').click()
    });
    xit('Second Test Case',function(){
        //test case 2
        expect(false).not.to.equal(true);
    });
    it.skip('Third Test Case',function(){
        //test case 3
        expect(5).to.equal(5);
    });
    it('Fourth Test Case',function(){
        //test case 4
        expect(true).to.equal('5'==5);
    });
});