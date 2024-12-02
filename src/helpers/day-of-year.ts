/**
 * Calculates the day of the year for a given date.
 * 
 * The function determines how many days have passed since the start of the year
 * for the provided `Date` object.
 * 
 * @param date - The date for which to calculate the day of the year.
 * @returns - The day of the year (1-based), where:
 *   - January 1st returns 1
 *   - December 31st of a non-leap year returns 365
 *   - December 31st of a leap year returns 366
 */
export default function dayOfYear(date:Date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const diffInMs = date.getTime() - startOfYear.getTime();
    const millisecondsInADay = (1000 * 60 * 60 * 24);
    return Math.floor(diffInMs / millisecondsInADay);
}