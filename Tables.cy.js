describe('Tables check', function(){

    beforeEach('login', function(){
        cy.Opencart()  // Created command to visit website
        cy.get(".btn").click()
        //cy.get('.btn-close').click() //if any other popup opens will close it by this code
        //Expand customer section under the customer section
        cy.get(".parent[href='#collapse-5']").click()
        cy.get("#menu-customer>ul>li:first-child").click() //customer child element
    })

    it('Table count rows and columns', function(){

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10')//Count each row
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','6')//count each column

    })

})
