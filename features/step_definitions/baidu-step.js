'use strict';

var expect = require('chai').expect;

module.exports = function () {
    this.World = require('../support/world.js').World;

    this.When(/^打开百度搜索 "([^"]*)"$/, function (searchQuery) {
        this.driver.get("http://www.baidu.com/");
        this.driver.findElement({name:'wd'}).sendKeys(searchQuery);
        return this.driver.findElement({id:'su'}).click();
    });

    this.Then(/^页面显示有搜索结果$/, function () {
        this.waitFor('div.result');
        return this.driver.findElements({ css: 'div.result' })
            .then(function (elements) {
                expect(elements.length).to.not.equal(0);
            });
    });

    this.When(/^百度搜索 "([^"]*)"$/, function (searchQuery) {
        this.driver.get("http://www.baidu.com/");
        this.driver.findElement({name:'wd'}).sendKeys(searchQuery);
        return this.driver.findElement({id:'su'}).click();
    });

    this.Then(/^页面应该显示一下关于金三胖的消息$/, function () {
        this.waitFor('div.result');
        return this.driver.findElements({ css: 'div.result' })
            .then(function (elements) {
                expect(elements.length).to.not.equal(0);
            });
    });

};