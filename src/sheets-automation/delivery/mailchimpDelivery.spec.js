'use strict';
var MailChimpDelivery = require('./mailchimpDelivery');
var MailchimpClient = require('mailchimp-api-v3');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('mailChimpDelivery module', () => {
    before(() => {
        let stubClient = sinon.createStubInstance(MailchimpClient);
        stubClient.post.withArgs('/templates').resolves({id: 123456});
        stubClient.post.withArgs('/campaigns').resolves({id: "campaign-id"});
        this.mailChimpDelivery = new MailChimpDelivery(stubClient);
    });

    describe('saveTemplate', () => {
        it('should be a function', () => {
            expect(this.mailChimpDelivery.saveTemplate).to.be.a('function');
        });

        it('should return an id field', () => {
            this.mailChimpDelivery.saveTemplate("name", "markup").then((data) => {
                expect(data.id).to.equal(123456);
            });            
        });
    });

    describe('createRegularCampaign', () => {
        it('should be a function', () => {
            expect(this.mailChimpDelivery.createRegularCampaign).to.be.a('function');
        });

        it('should return an id field', () => {
            this.mailChimpDelivery.createRegularCampaign("listid", "title", "subject", "templateid").then((data) => {
                expect(data.id).to.equal("campaign-id");
            });            
        });
    });
});