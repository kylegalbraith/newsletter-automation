module.exports = class NewsletterGenerator {
    generateMarkup(emailTemplateInterface, arrOfContent, volume, para1, para2, para3) {
        var template = emailTemplateInterface.getEmailTemplate();
        arrOfContent.forEach(key => {
            var content = "";
            key.articles.forEach(element => {
                let paragraph = emailTemplateInterface.getFormattedArticle(element.link, element.title, element.text);
                content += paragraph;
            });

            template = this.replaceTemplateKey(key.category, template, content);
        });

        template = this.replaceTemplateKey("para1", template, para1);
        template = this.replaceTemplateKey("para2", template, para2);
        template = this.replaceTemplateKey("para3", template, para3);
        template = template.replace("#replaceVolumeNumber#", volume);
        return template;
    }

    replaceTemplateKey(category, template, content) {
        switch (category.toLowerCase()) {
            case "cloud":
                return template.replace("#replaceCloud#", content);
            case "blockchain":
                return template.replace("#replaceBlockchain#", content);
            case "code":
                return template.replace("#replaceCoding#", content);
            case "cool find":
                return template.replace("#replaceCoolFind#", content);
            case "para1":
                return template.replace("#replacePara1#", content);
            case "para2":
                return template.replace("#replacePara2#", content);
            case "para3":
                return template.replace("#replacePara3#", content);
        }
    }
}
