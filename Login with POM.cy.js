import loginA from "../PageObjects/LoginAp2"

describe('POM', function(){
    /*
    it('Page Object Model Implimentation', function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
    })
    */

    //Using Page Object Class
    it('Page Object Model Implimentation', function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        let ln=new loginA();
        ln.setUsername('Admin');
        ln.setPassword('admin123');
        ln.ClickSumbit();
        ln.VerifyLogin();

    })

    //using Pom with fixture
    it.only('Page Object Model Implimentation', function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.fixture('OrangeCred').then((data)=>{
            let ln=new loginA();
            ln.setUsername(data.username);
            ln.setPassword(data.password);
            ln.ClickSumbit();
            ln.VerifyLogin();
        })
        })
})