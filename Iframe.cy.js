describe('Iframes', function()
{
    it.skip('Iframes1', function()
    {
        cy.visit('https://ej2.syncfusion.com/demos/rich-text-editor/iframe/')
        cy.wait(5000)
        let iframe = cy.get('#iframeRTE_rte-view')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)

            iframe.clear().type('Welcome')
    }
    )

    it.only('Iframes approach 2', function()
    {
        cy.visit('https://ej2.syncfusion.com/demos/rich-text-editor/iframe/')
        cy.wait(2000)
        //By coustom command
        cy.GetIframe('#iframeRTE_rte-view').clear().type('Welcome {selectall}')
        cy.get("#iframeRTE_toolbar_Bold > .e-btn-icon").click()
    }
    )

    it.skip('Iframes approach 3 cypress iframe plugin', function()
    {
        cy.visit('https://ej2.syncfusion.com/demos/rich-text-editor/iframe/')
        cy.wait(5000)
        //By plugin
        cy.frameLoaded("#iframeRTE_rte-view")
        cy.iframe("#iframeRTE_rte-view").should('be.visible').clear()
        .type("Hello {selectall}")

        cy.get('#iframeRTE_toolbar_Bold > .e-btn-icon').click()
    }
    )

}
)