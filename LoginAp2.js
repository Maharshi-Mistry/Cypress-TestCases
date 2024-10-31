class login
{
    txtUsername="input[placeholder='Username']";
    txtPassword="input[placeholder='Password']";
    btnSubmit="button[type='submit']";
    lblDash='.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module';

    setUsername(Username)
    {
        cy.get(this.txtUsername).type(Username);
    }
    setPassword(Password)
    {
        cy.get(this.txtPassword).type(Password);
    }
    ClickSumbit()
    {
        cy.get(this.btnSubmit).click()
    }
    VerifyLogin()
    {
        cy.get(this.lblDash).should('have.text','Dashboard')
    }
}

export default login;