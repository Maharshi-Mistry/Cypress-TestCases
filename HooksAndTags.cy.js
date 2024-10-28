/*There is 4 hooks provided by cypress
-Before = if we add before then it only execute once for one describe block
-After = if we have added after then it only execute once for one describe block
-BeforeEach = BeforeEach will get execute before every "It" block
-AfterEach = AfterEach will get execute after every "It" block
*/


describe('Hooks and Tags', function(){

    before( ()=>{
        cy.log('**** Launch App ****')
    })
    after(()=>{
        cy.log('**** closing App ****')
    })
    beforeEach(()=>{
        cy.log('**** Before Each ****')
    })
    afterEach(()=>{
        cy.log('**** After Each ****')
    })

    it('Search', function(){

        cy.log('++++ Search ++++')
    })

    it.only('Advance Search', function(){

        cy.log('++++ Advance Search ++++')
    })

    it('listing Product', function(){

        cy.log('++++ Listing Product ++++')
    })
})