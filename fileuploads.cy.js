describe('File Upload suite', function(){
    it('single File Upload', function(){
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile("locators.txt")
        cy.get('#file-submit').click()
        cy.wait(2000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    })

    it('File Upload - Rename', function(){
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile({filePath: 'locators.txt', fileName: 'Fresh Upload.txt'}) //file path and file name is use to rename the uploaded file
        cy.get('#file-submit').click()
        cy.wait(2000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    })

    it('File Upload - Drag and Drop', function(){
        
        cy.visit("http://the-internet.herokuapp.com/upload")
        cy.get('#drag-drop-upload').attachFile('locators.txt',{subjectType:'drag-n-drop'}) //subject type drag and drop is used for drag and drop option
        
        cy.get("div[class='dz-preview dz-file-preview dz-processing dz-success dz-complete'] div[class='dz-details'] span")
        .contains('locators.txt')     
        cy.get('#file-submit').click()
        cy.wait(2000)
        cy.get("h1").should('have.text','Internal Server Error')
    })

    it('Multiple File Upload - Rename', function(){
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.wait(2000)
        cy.get('#filesToUpload')
        .attachFile([{filePath: 'locators.txt', fileName: 'Fresh Upload.txt'},{filePath: 'gadadhari group.pdf', fileName: 'Gada Upload.txt'}]) //file path and file name is use to rename the uploaded file
        cy.wait(2000)
        cy.get(':nth-child(6) > strong').contains('Files You Selected:')
    })

    it.only('File Upload - Shadow Dom', function(){
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.wait(2000)
        cy.get('.smart-browse-input', {includeShadowDom: true}).attachFile("locators.txt") // while element is under shadow dom then use a get element which is with input tag
        //Use includeShadowDom: true inside the get method when the element is under the shadow Dom
        cy.wait(2000)
        cy.get('.smart-item-name',{includeShadowDom:true}).should('have.text','locators.txt')
    })


/*    it.only('Gmail upload', function(){
        cy.visit('https://mail.google.com/mail/u/0/?hl=en_GB#inbox')
        cy.get("//div[contains(text(),'Compose')]").click()
        cy.get("//div[@id=':rr']").attachFile('locators.txt')

    })
*/
})