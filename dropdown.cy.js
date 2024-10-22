describe("dropdowns", function()
{
    it("Dropdown1", function()
    {
    cy.visit("https://www.zoho.com/commerce/free-demo.html")
    cy.get("#zcf_address_country").select('Canada').should('have.value','Canada')
    })
it("Dropdown without select tag", function()
{
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
    cy.get("#select2-billing_country-container").click()
    cy.get("input.select2-search__field[type='text']").type('Iran').type('{enter}')
    cy.get("#select2-billing_country-container").should('have.text','Iran')
})
it("Autosuggest Dropdown", function()
{
    cy.visit("https://www.wikipedia.org/")
    cy.get("input#searchInput").type('Hazel')
    cy.get(".suggestion-title").should('have.length','6')
    cy.get(".suggestion-title").contains('Hazel McCallion').click()
    cy.get("span.mw-page-title-main").contains('McCallion')
})
it("Dynamic autosuggest Dropdown", function()
{
    cy.visit("https://www.google.com/")
    cy.get("textarea[title ='Search']").type('Hazel')
    cy.wait(4000)
    cy.get('div.wM6W7d>span').should('have.length','13')
    cy.get('div.wM6W7d>span').each(($el, index, $list)=>{
        if($el.text()=='hazel eyes')
        {
            //wrap is used because it warp the text with element and then we can click or else it wont able to perform click action
            cy.wrap($el).click()
        }
        })
    cy.get("#APjFqb").should('have.value','hazel eyes')
    
})
})