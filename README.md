# newsletter-automation
An AWS Lambda function that runs on a CRON schedule to grab content from a Google Sheet and generate a new MailChimp campaign.

## Getting Started
1. You must create a `g-auth.json` file and add it to the src of this project next to `serverless.yml`. Instructions on how to create this authentication file for Google Sheets can be found [here](https://www.npmjs.com/package/google-spreadsheet).
2. Update `serverless.yml` with the appropriate environment variables.
```yml
environment:
  googleSheetId: <your-google-sheet-id>
  mailChimpKey: <your-mailchimp-api-key>
  mailchimpListId: <your-mailchimp-unique-list-id>
```
3. Run `npm install` from the command line.
4. Run `serverless deploy` from the command line.

