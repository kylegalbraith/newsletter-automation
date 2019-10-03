// Only writing types for the methods used by the project.

export interface PaginateOptions {
  offset?: number;
  limit?: number;
  orderby?: string;
  reverse?: boolean;
  query?: string;
}

export interface Author {
  name: string;
  email: string;
}

export interface Article {
  text: string;
  title: string;
  link: string;
}

export interface ProcessedRows {
  volume: string;
  category: string;
  articles: Article[];
}

export interface SpreadSheetRows {
  volume: string | number;
  category: string;
  text: string;
  title: string;
  link: string;
}

export interface SpreadSheetWorkSheet {
  url: string;
  id: string | number;
  title: string;
  rowCount: number;
  colCount: number;

  getRows(
    options: PaginateOptions,
    callback: (err: any, rows: SpreadSheetRows[]) => void
  ): Promise<void>;
}

export interface SpreadsheetInfo {
  id: string | number;
  title: string;
  updated: string | Date;
  worksheets: SpreadSheetWorkSheet[];
  author: Author;
}

export interface SpreadSheetClient {
  useServiceAccountAuth(account_info: {}, callback: Function): Promise<void>;

  getInfo(callback: (err: any, info: SpreadsheetInfo) => void): Promise<void>;
}

export interface LoadLatestSheetData {
  volume: string;
  results: ProcessedRows[];
  subject: string;
  para1: string;
  para2: string;
  para3: string;
}
