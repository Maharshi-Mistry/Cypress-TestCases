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

    it('Table record from the rows and columns', function(){
        //test to count total row and total column and put assertions
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(1) td:nth-child(2)").should('have.contain','!! !!')//Count each row
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(1) td:nth-child(1)").click() //to check the check box from the table
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(1) td:nth-child(2)").next().should('have.contain','min1i@gmail.com')
        cy.get("table[class='table table-bordered table-hover']>thead>tr:nth-child(1) td:nth-child(2)").should('have.text','Customer Name')//count each column

    })
})
