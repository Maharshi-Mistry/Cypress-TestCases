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
    it('Table record from the rows and columns', function(){
        //how to read the all data from the table from first page
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.contain','10')//Count each row
         .each( ($row, index, $rows)=>{   //this each is for to get row store in $rows then count should be store in index and one by one it will store in $row
            cy.wrap($row).within( ()=>
            {
                cy.get("td").each( ($column, index, $columns) =>{  //this to get each td and the each is for to get columns store in $columns then count should be store in index and one by one it will store in $columns
                    cy.log($column.text()) //log is use to log the data and .text() is use to get print the text
                })
            })
         })
    })
    it.only('Table record from the rows and columns', function(){
        //how to read the all data from the table from mulitple pages
        //find total number of pages
        /*let totalpages;
        cy.get(".col-sm-6.text-end").then( (e)=>{
            let text = e.text() //text variable now contains the total number of pages
            totalpages = text.substring( text.indexOf('(')+1, text.indexOf('Pages')-1);
            cy.log("The total number of pages in the table=> "+totalpages);
        })
    */
    let totalpage = 10;
    for(let p=1;p<=totalpage;p++)
    {
        if(totalpage>1)
        {
            cy.log('Active Page = ' +p);
            cy.get("ul[class='pagination']>li:nth-child("+p+")").click()
            cy.wait(1000)
            cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.contain','10')//Count each row

            //Loop to get all the data and print
             .each( ($row, index, $rows)=>{   //this each is for to get row store in $rows then count should be store in index and one by one it will store in $row
                cy.wrap($row).within( ()=>
                {
                    cy.get("td:nth-child(3)").then((e) =>{  //this to get each 3 td(which is email in this case) and the each is for to get columns store in $columns then count should be store in index and one by one it will store in $columns
                    cy.log(e.text()) //log is use to log the data and .text() is use to get print the text
                    })
                })
            
            }) 


        }
    }
    })

})
