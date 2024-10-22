describe("Explict Assertions", function()
{
    it("Explict Check1", function()
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")       //get username textbox
        cy.get("input[placeholder='Password']").type("admin123")         //get password textbox
        cy.get(".orangehrm-login-button").click()

        let expName = "Pedro Andre";
        cy.get(".oxd-userdropdown-name").then( function(x)
        {
            let acctualName = x.text();

            //BDD style
            expect(acctualName).to.equal(expName)
            //expect(acctualName).to.not.equal(expName)

            //TDD Style
             assert.equal(acctualName,expName)
            assert.notEqual(acctualName,expName)
        }
        )
    }
)
}
)