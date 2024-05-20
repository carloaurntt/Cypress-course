import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('The user is on the sky home page', () => {
    cy.visit('https://www.sky.it/')
  })
  Then('The user sees all elements in sky home page', () => {
    cy.get('.sky-logo')
  })