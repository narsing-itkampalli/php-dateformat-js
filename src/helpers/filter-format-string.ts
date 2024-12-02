/**
 * Filters and transforms a format string by extracting escaped substrings and placeholders.
 * 
 * The function processes a format string and performs the following:
 * 1. Identifies substrings enclosed in `{}` or prefixed with `\` using a regular expression.
 * 2. Removes these matched substrings from the original string.
 * 3. Creates a list of extracted substrings along with their positions.
 * 4. Reconstructs the string, replacing the original matches with their corresponding escaped substrings,
 *    represented as arrays in the output.
 * 
 * @param formatString - The input string containing placeholders (`{}`) or escape sequences (`\`).
 * @returns - An array of characters from the filtered string, where:
 *   - Each normal character is a string.
 *   - Escaped substrings are represented as single-element arrays.
 * 
 * Example:
 * Input: "Hello {world}\\!"
 * Output: ["H", "e", "l", "l", "o", " ", ["world"], ["!"]]
 */
export default function filterFormatString(formatString:string): (string | [string])[] {
    // Match placeholders `{}` or escaped characters `\`
    const regex = /{(.*?)}|\\(.)/gm;

    let filteredString = formatString;
    const escapedStringList:{str: string, index: number}[] = [];
    let match:RegExpExecArray | null = null;

    // Extract placeholders and escaped substrings
    while((match = regex.exec(filteredString)) !== null) {
        const matchedString = match[0];
        const index = match.index;
        const matchedStringWithoutEscapeLiterals = match[1] || match[2];

        // Store the matched substring and its position
        escapedStringList.push({str: matchedStringWithoutEscapeLiterals, index});
        // Remove the matched substring from the filtered string
        filteredString = filteredString.slice(0, index) + filteredString.slice(index + matchedString.length, filteredString.length);
    }

    // Convert the remaining string into an array of characters
    const filteredStringArray:(string|[string])[] = Array.from(filteredString);

    // Reinsert escaped substrings at their respective positions
    escapedStringList.forEach((escapedString, index) => {
        filteredStringArray.splice(escapedString.index + index, 0, [escapedString.str]);
    });

    return filteredStringArray;
}