
describe('validar alocação do buyer em outro hotel caso não tenha mais espaço', function(){
    it('Validar alocação do buyer que inicia na mesa 38 em outro hotel no 2 dia', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/999600eb275cc7196161261972daa59b/simple');
        //Mesa inicial = 38
        cy.get('tbody tr[appointment="1"] td:nth-child(2)').contains('TABLE 38').should('be.visible');

        //Ao final do primeiro dia ele deve estar na mesa 17.
        cy.get('tbody tr[appointment="19"] td:nth-child(2)').contains('TABLE 17').should('be.visible');

        cy.get('tbody tr[appointment="20"] td:nth-child(2)').contains('TABLE 60').should('be.visible');
        cy.get('tbody tr[appointment="38"] td:nth-child(2)').contains('TABLE 77').should('be.visible');
        
        cy.get('tbody tr[appointment="39"] td:nth-child(2)').contains('TABLE 81').should('be.visible');
        cy.get('tbody tr[appointment="55"] td:nth-child(2)').contains('TABLE 96').should('be.visible');
        
        // Validar a troca de hoteis
        cy.get('h3[dayappointment="1"] span').then(($hotel1)=>{
            const HOTELD1 = $hotel1.text();
            cy.get('h3[dayappointment="3"] span').then(($hotel3)=>{
                expect($hotel3.text()).not.to.eq(HOTELD1)
            })
        })

    })

})