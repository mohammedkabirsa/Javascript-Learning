Feature('My First Test')

Scenario('Enter Form', ({ I }) => {
  I.amOnPage('/')
  I.fillField('//*[@id="name"]', 'Kabir')
  I.fillField('//*[@id="phone"]', '9087929229')
  I.fillField('//*[@id="email"]', 'email@email.com')
  I.fillField('//*[@id="password"]', 'ASDasdasd')
  I.fillField('//*[@id="address"]', '22.St 1,Vellore')
  I.click('Submit')

  // I.fillField()
})
