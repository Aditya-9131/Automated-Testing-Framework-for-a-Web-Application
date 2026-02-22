const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');
const testData = require('../data/testData.json');

describe('Login Tests', function () {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function () {
    await driver.quit();
  });

  it('should login with valid credentials', async function () {
    await driver.get('https://example.com/login');

    await driver.findElement(By.id('username')).sendKeys(testData.validUser.username);
    await driver.findElement(By.id('password')).sendKeys(testData.validUser.password);
    await driver.findElement(By.id('loginButton')).click();

    const welcomeMessage = await driver.wait(until.elementLocated(By.id('welcomeMessage')), 10000).getText();
    expect(welcomeMessage).to.include('Welcome, testuser');
  });

  it('should not login with invalid credentials', async function () {
    await driver.get('https://example.com/login');

    await driver.findElement(By.id('username')).sendKeys(testData.invalidUser.username);
    await driver.findElement(By.id('password')).sendKeys(testData.invalidUser.password);
    await driver.findElement(By.id('loginButton')).click();

    const errorMessage = await driver.wait(until.elementLocated(By.id('errorMessage')), 10000).getText();
    expect(errorMessage).to.include('Invalid username or password');
  });
});