'use strict';

function filterFormatString(formatString) {
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

function getOrdinalSuffix(number) {
    if (number > 3 && number < 21)
        return 'th';
    switch (number % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}

function dayOfYear(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const diffInMs = date.getTime() - startOfYear.getTime();
    const millisecondsInADay = (1000 * 60 * 60 * 24);
    return Math.floor(diffInMs / millisecondsInADay);
}

function isLeapYear(year) {
    return year % 4 === 0;
}

const timezone = (() => {
    try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
    catch (error) {
        console.error("Error resolving timezone:", error.message);
        return "";
    }
})();
const formats = {
    d: (date) => date.getDate().toString().padStart(2, '0'),
    D: (date) => date.toLocaleDateString(undefined, { weekday: 'short' }),
    j: (date) => date.getDate().toString(),
    l: (date) => date.toLocaleDateString(undefined, { weekday: 'long' }),
    N: (date) => (date.getDay() || 7).toString(),
    S: (date) => getOrdinalSuffix(date.getDate()),
    w: (date) => date.getDay().toString(),
    z: (date) => dayOfYear(date).toString(),
    W: (date) => {
        const yearStart = new Date(date.getFullYear(), 0, 1);
        const yearStartWeekDay = yearStart.getDay() || 7;
        const numberOfDaysBeforeFirstMondayOfYear = yearStartWeekDay === 1 ? 0 : 8 - yearStartWeekDay;
        yearStart.setDate(yearStart.getDate() + numberOfDaysBeforeFirstMondayOfYear);
        const diffInMs = date.getTime() - yearStart.getTime();
        const millisecondsInADay = (1000 * 60 * 60 * 24);
        const diffInDays = Math.floor(diffInMs / millisecondsInADay) + 1;
        return (Math.ceil(diffInDays / 7) + (numberOfDaysBeforeFirstMondayOfYear - 4 >= 0 ? 1 : 0)).toString().padStart(2, '0');
    },
    F: (date) => date.toLocaleDateString(undefined, { month: 'long' }),
    m: (date) => String(date.getMonth() + 1).padStart(2, '0'),
    M: (date) => date.toLocaleDateString(undefined, { month: 'short' }),
    n: (date) => (date.getMonth() + 1).toString(),
    t: (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate().toString(),
    L: (date) => (isLeapYear(date.getFullYear()) ? 1 : 0).toString(),
    o: (date) => {
        const dateClone = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        dateClone.setDate(dateClone.getDate() + 4 - (dateClone.getDay() || 7));
        return dateClone.getFullYear().toString();
    },
    Y: (date) => date.getFullYear().toString(),
    y: (date) => date.toLocaleDateString(undefined, { year: '2-digit' }),
    a: (date) => date.getHours() >= 12 ? 'pm' : 'am',
    A: (date) => formats.a(date).toUpperCase(),
    B: (date) => {
        const utcHours = date.getUTCHours();
        const utcMinutes = date.getUTCMinutes();
        const utcSeconds = date.getUTCSeconds();
        const bmtHours = (utcHours + 1) % 24;
        const totalBMTSeconds = (bmtHours * 3600) + (utcMinutes * 60) + utcSeconds;
        const beats = Math.floor(totalBMTSeconds / 86.4);
        return `${beats.toString().padStart(3, '0')}`;
    },
    g: (date) => {
        const hours = date.getHours();
        return (hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours)).toString();
    },
    G: (date) => date.getHours().toString(),
    h: (date) => formats.g(date).padStart(2, '0'),
    H: (date) => formats.G(date).padStart(2, '0'),
    i: (date) => date.getMinutes().toString().padStart(2, '0'),
    s: (date) => date.getSeconds().toString().padStart(2, '0'),
    u: (date) => (date.getMilliseconds() * 1000).toString().padStart(6, '0'),
    v: (date) => date.getMilliseconds().toString().padStart(3, '0'),
    e: (date) => timezone,
    I: (date) => {
        const january = new Date(date.getFullYear(), 0, 1);
        const july = new Date(date.getFullYear(), 6, 1);
        return (date.getTimezoneOffset() < Math.max(january.getTimezoneOffset(), july.getTimezoneOffset()) ? 1 : 0).toString();
    },
    O: (date, hourMinuteSeparator = '') => {
        const offsetMinutes = date.getTimezoneOffset();
        const hours = Math.floor(Math.abs(offsetMinutes) / 60);
        const minutes = Math.abs(offsetMinutes) % 60;
        const sign = offsetMinutes > 0 ? "-" : "+";
        return `${sign}${hours.toString().padStart(2, '0')}${hourMinuteSeparator}${minutes.toString().padStart(2, '0')}`;
    },
    P: (date) => {
        return formats.O(date, ":");
    },
    p: (date) => {
        return date.getTimezoneOffset() === 0 ? 'Z' : formats.P(date);
    },
    T: (date) => {
        return formats.O(date);
    },
    Z: (date) => (-date.getTimezoneOffset() * 60).toString(),
    c: (date) => dateFormat(date, "Y-m-d\\TH:i:sP"),
    r: (date) => dateFormat(date, "D, d M Y H:i:s O"),
    U: (date) => {
        const millisecondsSinceEpoch = Date.now();
        const secondsSinceEpoch = Math.floor(millisecondsSinceEpoch / 1000);
        return secondsSinceEpoch.toString();
    }
};
function dateFormat(date, format) {
    const filteredFormat = filterFormatString(format);
    const formattedDate = filteredFormat.map((formatCharacter) => {
        if (Array.isArray(formatCharacter))
            return formatCharacter.join('');
        return formatCharacter in formats ? formats[formatCharacter](date) : formatCharacter;
    });
    return formattedDate.join('');
}

module.exports = dateFormat;
