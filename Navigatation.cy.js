describe('Navigation', function(){
    //Reload, frwd, backward and all actions
    it('Navigation 1', function(){
        cy.visit('https://demo.opencart.com/')
        cy.wait(3000)
        cy.title().should('eq','Your Store') //Home page
        cy.get(':nth-child(7) > .nav-link').click()
        cy.get("div[id='content'] h2").should('have.text','Cameras') //Validation on camera page
        cy.go('back'); //this is use to navigate back to parent page
        cy.title().should('eq','Your Store') //Home page validation
        cy.go('forward') //this is use to navigate back to forward page(child page)
        cy.get("div[id='content'] h2").should('have.text','Cameras') //Validation on camera page
        cy.reload()// use to reload the page

        cy.go(-1) // Go back to previous page
        cy.go(1) // Go back to previous page
    })
})