module.exports = function toReadable (number) {
    if (!number) return "zero";
    const first = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const units = number.toString().split("").reverse();
    const end = first[+`${units[1]}${units[0]}`] ?? `${tens[units[1]] ?? ""}` + ((!!+units[1] && !!+units[0]) ? " " : "") + `${first[units[0]]}`;
    return `${units[2] ? `${first[units[2]]} hundred` + (end ? " " : "") : ""}${end}`;
}
