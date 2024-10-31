class login
{
    setUsername(Username)
    {
        cy.get("input[placeholder='Username']").type(Username);
    }
    setPassword(Password)
    {
        cy.get("input[placeholder='Password']").type(Password);
    }
    ClickSumbit()
    {
        cy.get("button[type='submit']").click()
    }
    VerifyLogin()
    {
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
    }
}

export default login;