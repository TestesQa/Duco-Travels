
describe('App DUCO regression tests for exhibitor Schedule',()=>{

    beforeEach(function(){
        //Imago Artis exhibitor, exhibitor.json and agenda link
        cy.fixture('exhibitor').then((exhibitor)=>{
            this.exhibitor = exhibitor;
        })
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/exhibitor/schedule/social-distancing/c8ba76c279269b1c6bc8a07e38e78fa4/simple');
    })

    it('Validate url and HTML document title', function(){
        const EXPECTEDURL = 'https://duco.dev.luby.com.br/italy-2021-physical/exhibitor/schedule/social-distancing/c8ba76c279269b1c6bc8a07e38e78fa4/simple';
        cy.url().should('be.equal', EXPECTEDURL);
        const TITLE = 'DUCO ITALY 2021 - Schedule';
        cy.title().should('be.equal', TITLE);
    })

    it('Exhibitor title and schedule title should be visible', function(){
        cy.get('section .tipoFiltro').contains('EXHIBITOR').should('be.visible');
        cy.get('h3[dayappointment="1"]').should('be.visible');
        cy.get('h3[dayappointment="2"]').should('be.visible');
        cy.get('h3[dayappointment="3"]').should('be.visible');
    })

    it('Exhibitor name should be visible', function(){
        cy.get('section h1').contains('Table 1 - Imago Artis Travel').should('be.visible');
    })

    it('Validate Exhibitor schedule locals', function(){
        const FIRSTDAY = 'Four Seasons Hotel Firenze';
        const SECONDDAY = 'Four Seasons Hotel Firenze';
        const THIRDDAY = 'Four Seasons Hotel Firenze';
        cy.get('h3[dayappointment="1"] span').should('have.text',FIRSTDAY);
        cy.get('h3[dayappointment="2"] span').should('have.text',SECONDDAY);
        cy.get('h3[dayappointment="3"] span').should('have.text',THIRDDAY);
    })

    it('Validate buyers field is visible', function(){
        for(var i = 1; i < 20; i++){
            cy.get('table[dayappointment="1"] tbody tr td:nth-child(4)')
                .should('be.visible');
            cy.get('table[dayappointment="1"] tbody tr td:nth-child(5)')
                .should('be.visible');
        }
        for(var i = 20; i < 39; i++){
            cy.get('table[dayappointment="2"] tbody tr td:nth-child(4)')
                .should('be.visible');
            cy.get('table[dayappointment="2"] tbody tr td:nth-child(5)')
                .should('be.visible');
        }
        for(var i = 40; i < 56; i++){
            cy.get('table[dayappointment="3"] tbody tr td:nth-child(4)')
                .should('be.visible');
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
            .should('have.length', this.exhibitor.exhibitor.appointments[0].length);
    })

    it('Validates appointments quantity for second Day', function(){
        cy.get('table[dayappointment="2"] td:nth-child(2)')
            .should('have.length', this.exhibitor.exhibitor.appointments[1].length);
    })

    it('Validates appointments quantity for third Day', function(){
        cy.get('table[dayappointment="3"] td:nth-child(2)')
            .should('have.length', this.exhibitor.exhibitor.appointments[2].length);
    })
})