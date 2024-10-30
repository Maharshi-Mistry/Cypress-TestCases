describe('DataDrivencheck', function(){

    it('multiple Data set', function(){
        cy.fixture('orangeCred 1').then( (data)=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            
            //Created looping block each time it will get new set of data and [pass in the case]
            data.forEach((userdata)=>{
                //User fixture method to call the file and use data from the same file
                    cy.get("input[placeholder='Username']").type(userdata.username)
                    cy.get("input[placeholder='Password']").type(userdata.password)
                    cy.get("button[type='submit']").click()
                    cy.wait(2000)
                
                    if(userdata.username=='Admin' && userdata.password=='admin123')
                    {
                        //Validation Dashboard
                        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
                        .should('have.text',(userdata.expected))

                        //logout
                        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
                        cy.get(':nth-child(4) > .oxd-userdropdown-link').click() 
                        //validation after logout that it should be on login page
                        cy.get('.orangehrm-login-branding > img').should('be.visible') 
                    }
                    else
                    {   
                        //Invalid Cred Validation
                        cy.get('.oxd-alert-content > .oxd-text')
                        .should('have.text',(userdata.expected))    
                    }
            })
        })
    })
})