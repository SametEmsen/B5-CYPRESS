/// <reference types="cypress" />

const { expect } = require("chai");

describe('First Test Suit',function(){
    before(function(){
        //run once before this test suit
    });
    after(function(){
        //run once after this test suit
    });
    beforeEach(function(){
        //run before each test case in this test suit
    });
    this.afterEach(function(){
        //run after each test case in this test suit
    });
    it.only('First Test Case',function(){
        //test case 1 (Only this test case will run)
    });
    it('Second Test Case',function(){
        //test case 2
    });
    it.skip('Third Test Case',function(){
        //test case 3 (skipped)
    });
});

context('Second Test Suit',()=>{
    beforeEach(function(){
        //run before each test case in this test suit
        cy.visit('url')
    });
    it('First Test Case',function(){
        //test case 1
        expect(false).to.equal(false);
    });
    it('Second Test Case',function(){
        //test case 2
        expect(false).not.to.equal(true);
    });
    it('Third Test Case',function(){
        //test case 3
        expect(5).to.equal(5);
    });
    it('Fourth Test Case',function(){
        //test case 4
        expect(true).to.equal('5'==5);
    });
});

