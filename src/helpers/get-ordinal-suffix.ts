/**
 * Returns the ordinal suffix for a given number.
 * 
 * For example:
 * - 1 -> "1st"
 * - 2 -> "2nd"
 * - 3 -> "3rd"
 * - 4 -> "4th"
 * 
 * Special Case:
 * Numbers between 4 and 20 (inclusive) always use "th" as the suffix.
 * 
 * @param number - The number to format with an ordinal suffix.
 * @returns - The number with its corresponding ordinal suffix.
 */
export default function getOrdinalSuffix(number:number) {
    if (number > 3 && number < 21) return 'th';

    switch (number % 10) {
        case 1:  return "st"
        case 2:  return "nd"
        case 3:  return "rd"
        default: return "th"
    }
}