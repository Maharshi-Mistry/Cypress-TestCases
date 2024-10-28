describe('Fixture File check', function(){
    let userdata;  //We have created one global function and variable which we can use in any it block
    before( ()=>{   
        cy.fixture('OrangeCred').then((Data)=>{
            userdata=Data;
        })
    })

    //Approach 1 - Access data directly
    /*it('Data from Fixture', function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture('OrangeCred.json').then((data)=>{  //User fixture method to call the file and use data from the same file
            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()
            cy.wait(3000)
        //Validation
            cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
            .should('have.text',(data.expected))

        })

        
    })
    */
    //Approach 2 using hook (in Before Each method)
    it('Data from Fixture using Hook', function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //User fixture method to call the file and use data from the same file
            cy.get("input[placeholder='Username']").type(userdata.username)
            cy.get("input[placeholder='Password']").type(userdata.password)
            cy.get("button[type='submit']").click()
            cy.wait(3000)
        //Validation
            cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
            .should('have.text',(userdata.expected))
    })

    //With Incorrect data
    it('Data from Fixture using Hook, incorrect data', function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //User fixture method to call the file and use data from the same file
            cy.get("input[placeholder='Username']").type(userdata.username1)
            cy.get("input[placeholder='Password']").type(userdata.password1)
            cy.get("button[type='submit']").click()
            cy.wait(3000)
        //Validation
            cy.get('.oxd-alert-content > .oxd-text')
            .should('have.text',(userdata.expected1))
    })
})