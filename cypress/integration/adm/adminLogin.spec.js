
describe('Admin login test cases', function(){

    beforeEach(function(){
        cy.fixture('admin').then((adm)=>{
            this.admin=adm;
        })
        cy.visit('https://duco.dev.luby.com.br/pava/login');
    })

    it('Validate Login url and HTML documnet Title', function(){
        const EXPECTEDURL = 'https://duco.dev.luby.com.br/pava/login';
        cy.url().should('be.equal', EXPECTEDURL);
        const TITLE = 'DUCO Pavarotti';
        cy.title().should('be.equal', TITLE);
    })

    it('When rendering initial screen', function(){
        const SELECTEVENTTEXT = 'select the event';
        cy.get('.boxLogin p').should('have.text', SELECTEVENTTEXT);
    })
    
    it('Validate error messsage if user does not sent credentials', function(){
        const ERRORMSG = 'Some information needs to be reviewed. Please correct the following errors:';
        cy.get('.boxLogin  a').click();
        cy.get('#erroo .h1').should('have.text',ERRORMSG);
    })

    it('Validate Successfull Admin login', function(){
        cy.get('input[name="usuario"]').type(this.admin.adminUser.user);
        cy.get('input[name="senha"]').type(this.admin.adminUser.pass);
        cy.get('.boxLogin  a').click();
        cy.wait(2000);

        const NEWURL = 'https://duco.dev.luby.com.br/pava/buyers';
        cy.url().should('be.equal', NEWURL);
        const NEWTITLE = 'DUCO ITALY 2021 - Buyers';
        cy.title().should('be.equal', NEWTITLE);
        const EXPECTEDTEXT = 'DUCO ITALY 2021'
        cy.get('.topoPrincipal h1').should('have.text', EXPECTEDTEXT);
    })

    it('Validate wrong Admin password', function(){
        cy.get('input[name="usuario"]').type(this.admin.wrongPassword.user);
        cy.get('input[name="senha"]').type(this.admin.wrongPassword.pass);
        cy.get('.boxLogin  a').click();
        
        cy.wait(2000);
        cy.get('.boxLogin .erroLogin').should('be.visible');
    })

    it('Validate wrong Admin user', function(){
        cy.get('input[name="usuario"]').type(this.admin.wrongUser.user);
        cy.get('input[name="senha"]').type(this.admin.wrongUser.pass);
        cy.get('.boxLogin  a').click();
        
        cy.wait(2000);
        cy.get('.boxLogin .erroLogin').should('be.visible');
    })

    it('Validate not cadastrated user', function(){
        cy.get('input[name="usuario"]').type(this.admin.notCadastrated.user);
        cy.get('input[name="senha"]').type(this.admin.notCadastrated.pass);
        cy.get('.boxLogin  a').click();
        
        cy.wait(2000);
        cy.get('.boxLogin .erroLogin').should('be.visible');
    })
})