/// <reference types = "Cypress"/>

class TestCafeExample 
{

visit()
{
    cy.visit('https://devexpress.github.io/testcafe/example/')
}    

fillYourName(value)
{
    const field = cy.get('#developer-name')
    field.clear()
    field.type(value)
    return this
}

populate()
{
    const button = cy.get('#populate')
    button.click()
}

reset()
{
    cy.on('window:confirm',(str) =>
        {
          expect(str).to.equal('Reset information before proceeding?')
        }
        )
}

checkFeatures()
{
   // const checkbox1 = cy.get('#remote-testing')
   // checkbox1.click()
    const checkbox2 = cy.get('#reusing-js-code')
    checkbox2.click()
   // const checkbox3 = cy.get('#background-parallel-testing')
    //checkbox3.click()
    //const checkbox4 = cy.get('#continuous-integration-embedding')
    //checkbox4.click()
    const checkbox5 = cy.get('#traffic-markup-analysis')
    checkbox5.click()

}
selectOS(){
    //const radio1 = cy.get('#windows')
    //radio1.click()
    const radio2 = cy.get('#macos')
    radio2.click()
    //const radio3 = cy.get('#linux')
    //radio3.click()

}
selectDropdown(){
    const dropdown1 = cy.get('#preferred-interface')
    dropdown1.select('JavaScript API')
    //const dropdown2 = cy.get('#preferred-interface')
    //dropdown2.select('Command Line')
    //const dropdown3 = cy.get('#preferred-interface')
    //dropdown3.select('Both')
}

selectTriedtestCafe(){
    const check = cy.get('#tried-test-cafe')
    check.click()
}
increaseScale(){
    const scale = cy.get('.ui-slider-handle')
    scale.click()
    scale.type('{rightArrow}{rightArrow}{rightArrow}{rightArrow}')
}

typeText(){
    const textfield = cy.get('#comments')
    textfield.type('Please let us know what you think:') 
    textfield.should('have.value', 'Please let us know what you think:')
}

clickSubmit(){
    const submit = cy.get('#submit-button')
    submit.click()
}

visitWebpage(){
    const visitweb = cy.visit('https://devexpress.github.io/testcafe/example/thank-you.html')
}

contains(){
    const message = cy.contains('Thank you, Peter Parker!')
}

}
export default TestCafeExample