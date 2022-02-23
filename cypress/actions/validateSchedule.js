
class ValidateScheduleTables{
    //função geral validando todas as tabelas como um todo
    validateScheduleTable(){
        const { map, countBy, pickBy } = Cypress._
        cy.get('table tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    }
    validateScheduleTablesFirstDay(){
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="1"] tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    }
    validateScheduleTablesSecondDay(){
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="2"] tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    }
    validateScheduleTablesThirdDay(){
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="3"] tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    }
    validateHotelJump(){
        cy.get('h3[dayappointment="1"] span').then(($hotel1)=>{
            const HOTELD1 = $hotel1.text();
            cy.get('h3[dayappointment="3"] span').then(($hotel3)=>{
                expect($hotel3.text()).not.to.eq(HOTELD1)
            })
        })
    }

    hotelAeHotelB(){
        cy.get('h3[dayappointment="1"] span').then(($hotel1)=>{
            const HOTELD1 = $hotel1.text();
            cy.get('h3[dayappointment="2"] span').then(($hotel3)=>{
                expect($hotel3.text()).eq(HOTELD1)
            })
        })
    }
    
    hotelC2dia(){
        cy.get('h3[dayappointment="1"] span').then(($hotel1)=>{
            const HOTELD1 = $hotel1.text();
            cy.get('h3[dayappointment="2"] span').then(($hotel3)=>{
                expect($hotel3.text()).not.to.eq(HOTELD1)
            })
        })
    }



    // função geração para validar todos os dias de uma única vez, faz distinção do dia 
    validateScheduleDayDay(){
        const { map, countBy, pickBy } = Cypress._
        cy.get('table[dayappointment="1"] tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
        cy.get('table[dayappointment="2"] tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
        cy.get('table[dayappointment="3"] tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    }


}
export default ValidateScheduleTables;