describe('Child window', function()
{
    it('Child Window', function()
    {
        //Approch 1
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example >a').invoke('removeAttr','target').click()

        //Validation, assertion
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.get("div[class='example'] h3").should('have.text','New Window')
        cy.wait(5000) // wait for 5 sec after validation on new tab
        //Navigate back to parent tab
        cy.go('back') //.go is a cypress command //use to parent tab
        cy.get('.example h3').should('have.contain','Opening')
    })

    it('Child Window 2', function()
    {
        //Approach 2, Capture href link and navigate to that
        // In Approach 2 we have limitation then main domain should be same as parent domain/ if main domain is diff then this approch should not work
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get(".example a").then((New)=>             //JQuery Function
        {
            const url = New.prop('href')              //Get the href link and store in URL define veriable element.prop('')

            cy.visit(url)
        })
        //validation on new tab
        cy.get("div[class='example'] h3").should('have.text','New Window')
        cy.wait(5000)

        //Go back to parent tab and validate
        cy.go('back')
        cy.get('.example h3').should('have.contain','Opening')
    })
})