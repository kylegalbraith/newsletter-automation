'use strict';
var NewsletterGenerator = require('./newsletterGenerator');
var MailchimpEmailTemplate = require("../templates/mailchimpEmailTemplate");
var expect = require('chai').expect;
var sinon = require('sinon');

describe('newsletterGenerator module', () => {
    before(() => {
        this.newsletterGenerator = new NewsletterGenerator();
    });

    describe('generateMarkup', () => {
        it('should be a function', () => {
            expect(this.newsletterGenerator.generateMarkup).to.be.a('function');
        });

        it('should replace para tags and volume', () => {
            let stubClient = sinon.createStubInstance(MailchimpEmailTemplate);
            stubClient.getEmailTemplate.returns("#replacePara1# #replacePara2# #replacePara3# #replaceVolumeNumber#");

            var template = this.newsletterGenerator.generateMarkup(stubClient, [], 15, "p1", "p2", "p3");
            expect(template).to.equal("p1 p2 p3 15");
        });

        it('should replace blockchain, coding, cloud and cool find tags', () => {
            let stubClient = sinon.createStubInstance(MailchimpEmailTemplate);
            stubClient.getEmailTemplate.returns("#replaceCloud# #replaceBlockchain# #replaceCoding# #replaceCoolFind#");
            stubClient.getFormattedArticle.returns("fa");

            var template = this.newsletterGenerator.generateMarkup(stubClient, generateTestSet(), 15, "p1", "p2", "p3");
            expect(template).to.equal("fa fa fa fa");
        });
    });

    function generateTestSet() {
        return [
            { category: "cloud", articles: [ {link: "/foo.html ",  title: "foo-article", text: "foo-text" } ]},
            { category: "cool find", articles: [ {link: "/foo.html ",  title: "foo-article", text: "foo-text" } ]},
            { category: "code", articles: [ {link: "/foo.html ",  title: "foo-article", text: "foo-text" } ]},
            { category: "blockchain", articles: [ {link: "/foo.html ",  title: "foo-article", text: "foo-text" } ]}
        ];
    }
});