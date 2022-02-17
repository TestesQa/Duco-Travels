describe('validar reuniões dos buyers que iniciam evento na mesa 14',function(){

    it('Verificar se há reuniões repetidas no primeiro dia pelas mesas da Minette Scheffers', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/2f4fe03d77724a7217006e5d16728874/simple')
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="1"] tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    })

    it('Verificar se há reuniões repetidas no segundo dia pelas mesas da Minette Scheffers', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/2f4fe03d77724a7217006e5d16728874/simple')
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="2"] tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    })

    it('Verificar se há reuniões repetidas no terceiro dia pelas mesas da Minette Scheffers', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/2f4fe03d77724a7217006e5d16728874/simple')
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="3"] tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    })
    it('Verificar se há reuniões repetidas no primeiro dia pelas mesas da Marcia Hellman', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/9657c1fffd38824e5ab0472e022e577e/simple')
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="1"] tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    })

    it('Verificar se há reuniões repetidas no segundo dia pelas mesas da Marcia Hellman', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/9657c1fffd38824e5ab0472e022e577e/simple')
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="2"] tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    })

    it('Verificar se há reuniões repetidas no terceiro dia pelas mesas da Marcia Hellman', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/9657c1fffd38824e5ab0472e022e577e/simple')
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="3"] tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    })
})