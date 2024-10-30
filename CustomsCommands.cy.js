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

    it('CustomCommands - Overwrite existing commands', function(){
        //Flipkart
        cy.visit('https://www.flipkart.com/')
        cy.get("input[placeholder='Search for Products, Brands and More']").type('iphone')
        cy.get("button[type='submit']").click()
        cy.get(".CGtC98").invoke('removeAttr','target')//remove target when we want to open new window in same window
        cy.ClickLink('APPLE IPHONE 15 (BLUE, 128 GB)')
        cy.get('._8tSq3v').should('have.text','Specifications')
    })

    it('Login Commands', function(){
        cy.visit('https://www.amazon.in/')
        cy.clicklink('Sign in')
        //login
        cy.get("#ap_email").type('8000828331') //username
        cy.get(".a-button-inner > #continue").click() // click on continue to get password
        cy.wait(5000)
        cy.get("input[type='password']").type('Yogesh@1998')//Password
        cy.get("input[id='signInSubmit']").click()
        cy.wait(5000)
        //Search
        cy.get('#twotabsearchtextbox').type('Iphone')
        cy.get('#nav-search-submit-button').click()
        //cy.get("div[class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_4'] a[class='a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal']").invoke('removeAttr','target')
        cy.ClickLink('Apple iPhone 13 (128GB) - Midnight')//Click on the iphone 13 link
        //Validation
        cy.visit('https://www.amazon.in/Apple-iPhone-13-128GB-Midnight/dp/B09G9HD6PD/ref=sr_1_1_sspa?dib=eyJ2IjoiMSJ9.OCoJgZ8ghdguKvc7Ozmt3KlC0a5KB5Cw1Z8vR-gHUKadFVNlFkE5k3U1aDLD2afrqR32eth4Hhe8YOSECSzbhG-JnN8r2atXHM1qr09LQPJOmDLJUau7oH028qrb_IoV5HX3-LZjPJl4SPDjDdhBsi_4fJPhR4WgpgoGPE6hz4lezAfJoLDl61eg041OpHHH5PUp8G1qvPXkRF88UTwEkjldDlr9B1k7Il1Rh5tjRsY.0quBY5Hxmus3g_0qB9XzyQ1DNUoyHySzU_e87M-2tfw&dib_tag=se&keywords=Iphone&qid=1730098514&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1')//navigate to new page and validation
        cy.get("h1[class='a-size-base-plus a-text-bold']").should('have.text',' About this item ')
        
        //Logout
        cy.get("#nav-hamburger-menu").click()
        cy.get(".hmenu-item[href='javascript:void(0)']").click()

    })

    it.only('Login with custom commands', function(){
        cy.visit('https://www.amazon.in/')
        cy.ClickLink('Sign in') //click on signin link
        cy.login("8000828331","Yogesh@1998")//login process
        //Search
        cy.get('#twotabsearchtextbox').type('Iphone')
        cy.get('#nav-search-submit-button').click()
        //Validation
        cy.visit('https://www.amazon.in/Apple-iPhone-13-128GB-Midnight/dp/B09G9HD6PD/ref=sr_1_1_sspa?dib=eyJ2IjoiMSJ9.OCoJgZ8ghdguKvc7Ozmt3KlC0a5KB5Cw1Z8vR-gHUKadFVNlFkE5k3U1aDLD2afrqR32eth4Hhe8YOSECSzbhG-JnN8r2atXHM1qr09LQPJOmDLJUau7oH028qrb_IoV5HX3-LZjPJl4SPDjDdhBsi_4fJPhR4WgpgoGPE6hz4lezAfJoLDl61eg041OpHHH5PUp8G1qvPXkRF88UTwEkjldDlr9B1k7Il1Rh5tjRsY.0quBY5Hxmus3g_0qB9XzyQ1DNUoyHySzU_e87M-2tfw&dib_tag=se&keywords=Iphone&qid=1730098514&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1')//navigate to new page and validation
        cy.get("h1[class='a-size-base-plus a-text-bold']").should('have.text',' About this item ')
        
        //Logout
        cy.get("#nav-hamburger-menu").click()
        cy.get(".hmenu-item[href='javascript:void(0)']").click()


    })

})