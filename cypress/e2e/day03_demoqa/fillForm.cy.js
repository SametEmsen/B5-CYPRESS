context('Context: Fill form from demoqa', () => {
    it('TC 01: Open the demoqa web page practice form', function () {
        cy.clearAllCookies();
        cy.visit("https://demoqa.com/automation-practice-form")
            .get('#firstName')
            .type("Leeroy")
            .get('#lastName')
            .type("Jenkins");

        const email = `leeroy${Math.floor(10000 + Math.random() * 90000)}@tech.com`
        cy.get('#userEmail').clear().type(email);
        //cy.contains("Male").should("be.visible").click();
        cy.get('[class="custom-control custom-radio custom-control-inline"] input').each((item, index, list) => {
            //assert the length of the list is 3
            expect(list).to.have.length(3);
            expect(item).to.have.attr("required");
        })
        cy.get('[class="custom-control custom-radio custom-control-inline"]').then(($buttons) => {
            cy.wrap($buttons).eq(0).wait(500).click();
            cy.wrap($buttons).eq(1).should("not.be.checked");
            cy.wrap($buttons).eq(2).should("not.be.checked");
        })
        const phoneNumber=`555-123-${Math.floor(1000+Math.random()*9000)}`  // gives us 4 digit 
        cy.get('#userNumber').type(phoneNumber);
        cy.get('#dateOfBirthInput').then($input=>{
            $input.val("15 Mar 2005").trigger('change');
        })
        cy.get('.subjects-auto-complete__value-container').type("SDET class form");
        cy.get('#hobbiesWrapper > .col-md-9')
        .find(".custom-control-label")
        .then(checkboxes=>{
            cy.wrap(checkboxes).eq(0).click().wait(500).parent().should("contain","Sports");
            cy.wrap(checkboxes).eq(1).click().parent().should("contain","Reading");
            cy.wrap(checkboxes).eq(2).parent().should("contain","Music");
            cy.wrap(checkboxes).eq(2).click();
        })
        cy.get('.subjects-auto-complete__value-container').type("Sdet and Qa application");
        cy.get('#currentAddress').type("Kraft sk. B5/5 Merkez/Kocaeli");
        cy.get('#state').click();
        
        

    });
});

