describe("Assertion", function()
{

    //Should
        it("Implicit Assertions check", function()
        {
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            //Should and
            cy.url().should('include','orangehrmlive.com') //Should keyword with include key(which check for key included in whole text)
            cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // Should keyword with ed which compare the link or text
            cy.url().should('contain','orangehrmlive.com') //Should keyword with contain key(which check for key include in whole text)

            cy.title().should('include','Orange')
            .and('not.eq','Orange1')
            .and('eq','OrangeHRM')
    
            cy.get('.orangehrm-login-branding > img').should('be.visible')
            cy.get('.orangehrm-login-title').should('exist')
        }
    )

    //avoid repeat cy.url mulitple type
        it("Instagram assertion check", function()
        {
            cy.visit("https://www.instagram.com/")
            cy.url().should('include','instagram')
            .should('eq','https://www.instagram.com/')
            .should('contain','instagram')
        }
    )
    //And - Avoild writing shoulds
    it("Instagram assertion check", function()
    {
        cy.visit("https://www.instagram.com/")
        cy.url().should('include','instagram')
        .and('not.eq','https://www.instagramw.com/')
        .and('contain','instagram')
        
    }
)
it("Implicit Assertions link check", function()
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //Should and
        cy.xpath("//a").should('have.length','5') //anchor tag
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Username']").should('have.value','Admin')
    }
)
}
    )
