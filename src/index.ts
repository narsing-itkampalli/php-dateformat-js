import filterFormatString from "./helpers/filter-format-string.js";
// import { getTimezoneByName } from "./helpers/timezone.js";
import getOrdinalSuffix from "./helpers/get-ordinal-suffix.js";
import dayOfYear from "./helpers/day-of-year.js";
import isLeapYear from "./helpers/is-leap-year.js";

const timezone = (() => {
    try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch (error:any) {
        console.error("Error resolving timezone:", error.message);
        return ""
    }
})();

const formats = {
    // Day of the month, 2 digits with leading zeros
    // Example: 01 to 31
    d: (date: Date) => date.getDate().toString().padStart(2, '0'),

    // A textual representation of a day, three letters
    // Example: Mon through Sun
    D: (date: Date) => date.toLocaleDateString(undefined, { weekday: 'short' }),

    // Day of the month without leading zeros
    // Example: 1 to 31
    j: (date: Date) => date.getDate().toString(),

    // A full textual representation of the day of the week
    // Example: Sunday through Saturday
    l: (date: Date) => date.toLocaleDateString(undefined, { weekday: 'long' }),

    // ISO 8601 numeric representation of the day of the week
    // Example: 1 (for Monday) through 7 (for Sunday)
    N: (date: Date) => (date.getDay() || 7).toString(),

    // English ordinal suffix for the day of the month, 2 characters
    // Example: st, nd, rd or th. Works well with j
    S: (date: Date) => getOrdinalSuffix(date.getDate()),

    // Numeric representation of the day of the week
    // Example: 0 (for Sunday) through 6 (for Saturday)
    w: (date: Date) => date.getDay().toString(),

    // 	The day of the year (starting from 0)
    // Example: 0 through 365
    z: (date: Date) => dayOfYear(date).toString(),

    // ISO 8601 week number of year, weeks starting on Monday
    // Example: 42 (the 42nd week in the year)
    W: (date: Date) => {
        const yearStart = new Date(date.getFullYear(), 0, 1);
        const yearStartWeekDay = yearStart.getDay() || 7; // Get weekday (ISO format, Monday = 1, Sunday = 7)
        const numberOfDaysBeforeFirstMondayOfYear = yearStartWeekDay === 1 ? 0 : 8 - yearStartWeekDay;

        yearStart.setDate(yearStart.getDate() + numberOfDaysBeforeFirstMondayOfYear);

        const diffInMs = date.getTime() - yearStart.getTime();
        const millisecondsInADay = (1000 * 60 * 60 * 24);
        const diffInDays = Math.floor(diffInMs / millisecondsInADay) + 1;

        // Week 1 begins on the first Monday of the year (or contains January 4th).
        return (Math.ceil(diffInDays / 7) + (numberOfDaysBeforeFirstMondayOfYear - 4 >= 0 ? 1 : 0)).toString().padStart(2, '0');
    },

    // A full textual representation of a month, such as January or March
    // Example: January through December
    F: (date: Date) => date.toLocaleDateString(undefined, { month: 'long' }),

    // Numeric representation of a month, with leading zeros
    // Example: 01 through 12
    m: (date: Date) => String(date.getMonth() + 1).padStart(2, '0'),

    // A short textual representation of a month, three letters
    // Example: Jan through Dec
    M: (date: Date) => date.toLocaleDateString(undefined, { month: 'short' }),

    // Numeric representation of a month, without leading zeros
    // Example: 1 through 12
    n: (date: Date) => (date.getMonth() + 1).toString(),

    // Number of days in the given month
    // 28 through 31
    t: (date: Date) => new Date(date.getFullYear(), date.getMonth()+1, 0).getDate().toString(),


    // ================================= Year =================================

    // Whether it's a leap year
    // 1 if it is a leap year, 0 otherwise.
    L: (date: Date) => (isLeapYear(date.getFullYear()) ? 1 : 0).toString(),

    // ISO 8601 week-numbering year. This has the same value as Y, except that if the ISO week number (W) belongs to the previous or next year, that year is used instead.
    // Examples: 1999 or 2003
    o: (date: Date) => {
        const dateClone = new Date(date.getFullYear(), date.getMonth(), date.getDate());

        dateClone.setDate(dateClone.getDate() + 4 - (dateClone.getDay() || 7));

        return dateClone.getFullYear().toString();
    },

    // A full numeric representation of a year, at least 4 digits, with - for years BCE.
    // Examples: -0055, 0787, 1999, 2003, 10191
    Y: (date: Date) => date.getFullYear().toString(),

    // A two digit representation of a year
    // Examples: 99 or 03
    y: (date: Date) => date.toLocaleDateString(undefined, { year: '2-digit' }),


    // ============================== Time ============================

    // Lowercase Ante meridiem and Post meridiem
    // Example: am or pm
    a: (date: Date) => date.getHours() >= 12 ? 'pm' : 'am',

    // Uppercase Ante meridiem and Post meridiem
    // Example: AM or PM
    A: (date: Date) => formats.a(date).toUpperCase(),

    // Swatch Internet time
    // 000 through 999
    B: (date: Date) => {
        const utcHours = date.getUTCHours();
        const utcMinutes = date.getUTCMinutes();
        const utcSeconds = date.getUTCSeconds();

        // Convert to BMT (UTC+1)
        const bmtHours = (utcHours + 1) % 24;

        // Calculate total seconds since the start of the day in BMT
        const totalBMTSeconds = (bmtHours * 3600) + (utcMinutes * 60) + utcSeconds;

        // Convert total seconds to beats (1 beat = 86.4 seconds)
        const beats = Math.floor(totalBMTSeconds / 86.4);

        // Return beats as a three-digit string (e.g., "005", "123")
        return `${beats.toString().padStart(3, '0')}`;
    },

    // 12-hour format of an hour without leading zeros
    // Example: 1 through 12
    g: (date: Date) => {
        const hours = date.getHours()
        return (hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours)).toString()
    },

    // 24-hour format of an hour without leading zeros
    // Example: 0 through 23
    G: (date: Date) => date.getHours().toString(),

    // 	12-hour format of an hour with leading zeros
    // Example: 01 through 12
    h: (date: Date) => formats.g(date).padStart(2, '0'),

    // 24-hour format of an hour with leading zeros
    // Example: 00 through 23
    H: (date: Date) => formats.G(date).padStart(2, '0'),

    // Minutes with leading zeros
    // Example: 00 to 59
    i: (date: Date) => date.getMinutes().toString().padStart(2, '0'),

    // 	Seconds with leading zeros
    // 00 through 59
    s: (date: Date) => date.getSeconds().toString().padStart(2, '0'),

    // Microseconds.
    // Example: 654321
    u: (date: Date) => (date.getMilliseconds() * 1000).toString().padStart(6, '0'),

    // Milliseconds.
    // Example: 654
    v: (date: Date) => date.getMilliseconds().toString().padStart(3, '0'), // Later

    // Timezone identifier
    // Examples: UTC, GMT, Atlantic/Azores
    e: (date: Date) => timezone,

    // Whether or not the date is in daylight saving time
    // Example: 1 if Daylight Saving Time, 0 otherwise.
    I: (date: Date) => {
        // Get the offset in minutes for January (non-DST) and July (DST)
        const january = new Date(date.getFullYear(), 0, 1); // January 1st of the same year
        const july = new Date(date.getFullYear(), 6, 1);    // July 1st of the same year

        // Compare the time zone offset of the provided date to January and July
        return (date.getTimezoneOffset() < Math.max(january.getTimezoneOffset(), july.getTimezoneOffset()) ? 1 : 0).toString();
    },

    // Difference to Greenwich time (GMT) without colon between hours and minutes
    // Example: +0200
    O: (date: Date, hourMinuteSeparator:string = '') => {
        const offsetMinutes = date.getTimezoneOffset();

        // Calculate absolute hours and minutes
        const hours = Math.floor(Math.abs(offsetMinutes) / 60);
        const minutes = Math.abs(offsetMinutes) % 60;

        // Determine the sign based on whether the offset is positive or negative
        const sign = offsetMinutes > 0 ? "-" : "+";

        return `${sign}${hours.toString().padStart(2, '0')}${hourMinuteSeparator}${minutes.toString().padStart(2, '0')}`;
    },

    // Difference to Greenwich time (GMT) with colon between hours and minutes
    // Example: +02:00
    P: (date: Date) => {
        return formats.O(date, ":");
    },

    // The same as P, but returns Z instead of +00:00 (available as of PHP 8.0.0)
    // Examples: Z or +02:00
    p: (date: Date) => {
        return date.getTimezoneOffset() === 0 ? 'Z' : formats.P(date);
    },

    // Timezone abbreviation, if known; otherwise the GMT offset.
    // Examples: EST, MDT, +05
    T: (date: Date) => {
        // const timezoneInfo = getTimezoneByName(timezone);
        // if(timezoneInfo && timezoneInfo.abbr) return timezoneInfo.abbr;
        return formats.O(date);
    },

    // Timezone offset in seconds. The offset for timezones west of UTC is always negative, and for those east of UTC is always positive.
    // Example: -43200 through 50400
    Z: (date: Date) => (-date.getTimezoneOffset() * 60).toString(),

    // ISO 8601 date
    // Example: 2004-02-12T15:19:21+00:00
    c: (date: Date) => dateFormat(date, "Y-m-d\\TH:i:sP"),

    // » RFC 2822/» RFC 5322 formatted date
    // Example: Thu, 21 Dec 2000 16:01:07 +0200
    r: (date: Date) => dateFormat(date, "D, d M Y H:i:s O"),

    // Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT)
    U: (date: Date) => {
        const millisecondsSinceEpoch = Date.now();

        // Convert milliseconds to seconds
        const secondsSinceEpoch = Math.floor(millisecondsSinceEpoch / 1000);

        return secondsSinceEpoch.toString();
    }
}

export default function dateFormat(date:Date, format:string):string {
    const filteredFormat = filterFormatString(format);

    // console.log(filteredFormat);

    const formattedDate = filteredFormat.map((formatCharacter) => {
        // `filterFormatString` function returns escaped characters in array
        if(Array.isArray(formatCharacter)) return formatCharacter.join('');
        return formatCharacter in formats ? formats[formatCharacter as keyof typeof formats](date) : formatCharacter;
    });

    return formattedDate.join('');
}