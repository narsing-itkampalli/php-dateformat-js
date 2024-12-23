export default function dayOfYear(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const diffInMs = date.getTime() - startOfYear.getTime();
    const millisecondsInADay = (1000 * 60 * 60 * 24);
    return Math.floor(diffInMs / millisecondsInADay);
}
