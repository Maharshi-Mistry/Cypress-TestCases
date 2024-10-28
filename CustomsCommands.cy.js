describe('CustomCommand Testing', function(){
    it('CustomCommands - handling link without custom command', function(){

        cy.visit('https://www.flipkart.com/')
        cy.get("input[placeholder='Search for Products, Brands and More']").type('iphone')
        cy.get("button[type='submit']").click()
        //cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')
        cy.get(".CGtC98").invoke('removeAttr','target')//remove target when we want to open new window in same window
        cy.get('[data-id="MOBGTAGPAQNVFZZY"] > .tUxRFH > .CGtC98 > .yKfJKb > .col-7-12 > .KzDlHZ').click()
        cy.get(".VU-ZEz").should('have.text','Apple iPhone 15 (Blue, 128 GB)')


    })

    it('CustomCommands - handling link with custom command', function(){
        //Flipkart
        cy.visit('https://www.flipkart.com/')
        cy.get("input[placeholder='Search for Products, Brands and More']").type('iphone')
        cy.get("button[type='submit']").click()
        cy.get(".CGtC98").invoke('removeAttr','target')//remove target when we want to open new window in same window
        cy.ClickLink('Apple iPhone 15 (Blue, 128 GB)')
        cy.get('._8tSq3v').should('have.text','Specifications')
    })

    it.only('CustomCommands - Overwrite existing commands', function(){
        //Flipkart
        cy.visit('https://www.flipkart.com/')
        cy.get("input[placeholder='Search for Products, Brands and More']").type('iphone')
        cy.get("button[type='submit']").click()
        cy.get(".CGtC98").invoke('removeAttr','target')//remove target when we want to open new window in same window
        cy.ClickLink('APPLE IPHONE 15 (BLUE, 128 GB)')
        cy.get('._8tSq3v').should('have.text','Specifications')
    })

})