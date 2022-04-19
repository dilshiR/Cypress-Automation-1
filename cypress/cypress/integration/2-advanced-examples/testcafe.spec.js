
/// <reference types = "Cypress"/>
import TestCafeExample from "../Page Objects/TestCafeExample";

describe('QA Automation Challenge for Quality Engineers ', () => {
    it('Enter “test” as name and click on populate.', () => {
        const tc = new TestCafeExample()
        tc.visit()
        tc.fillYourName('test')
        tc.populate()

        })
      

    it('Reset information by clicking “OK” in the alert.', () => {
        const tc1 = new TestCafeExample()
        tc1.reset()
        

        })
      

    it('Verify user can select the check boxes', () => {
        const tc2 = new TestCafeExample()
        tc2.checkFeatures()
        

        })
      

    it('Verify user can select one of radio button for operating system ', () => {
        const tc3 = new TestCafeExample()
        tc3.selectOS()
        

        })
      

    it('Verify user can select an value from dropdown', () => {
        const tc4 = new TestCafeExample()
        tc4.selectDropdown()
        

        })
      

    it('Verify user can tick checkbox', () => {
        const tc5 = new TestCafeExample()
        tc5.selectTriedtestCafe()

        

        })
    it('Verify user can increase scale', () => {
        const tc6 = new TestCafeExample()
        tc6.increaseScale()
            
            
    
        })
      

    it('Verify user can type text in text area', () => {
        const tc7 = new TestCafeExample()
        tc7.typeText()
        

        })
      

    it('Verify user can submit the form', () => {
        const tc8 = new TestCafeExample()
        tc8.clickSubmit()
        

        })
      


    it('Verify user can load the web page', () => {
        const tc9 = new TestCafeExample()
        tc9.visitWebpage()
        

        })
      


    it('Verify user can see contains of the web page', () => {
        const tc10 = new TestCafeExample()
        tc10.contains()
        

        })
      
    })