// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress" />
/// <reference types="cypress-xpath" /> 
// Created my own command

Cypress.Commands.add('GetIframe', (Iframe)=>{
    return cy.get('Iframe')
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)
})

//imported iframe commands by installing plugin and describe in the command file
require('cypress-iframe')
//visit website
Cypress.Commands.add('Opencart',(login) =>{
    return cy.visit('https://demo:dem0@demo.opencart.com/admin/index.php')
})

//import Drag and drop plugin
require('@4tw/cypress-drag-drop')

//file upload package
import 'cypress-file-upload';

//Custom command to click on the link
Cypress.Commands.add('ClickLink',(lable)=>{  //clicklink is first perameter we have introduce and (lable) is other perameter
    cy.get('a').contains(lable).click() //get all the A tag and find for the lable we have pass and click on that link
})

//Override already created command
/* Cypress.Commands.overwrite('contains', (originalFn, subject, filter, text, options = {}) =>{

    if (typeof text === 'object'){
        objects = text
        text = filter
        filter = undefined
    }

    options.matchCase = false
    return originalFn(subject, filter, text, options)
})
*/

Cypress.Commands.overwriteQuery(
    "contains",
    function (contains, filter, text, userOptions = {}) {
  
      // This is parameter resolution from Cypress v12.7.0 source
      if (Cypress._.isRegExp(text)) {
        // .contains(filter, text)
        // Do nothing
      } else if (Cypress._.isObject(text)) {
        // .contains(text, userOptions)
        userOptions = text
        text = filter
        filter = ''
      } else if (Cypress._.isUndefined(text)) {
        // .contains(text)
        text = filter
        filter = ''
      }
  
      userOptions.matchCase = false;
  
      let contains0 = contains.bind(this)    // this line fixes the error
  
      return contains0(filter, text, userOptions)
    }
  )
