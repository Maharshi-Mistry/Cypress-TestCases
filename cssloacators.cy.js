

describe('CssLoactors', function() 
{
    it('Locator case1', function()
{
    cy.visit('http://www.automationpractice.pl/index.php')
    cy.get("#search_query_top").type("Shirts")  //Locators ID
    cy.get("[name='submit_search']").click() // locator amd click
    cy.get(".lighter").contains("Shirts") // contains method use for validation and compare
}
    )

    it('Google search',function()
{
        cy.visit('https://google.com/')
        cy.get(".gLFyf").type("hazel wikipedia").type('{enter}') //locator and search
        cy.xpath('//*[@id="rso"]/div[1]/div/div/div/div[1]/div/div/span/a/h3').click()
        cy.get('.mw-page-title-main').contains("Hazel") //Fail beacuse orgin assertion issue
}
    )

    it('Xpath Locator',function()
{
    cy.visit('http://www.automationpractice.pl/index.php')
        cy.xpath('//*[@id="block_top_menu"]/ul/li[2]/a').click()
        cy.xpath('//*[@id="center_column"]/ul/li').should('have.length',5)
}

    )

    it('chained xpath',function()
{
    cy.visit('http://www.automationpractice.pl/index.php')
        cy.xpath('//*[@id="block_top_menu"]/ul/li[2]/a').click()
        cy.xpath('//*[@id="center_column"]/ul').xpath('./li').should('have.length',5)
}

    )
}
)