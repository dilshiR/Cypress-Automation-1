describe('My First Test', () => {

  it('Verify the title of the page - Positive', () => {
  cy.visit('https://devexpress.github.io/testcafe/example/')
  cy.title().should('eq','TestCafe Example Page')
  })

  it('Verify the title of the page - Negetive', () => {
    cy.visit('https://devexpress.github.io/testcafe/example/')
    cy.title().should('eq','TestCafe Page')
  })

  it('Verify the text field of the page', () => {
  cy.visit('https://devexpress.github.io/testcafe/example/')
  cy.get('#developer-name').type('test')

  cy.get('#populate').click()
  cy.on('window:alert',(str) => {
  expect(str).to.equal('Reset information before proceeding?')
  })
  cy.get('#reusing-js-code').click()
  cy.get('#background-parallel-testing').click()
  
  cy.get('#windows').click()
  cy.get('#macos').click()
  cy.get('#linux').click()
  cy.get('#preferred-interface').select('JavaScript API')
  cy.get('#tried-test-cafe').click()
  cy.get('.ui-slider-handle').click().type('{rightArrow}{rightArrow}{rightArrow}{rightArrow}')
  cy.get('#comments').type('Please let us know what you think:') .should('have.value', 'Please let us know what you think:')
  cy.get('#submit-button').click()
  cy.visit('https://devexpress.github.io/testcafe/example/thank-you.html')
  cy.contains('Thank you, Peter Parker!')
  
  
  })

})