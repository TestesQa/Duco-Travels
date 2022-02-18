
class ValidateScheduleTables{
    validateScheduleTable(){
        const { map, countBy, pickBy } = Cypress._
        cy.get('table tbody tr td:nth-child(2)').should(($list) => {
            const counts = countBy(map($list, 'innerText'))
            const duplicates = pickBy(counts, (n) => n > 1)
            expect(duplicates, 'duplicates').to.be.empty
        })
    }
}
export default ValidateScheduleTables;