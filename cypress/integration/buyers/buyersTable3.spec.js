
describe("Validar reuniões do buyer que inicia evento na mesa 3 - Dani Johnson", function(){
    beforeEach(function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/b3f61131b6eceeb2b14835fa648a48ff/simple');
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