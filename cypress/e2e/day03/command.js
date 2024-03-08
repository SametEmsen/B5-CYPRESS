/** https://docs.cypress.io/api/cypress-api/custom-commands
 * Examples of parent commands:
    cy.visit()
    cy.get()
    cy.request()
    cy.exec()
    cy.intercept()
 */

/**
 * Child Commands
    Child commands are always chained off of a parent command, or another child command.
    The previous subject will automatically be yielded to the callback function.

* Examples of child commands:
    .click()
    .trigger()
    .find()
    .should()
    .as()
 */

    /**
     * Examples of dual commands:
      cy.contains()
      cy.screenshot()
      cy.scrollTo()
      cy.wait()
     */

  //*  1  cypres referance type
///<reference types="cypress" /> 

// visit 
cy.visit('open url')
cy.visit('url',{timeout:10000})

// should is a promise in here
cy.url().should('include',path)

//finding the element
cy.get(loc).click()
cy.get(loc).should('be.visible')
cy.get(loc).should('not.be.visible')

cy.get('h1').should('have.text','Chai Assertion Library')
cy.get('h2').should('have.value','toggle')

//parent to child
cy.get(loc).first()
cy.get(loc).last()
cy.get(loc).eq(3).click()
cy.get(loc).next().click

// navigate to back / forward
cy.go('back')
cy.go('forward')

cy.get('code').nextAll().click({multiple:true})
cy.get(loc).prev().click() // previous one
cy.get(loc).prevAll().click()

// position handling
cy.get(loc).click('top')
cy.get(loc).click('center')

//Hover Handling
cy.get(loc).trigger('mousedown').click()

//login
cy.get('username').clear().type("mike")


