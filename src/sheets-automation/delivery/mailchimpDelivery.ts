import Mailchimp from "mailchimp-api-v3";

export class MailchimpDelivery {
  private readonly templateUrl = "/templates";
  private readonly campaignsUrl = "/campaigns";

  constructor (private mailChimpClient: Mailchimp) {
  }

  saveTemplate (name: string, markup: string) {
    return this.mailChimpClient.post(this.templateUrl, {
      name: name,
      html: markup
    });
  }

  createRegularCampaign (
    recipientListId: string,
    title: string,
    subjectLine: string,
    templateId: number
  ) {
    return this.mailChimpClient.post(this.campaignsUrl, {
      type: "regular",
      recipients: {
        list_id: recipientListId
      },
      settings: {
        title: title,
        subject_line: subjectLine,
        template_id: templateId
      }
    });
  }
}
