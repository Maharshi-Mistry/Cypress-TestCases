describe("Alerts", function() 
{
    it.skip("Alerts", function()
    {
        //1. javascrip alerts which have only 'ok' button
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click() //automatically close the window

        //Validate the message on alert window - trigger one event
        cy.on('window:alert',(Y)=>{

            expect(Y).to.contains('I am a JS Alert')

        })
        //validation after alert window is closed by cypress automatically
        cy.get('p#result').should('contain','You successfully clicked an alert')

        /* cy.visit("https://demo.automationtesting.in/Alerts.html")
        cy.get("button[onclick='alertbox()']").click()
        cy.on('window:alert',(y)=>{

            expect(y).to.contains('I am an alert box!')

        }) */
        

    }
    )
    it.skip("Alerts confirm", function()
    {
        //2. javascrip confirm alert which have 'ok' and 'cancel' buttons
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm',(c)=>{
            expect(c).to.contains('I am a JS Confirm')

        })
        //closed by automatically OK button
        cy.get('p#result').should('have.text','You clicked: Ok')

    }
    )
    it.skip("Alerts confirm cancel", function()
    {
        //2. javascrip confirm alert which have 'ok' and 'cancel' buttons
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm',(c)=>{
            expect(c).to.contains('I am a JS Confirm')

        })
        
        cy.on('window:confirm',()=> false)

        cy.get('p#result').should('have.text','You clicked: Cancel') // close window by cancel buttons

    }
    )
    it.skip("Alerts promt", function()
    {
        //3. javascrip promt alert whcih have some text box and 'ok' button
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((P)=>{
            cy.stub(P,'prompt').returns('Welcome')
        })
        cy.get("button[onclick='jsPrompt()']").click()

        cy.get('p#result').should('have.text','You entered: Welcome')
    }
)
    it.skip("Alerts promt - cancel", function()
    {
        //3. javascrip promt alert whcih have some text box and 'ok' button
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((P)=>{
            cy.stub(P,'prompt').returns('Welcome')
        })
        cy.get("button[onclick='jsPrompt()']").click()

        //cy.on('window:prompt',()=> false) Pending 
        cy.get('p#result').should('have.text','You entered: Welcome')
    }

    )
    it.only("Alerts authenticated", function()
    {
        //4. authenticated alert approch1
        /*cy.visit("https://the-internet.herokuapp.com/basic_auth",{ auth:
                                                                    {username: "admin", 
                                                                     password: "admin"
                                                                    }
                                                                });
        cy.get("div[class='example'] p").should('have.contain','Congratulations!')
        */

        //Approch 2
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should('have.contain','Congratulations!')

        
     

    }
    )
}
)