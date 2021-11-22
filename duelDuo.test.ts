
import { Builder, Capabilities, By } from "selenium-webdriver"

/**
 * @param xpath
 */

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Choices id is displaed after clicking the Draw button', async () => {
    const draw = await driver.findElement(By.id('draw'))
    draw.click()
    await driver.sleep(2000)
    const choices = await driver.findElement(By.id('choices'))
    const choicesDisplayed = await choices.isDisplayed()
    expect(choicesDisplayed).toBe(true) 

})
 test('Player id is displaed after clicking the Add to Duo button', async () => {
  const div1 = await driver.findElement(By.xpath("//section/div[@class=\'container'\]"))
    
//Note: This test is incomplette and I would like help with identifying how to access the nessted tags and attributes for the section tag for this test.
})