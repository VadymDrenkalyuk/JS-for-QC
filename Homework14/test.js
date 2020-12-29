require("chromedriver");
const assert = require("chai");
const { Builder, Key, By, until } = require("selenium-webdriver");

describe("Homework14", function () {
  let driver;
  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });
  after(() => driver && driver.quit());  

  it("Is element enabled", async function () {
    await driver.get("http://the-internet.herokuapp.com/dropdown");

    let dropdown = await driver.findElement({ id: 'dropdown' });
    dropdown.click();
    dropdown.findElements({ css: 'option' }).then(function (options) {
      assert.equal(options[0].getAttribute("disabled"), "disabled");
      assert.equal(options[1].getAttribute("disabled"), "undefined");
    });
  });

  it("Moving mouse on an element", async function () {
    await driver.get("http://the-internet.herokuapp.com/hovers");

    let avatars = await driver.findElements({ className: 'figure' });
    await driver.actions().move(avatars[1]);
    let names = await driver.findElements({ tagName: 'h5' });
    names[1].getText().then(function (text) {
      assert.equal(text, "name: user1");
    });
  });

  it("Filling the form", async function () {
    await driver.get("http://formy-project.herokuapp.com/form");

    await driver.findElement(By.id('first-name')).sendKeys('Peter');
    await driver.findElement(By.id('last-name')).sendKeys('Peterson');
    await driver.findElement(By.id('job-title')).sendKeys('tester');
    await driver.findElement(By.id("radio-button-1")).click();
    await driver.findElement(By.id("checkbox-1")).click();
    await driver.findElement(By.css('#select-menu > option:nth-child(3)')).click();
    await driver.findElement(By.id("datepicker")).sendKeys("12/12/2020");
    await driver.findElement(By.css(".btn.btn-lg.btn-primary")).click();

    let successMessage = await driver.wait(until.elementLocated(By.className('alert alert-success')), 2000);
    successMessage.getText().then(function(text) {
      assert.equal(text, "name: user1");
    });
  });
});