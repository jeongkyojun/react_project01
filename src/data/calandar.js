export const date = new Date();
export const YEAR = date.getFullYear();
export const MONTH = date.getMonth();
export const DATE = date.getDate();
export const DAY = date.getDay();

export const MONTH_END = [
    [31,29,31,30,31,30,31,31,30,31,30,31],
    [31,28,31,30,31,30,31,31,30,31,30,31],
    [31,28,31,30,31,30,31,31,30,31,30,31],
    [31,28,31,30,31,30,31,31,30,31,30,31]];
export const FIRST_DAY = (35-DATE+1+DAY)%7;
export const LAST_DAY = (DAY+(MONTH_END[YEAR%4][MONTH]-DATE))%7;
export const DAY_NAME = ['일','월','화','수','목','금','토'];
