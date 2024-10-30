describe('Check Report', function(){
    it('Check Report', function(){
        cy.visit('https://www.amazon.in/')
        cy.get(".ac-input-container").type('Manki Atta chakki')
        cy.get("#nav-search-submit-button").click()
        //cy.get("//div[@class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_3']//a[@class='a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal']").invoke('removeAttr','target')
        //cy.ClickLink('Classic Atta CHAKK®I Premium Fully Automatic Domestic Flour Mill with Vacuum, Atta Maker, Atta chakki, Ghar Ghanti 0.75 Unit/hr Premium Navy Flower')
        cy.get(".a-color-state").should('have.text','Manki Atta chakki')
        
    })
})