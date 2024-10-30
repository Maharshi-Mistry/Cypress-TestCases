describe('Video and Screenshot campture', function(){
    //Screenshot of whole page
    it.skip('videos and screenshot', function(){
        cy.visit('https://www.amazon.in/')
        cy.get('#nav-link-accountList > .nav-line-2').click()
        //cy.get("#nav-signin-tooltip > .nav-action-signin-button > .nav-action-inner").click()
        cy.login("8000828331","Yogesh@1998")
        cy.screenshot("Homepage")
    })
    //Screenshot of targeted element
    it.skip('Screenshot of element', function(){
        cy.visit('https://www.amazon.in/')
        cy.get('#nav-search').type('honey')
        cy.get("#nav-search-submit-button").click()
        cy.get('[data-asin="B08HSTYT8N"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > [data-cy="asin-faceout-container"] > .a-spacing-base > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini').scrollIntoView({duration:2000}).screenshot('Element')
    })
    //screenshot and video on fail
    it.only('Screenshot of element', function(){
        cy.visit('https://www.amazon.in/')
        cy.get('#nav-search').type('honey')
        cy.get("#nav-search-submit-buttn").click()
        cy.get('[data-asin="B08HSTYT8N"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > [data-cy="asin-faceout-container"] > .a-spacing-base > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini').scrollIntoView({duration:2000}).screenshot('Element')
    })

})