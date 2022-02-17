
describe("Validar reuniões do buyer que inicia evento na mesa 6 - Jason Miller", function(){
    beforeEach(function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/cf05968255451bdefe3c5bc64d550517/simple');
    })

    it.skip('Verificar reuniões repetidas no dia 1', function(){
        cy.get('table[dayappointment="1"] tbody tr td:nth-child(5)').should('have.length', 22).and(($list) => {
            const values = Cypress._.map($list, 'innerText')
            const distinct = Cypress._.uniq(values)
            expect(distinct, 'all strings are different').to.have.length(values.length,)
        })
    })
    
    it('Verificar reuniões repetidas no dia 1 pela mesa', function(){
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="1"] tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    })
    it('Verificar reuniões repetidas no dia 2 pela mesa', function(){
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="2"] tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    })
    it('Verificar reuniões repetidas no dia 3 pela mesa', function(){
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="3"] tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    })
    

})