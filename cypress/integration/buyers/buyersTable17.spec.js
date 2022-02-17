describe('validar reuniões dos buyers que iniciam evento na mesa 17',function(){

    it('Verificar se há reuniões repetidas no primeiro dia pelas mesas da Rob Karp', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/2c6ae45a3e88aee548c0714fad7f8269/simple')
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="1"] tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    })

    it('Verificar se há reuniões repetidas no segundo dia pelas mesas da Rob Karp', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/2c6ae45a3e88aee548c0714fad7f8269/simple')
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="2"] tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    })

    it('Verificar se há reuniões repetidas no terceiro dia pelas mesas da Rob Karp', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/2c6ae45a3e88aee548c0714fad7f8269/simple')
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="3"] tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    })
    it('Verificar se há reuniões repetidas no primeiro dia pelas mesas da Michael Lerner', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/6048ff4e8cb07aa60b6777b6f7384d52/simple')
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="1"] tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    })

    it('Verificar se há reuniões repetidas no segundo dia pelas mesas da Michael Lerner', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/6048ff4e8cb07aa60b6777b6f7384d52/simple')
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="2"] tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    })

    it('Verificar se há reuniões repetidas no terceiro dia pelas mesas da Michael Lerner', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/6048ff4e8cb07aa60b6777b6f7384d52/simple')
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="3"] tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    })
})