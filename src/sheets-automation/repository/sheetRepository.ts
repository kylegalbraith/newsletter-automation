import {
  ProcessedRows,
  SpreadSheetClient,
  SpreadSheetRows
} from "../models/google-spreadsheet";

const creds = require("../g-auth.json");

export class SheetRepository {
  private specialRows = ["para1", "para2", "para3", "subject"];

  constructor(private sheetClient: SpreadSheetClient) {}

  loadLatestSheet(callback: Function) {
    this.sheetClient.useServiceAccountAuth(creds, () => {
      console.log("Load sheet info");
      this.sheetClient.getInfo((err: any, sheetInfo) => {
        console.log(sheetInfo);
        const sheets = sheetInfo.worksheets;
        console.log(`Got ${sheets.length} worksheets back`);
        const sheet = sheets[sheets.length - 1];
        console.log(`sheet: ${JSON.stringify(sheet)}`);

        const resultObj: any = {};
        sheet.getRows(
          { limit: 100000, offset: 0 },
          (err: any, rows: SpreadSheetRows[]) => {
            if (rows != null) {
              resultObj["volume"] = rows[0].volume;
              this.specialRows.forEach(field => {
                let fieldInSheet = rows.find(
                  ({ category }) => category.toLowerCase() === field
                );
                if (fieldInSheet) {
                  const res = rows.find(
                    ({ category }) => category.toLowerCase() === field
                  );
                  resultObj[field] = res ? res.text : "";
                } else {
                  console.warn(
                    `Special field, ${field} does not exist in sheet`
                  );
                }
              });
            }

            resultObj["results"] = this.processRows(rows);
            callback(resultObj);
          }
        );
      });
    });
  }

  processRows(rows: SpreadSheetRows[]) {
    const results: ProcessedRows[] = [];
    rows.forEach(element => {
      if (!this.specialRows.includes(element.category.toLowerCase())) {
        const article = {
          title: element.title,
          link: element.link,
          text: element.text
        };

        const catInResults = results.find(e => e.category === element.category);
        if (catInResults == null) {
          results.push({
            volume: element.volume as string,
            category: element.category,
            articles: [article]
          });
        } else {
          catInResults.articles.push(article);
        }
      }
    });

    return results;
  }
}
