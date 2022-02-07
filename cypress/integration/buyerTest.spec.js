
describe('App DUCO regression tests for buyers schedule',()=>{

    beforeEach(function(){
        //Angela Burns abuyer.json and schedule link
        cy.fixture('abuyer').then((buyer)=>{
            this.abuyer = buyer;
        })
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/7b66b4fd401a271a1c7224027ce111bc/simple');
    })

    //var array1OfStrings = this.abuyer.buyer.appointments[0];
    //var array2OfStrings = this.abuyer.buyer.appointments[1];
    //var array3OfStrings = this.abuyer.buyer.appointments[2];
    it('Validate url and HTML document title', function(){
        const EXPECTEDURL = 'https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/7b66b4fd401a271a1c7224027ce111bc/simple';
        cy.url().should('be.equal', EXPECTEDURL);
        
        const TITLE = 'DUCO ITALY 2021 - Schedule';
        cy.title().should('be.equal', TITLE);
    })

    it('Event title should be visible', function(){
        cy.get('h3[dayappointment="1"]').should('be.visible');
        cy.get('h3[dayappointment="2"]').should('be.visible');
        cy.get('h3[dayappointment="3"]').should('be.visible');
    })

    it('Validate schedule locals', function(){
        const FIRSTDAY = 'Four Seasons Hotel Firenze';
        const SECONDDAY = 'Four Seasons Hotel Firenze';
        const THIRDDAY = 'The St Regis, Florence & The Westin Excelsior, Florence ';
        cy.get('h3[dayappointment="1"] span').should('have.text',FIRSTDAY);
        cy.get('h3[dayappointment="2"] span').should('have.text',SECONDDAY);
        cy.get('h3[dayappointment="3"] span').should('have.text',THIRDDAY);
    })

    it('Validate exhibitor field is visible', function(){
        for(var i = 1; i < 20; i++){
            cy.get('table[dayappointment="1"] tbody tr td:nth-child(5)')
                .should('be.visible');
        }
        for(var i = 20; i < 39; i++){
            cy.get('table[dayappointment="2"] tbody tr td:nth-child(5)')
                .should('be.visible');
        }
        for(var i = 40; i < 56; i++){
            cy.get('table[dayappointment="3"] tbody tr td:nth-child(5)')
                .should('be.visible');
        }
    })

    it('validates number of tables for each event days', function(){
        for (var i = 1; i < 20; i++){
            cy.get('table[dayappointment="1"] tbody tr td:nth-child(1)')
                .contains(i).should('have.text', i);
        }
        for (var i = 20; i < 39; i++){
            cy.get('table[dayappointment="2"] tbody tr td:nth-child(1)').contains(i).should('have.text', i);
        }
        for (var i = 40; i < 56; i++){
            cy.get('table[dayappointment="3"] tbody tr td:nth-child(1)').contains(i).should('have.text', i);
        }
    })

    it('Validates appointments quantity for first Day', function(){
        cy.get('table[dayappointment="1"] td:nth-child(2)')
            .should('have.length', this.abuyer.buyer.appointments[0].length);
    })

    it('Validates appointments quantity for second Day', function(){
        cy.get('table[dayappointment="2"] td:nth-child(2)')
            .should('have.length', this.abuyer.buyer.appointments[1].length);
    })
    
    it('Validates appointments quantity for third Day', function(){
        cy.get('table[dayappointment="3"] td:nth-child(2)')
            .should('have.length', this.abuyer.buyer.appointments[2].length);
    })
})