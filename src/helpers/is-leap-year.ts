/**
 * Determines whether a given year is a leap year.
 * 
 * A year is considered a leap year if it is divisible by 4.
 * 
 * @param year - The year to check.
 * @returns - True if the year is a leap year, otherwise false.
 */
export default function isLeapYear(year:number) {
    return year % 4 === 0;
}