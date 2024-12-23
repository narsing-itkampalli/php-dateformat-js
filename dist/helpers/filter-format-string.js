export default function filterFormatString(formatString) {
    const regex = /{(.*?)}|\\(.)/gm;
    let filteredString = formatString;
    const escapedStringList = [];
    let match = null;
    while ((match = regex.exec(filteredString)) !== null) {
        const matchedString = match[0];
        const index = match.index;
        const matchedStringWithoutEscapeLiterals = match[1] || match[2];
        escapedStringList.push({ str: matchedStringWithoutEscapeLiterals, index });
        filteredString = filteredString.slice(0, index) + filteredString.slice(index + matchedString.length, filteredString.length);
    }
    const filteredStringArray = Array.from(filteredString);
    escapedStringList.forEach((escapedString, index) => {
        filteredStringArray.splice(escapedString.index + index, 0, [escapedString.str]);
    });
    return filteredStringArray;
}
