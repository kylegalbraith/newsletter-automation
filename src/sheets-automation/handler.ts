import { Handler } from "aws-lambda";
import { MailchimpDelivery } from "./delivery/mailchimpDelivery";
import { generateMarkup } from "./generators/newsletterGenerator";
import { getEmailTemplate } from "./templates/mailchimpEmailTemplate";
import { SheetRepository } from "./repository/sheetRepository";
import { LoadLatestSheetData } from "./models/google-spreadsheet";

const GoogleSpreadsheet = require("google-spreadsheet");
const Mailchimp = require("mailchimp-api-v3");

export const generateNewsletter: Handler = (event, context, callback) => {
  const sheetId = process.env.googleSheetId;
  const mailchimpApiKey = process.env.mailChimpKey || "";
  const mailchimpList = process.env.mailchimpListId || "";

  if (!sheetId || !mailchimpApiKey || !mailchimpList) {
    throw new TypeError(
      "Must define all the enviroment variables as per the docs."
    );
  }

  const sheetRepo = new SheetRepository(new GoogleSpreadsheet(sheetId));

  sheetRepo.loadLatestSheet(function(data: LoadLatestSheetData) {
    const mailChimpMarkup = generateMarkup(getEmailTemplate(), data);
    createNewMailchimpTemplate(
      mailchimpApiKey,
      mailChimpMarkup,
      mailchimpList,
      data.volume,
      data.subject
    )
      .then((response: any) => {
        callback(null, response);
      })
      .catch((err: any) => {
        callback(err);
      });
  });
};

function createNewMailchimpTemplate(
  mailChimpKey: string,
  markup: string,
  listId: string,
  volume: string,
  subjectText: string
) {
  const mailChimpClient = new MailchimpDelivery(new Mailchimp(mailChimpKey));
  return mailChimpClient
    .saveTemplate(`Learn By Doing Volume ${volume}`, markup)
    .then(data => {
      return mailChimpClient.createRegularCampaign(
        listId,
        `Weekly Learn AWS Newsletter [Vol ${volume}]`,
        `[Learn By Doing] Volume #${volume}: ${subjectText}`,
        data.id
      );
    });
}
