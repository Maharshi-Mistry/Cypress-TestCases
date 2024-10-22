describe("Radiobuttion", function()
{
    it("Radiobutton check", function()
    {
        cy.visit("https://testautomationpractice.blogspot.com/")
        // visible or not
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')

        //select radio button
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')

        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.checked')
    })

    it("checkbox check", function()
    {
        cy.visit("https://testautomationpractice.blogspot.com/")
        /*//visibility for the checkbox
        cy.get("input#sunday").should('be.visible')
        //Check the both checkbox and validate its checked or not
        cy.get("input#sunday").check().should('be.checked')
        cy.get("input#monday").check().should('be.checked')
        //Uncheck the checkbox and validate
        cy.get("input#monday").uncheck().should('not.be.checked')
        //validation its checked or not
        cy.get("input#tuesday").should('not.be.checked')*/
        cy.get(".form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get(".form-check-input[type='checkbox']").uncheck({multiple : 'true'}).should('not.be.checked')
        
    })
})