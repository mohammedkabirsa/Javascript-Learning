Feature('CodeceptJS demo')

Scenario('check Welcome page on site', ({ I }) => {
  I.amOnPage('https://itera-qa.azurewebsites.net/home/automation')
  I.see('Test automation practice form')
})
