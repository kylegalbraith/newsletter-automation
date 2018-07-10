module.exports = class MailchimpDelivery {
    constructor(mailChimpClient) {
        this.mailChimpClient = mailChimpClient;
    }

    saveTemplate(name, markup) {
        return mailChimpClient.post("/templates", {
            name: name,
            html: markup
        });
    }

    createRegularCampaign(recipientListId, title, subjectLine, templateId) {
        return mailChimpClient.post("/campaigns", {
            type: "regular",
            recipients: {
              list_id: recipientListId
            },
            settings: {
              title: title,
              subject_line: subjectLine,
              template_id: data.id
            }
          });
    }
}