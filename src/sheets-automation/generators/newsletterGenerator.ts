import { getFormattedArticle } from "../templates/mailchimpEmailTemplate";
import { LoadLatestSheetData } from "../models/google-spreadsheet";

export function generateMarkup(
  emailTemplate: string,
  data: LoadLatestSheetData
) {
  const { results: arrOfContent, volume, para1, para2, para3 } = data;

  let template = emailTemplate;
  arrOfContent.forEach(key => {
    let content = "";
    key.articles.forEach(element => {
      let paragraph = getFormattedArticle(
        element.link,
        element.title,
        element.text
      );
      content += paragraph;
    });

    template = replaceTemplateKey(key.category, template, content);
  });

  template = replaceTemplateKey("para1", template, para1);
  template = replaceTemplateKey("para2", template, para2);
  template = replaceTemplateKey("para3", template, para3);
  template = template.replace("#replaceVolumeNumber#", volume);
  return template;
}

function replaceTemplateKey(
  category: string,
  template: string,
  content: string
) {
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
    default:
      return "";
  }
}
