describe('Testsuite1', function()
{
    it('TestCase1 verify title-positive', function()
        {
        //Test case1 steps should be added here
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        }
    )

    it('TestCase2 verify title-negative', function()
       {
        //Test case1 steps should be added here
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHuM')
      })
}
)