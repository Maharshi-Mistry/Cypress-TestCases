
describe('Mouse Operations', function(){
    it('Mouse hover', function(){
        cy.visit("https://demo.opencart.com/")
        cy.wait(3000)
        cy.get('body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').should('not.be.visible')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get('body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').should('be.visible')
    })

    it('Right click', function(){
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

        //Approach 1 with trigger method
        //cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu')
        //cy.get('.context-menu-item.context-menu-icon.context-menu-icon-copy').should('have.text','Copy')
        //Approch 2 direct with rightclick() event
        cy.get('.context-menu-one.btn.btn-neutral').rightclick()
        cy.get('.context-menu-item.context-menu-icon.context-menu-icon-copy').should('have.text','Copy')

    })

    it('double click', function(){
        cy.visit('http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')

        //Load Iframe
        //Approach 1 with trigger method
        cy.frameLoaded('#iframeResult')
        
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick')
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')
        cy.wait(3000)
        cy.iframe('#iframeResult').find('#field2').clear()
        //Approch 2 direct with dblclick() event
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick()
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')
    })
    
    it('Drag and Drop', function(){
        //By using Plugin
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.wait(5000)
        cy.get('#box6').drag('#box106',{force:true}) //any element want to drag capture that element and use drag method and unside that campaign the drop location
        //{force:true} when this is used then any hidden element should get
    })

    it('Scrolling', function(){
        cy.visit("http://www.countries-ofthe-world.com/flags-of-the-world.html");
        //India Flag text
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(2)').scrollIntoView({duration: 3000}) //ScrollIntoview is use to scroll the page
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(2)').should('have.text','India')

        //Brazil flag scroll up
        cy.get(':nth-child(1) > tbody > :nth-child(26) > :nth-child(1) > img').scrollIntoView({duration:2000})
        .should('be.visible')

        cy.get('#footer').scrollIntoView({duration:3000})
        .contains('www.countries-ofthe-world.com')
    })
})