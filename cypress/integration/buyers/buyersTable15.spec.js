describe('validar reuniões dos buyers que iniciam evento na mesa 15',function(){

    it('Verificar se há reuniões repetidas no primeiro dia pelas mesas da Monique Thofte', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/8c9f32e03aeb2e3000825c8c875c4edd/simple')
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="1"] tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    })

    it('Verificar se há reuniões repetidas no segundo dia pelas mesas da Monique Thofte', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/8c9f32e03aeb2e3000825c8c875c4edd/simple')
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="2"] tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    })

    it('Verificar se há reuniões repetidas no terceiro dia pelas mesas da Monique Thofte', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/8c9f32e03aeb2e3000825c8c875c4edd/simple')
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="3"] tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    })
    it('Verificar se há reuniões repetidas no primeiro dia pelas mesas da Marybeth Hillier', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/be1df9a5d08724971f64a511e24fc904/simple')
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="1"] tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    })

    it('Verificar se há reuniões repetidas no segundo dia pelas mesas da Marybeth Hillier', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/be1df9a5d08724971f64a511e24fc904/simple')
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="2"] tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    })

    it('Verificar se há reuniões repetidas no terceiro dia pelas mesas da Marybeth Hillier', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/be1df9a5d08724971f64a511e24fc904/simple')
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="3"] tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    })
})