const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('https://demo.opencart.com/');
    await driver.findElement(By.className('dropdown-toggle')).click();
    console.log('URL is:  ' + driver.getCurrentUrl());
  } finally {
    await driver.quit();
  }
})();
