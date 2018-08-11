var creds = require('../g-auth.json');

module.exports = class SheetRepository {
    constructor(googleSpreadSheetClient, specialRows) {
        this.sheetClient = googleSpreadSheetClient;
        this.specialRows = specialRows;
    }

    loadLatestSheet(callback) {
        this.sheetClient.useServiceAccountAuth(creds, (result, authErr) => {
            console.log("Load sheet info");
            this.sheetClient.getInfo((err, sheetInfo) => {
                console.log(sheetInfo);
                var sheets = sheetInfo.worksheets;
                console.log(`Got ${sheets.length} worksheets back`);
                var sheet = sheets[sheets.length - 1];
                console.log(`sheet: ${JSON.stringify(sheet)}`);

                var resultObj = new Object();
                sheet.getRows({ limit: 100000, offset: 0 }, (err, rows) => {
                    if (rows != null) {
                        resultObj['volume'] = rows[0].volume;
                        this.specialRows.forEach(field => {
                            let fieldInSheet = rows.find(r => r.category.toLowerCase() === field);
                            if (fieldInSheet)
                                resultObj[field] = rows.find(r => r.category.toLowerCase() === field).text;
                            else
                                console.warn(`Special field, ${field} does not exist in sheet`);
                        });
                    }

                    resultObj['results'] = this.processRows(rows);
                    callback(resultObj);
                });
            });
        });
    }

    processRows(rows) {
        var results = [];
        rows.forEach(element => {
            if (!this.specialRows.includes(element.category.toLowerCase())) {
                var article = {
                    title: element.title,
                    link: element.link,
                    text: element.text
                };

                var catInResults = results.find(e => e.category === element.category);
                if (catInResults == null) {
                    results.push({
                        volume: element.volume,
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