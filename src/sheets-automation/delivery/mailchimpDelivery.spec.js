'use strict';
var MailChimpDelivery = require('./mailchimpDelivery');
var MailchimpClient = require('mailchimp-api-v3');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('mailChimpDelivery module', () => {
    before(() => {
        let stubClient = sinon.createStubInstance(MailchimpClient);
        stubClient.post.withArgs('/templates').resolves({id: 123456});
        this.mailChimpDelivery = new MailChimpDelivery(stubClient);
    });

    describe('saveTemplate', () => {
        it('should be a function', () => {
            expect(this.mailChimpDelivery.saveTemplate).to.be.a('function');
        });

        it('should return an id field', () => {
            this.mailChimpDelivery.saveTemplate(null, null).then((data) => {
                expect(data.id).to.equal(123456);
            });            
        });
    });
});