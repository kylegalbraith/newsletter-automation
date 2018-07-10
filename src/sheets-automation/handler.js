'use strict';
var GoogleSpreadsheet = require('google-spreadsheet');
var Mailchimp = require('mailchimp-api-v3');

var SheetRepository = require('./repository/sheetRepository');
var MailchimpEmailTemplate = require('./templates/mailchimpEmailTemplate');
var NewsletterGenerator = require('./generators/newsletterGenerator');
var MailchimpDelivery = require('./delivery/mailchimpDelivery');

module.exports.generateNewsletter = (event, context, callback) => {
  let sheetId = process.env.googleSheetId;
  let mailchimpApiKey = process.env.mailChimpKey
  let mailchimpList = process.env.mailchimpListId;

  var sheetRepo = new SheetRepository(new GoogleSpreadsheet(sheetId));
  var newsletterGenerator = new NewsletterGenerator();

  sheetRepo.loadLatestSheet(function (data) {
    var mailChimpMarkup = newsletterGenerator.generateMarkup(new MailchimpEmailTemplate(), data.results, data.volume, data.para1, data.para2, data.para3);
    createNewMailchimpTemplate(mailchimpApiKey, mailChimpMarkup, mailchimpList, data.volume, data.subject).then((response) => {
      callback(null, response);
    }).catch((err) => {
      callback(err);
    });
  });
};

function createNewMailchimpTemplate(mailChimpKey, markup, listId, volume, subjectText) {
  var mailChimpClient = new MailchimpDelivery(new Mailchimp(mailChimpKey));
  return mailChimpClient.saveTemplate(`Learn By Doing Volume ${volume}`, markup)
    .then((data) => {
      return mailChimpClient.createRegularCampaign(
        listId, 
        `Weekly Learn AWS Newsletter [Vol ${volume}]`,
        `[Learn By Doing] Volume #${volume}: ${subjectText}`,
        data.id);
    })
}
