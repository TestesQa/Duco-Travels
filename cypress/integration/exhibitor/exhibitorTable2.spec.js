describe('validar reuniões do exibidor alocado na mesa 1',function(){

    it('Verificar se há reuniões repetidas no primeiro dia pelas mesas', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/exhibitor/schedule/social-distancing/e034fb6b66aacc1d48f445ddfb08da98/simple')
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="1"] tbody tr td:nth-child(4)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    })

    it('Verificar se há reuniões repetidas no segundo dia pelas mesas', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/exhibitor/schedule/social-distancing/e034fb6b66aacc1d48f445ddfb08da98/simple')
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="2"] tbody tr td:nth-child(5)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    })

    it('Verificar se há reuniões repetidas no terceiro dia pelas mesas', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/exhibitor/schedule/social-distancing/e034fb6b66aacc1d48f445ddfb08da98/simple')
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="3"] tbody tr td:nth-child(4)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    })
})