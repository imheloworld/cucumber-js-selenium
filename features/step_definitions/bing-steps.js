'use strict';

var expect = require('chai').expect;

module.exports = function () {
    this.World = require('../support/world.js').World;

    this.When(/^I search Bing for "([^"]*)"$/, function (searchQuery) {
        this.driver.get('http://www.bing.com/?mkt=zh-CN&mkt=zh-CN&mkt=zh-CN&mkt=zh-CN');
        this.driver.findElement({ name: 'q' })
            .sendKeys(searchQuery);
        return this.driver.findElement({ name: 'q' })
            .sendKeys(this.webdriver.Key.ENTER);
    });

    this.Then(/^I should see some results$/, function () {
        this.waitFor('li.b_algo');
        return this.driver.findElements({ css: 'li.b_algo' })
            .then(function (elements) {
                expect(elements.length).to.not.equal(0);
            });
    });

};
