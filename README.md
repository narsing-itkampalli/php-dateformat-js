# php-js-dateformat

### A JavaScript Library for PHP-Style Date Formatting
`php-js-dateformat` is a lightweight and powerful JavaScript library that mimics PHP's `date_format()` function, enabling seamless date formatting with PHP-style format strings.

## Features
- **PHP-Style Formatting:** Format dates using familiar strings like `Y-m-d` and `H:i:s`.
- **Lightweight:** Designed to be easy to integrate into any JavaScript project.
- **Escape Support:** Handle escape characters and character sets effortlessly.

## Installation
### Using npm:
```bash
npm install php-js-dateformat
```

## Basic Usage
Here’s how you can start using `php-js-dateformat`
### Formatting Dates
```js
import dateFormat from 'php-js-dateformat';  

const date = new Date();  

console.log(dateFormat(date, 'Y-m-d H:i:s'));  
// Output: 2024-11-23 15:30:45  
```
### Escaping Characters
- **Single Characters:** Use a backslash (`\`) to escape characters.
    ```js
    console.log(dateFormat(date, '\\Y Y-m-d H:i:s'));  
    // Output: Y 2024-11-23 15:30:45  
    ```
- **Character Sets:** Use curly braces ({}) to escape a set of characters.
    ```js
    console.log(dateFormat(date, '{Date:} Y-m-d H:i:s'));  
    // Output: Date: 2024-11-23 15:30:45
    ```
## Supported Format Characters
`php-js-dateformat` supports most of the format characters found in [PHP's date format function](https://www.php.net/manual/en/datetime.format.php), including:
- Year: `Y`, `y`
- Month: `m`, `n`, `F`, `M`
- Day: `d`, `j`, `l`, `D`
- Hour: `H`, `h`, `G`, `g`
- Minute: `i`
- Second: `s`
- And more...

For a full list, refer to the [PHP Documentation](https://www.php.net/manual/en/datetime.format.php).

## Unsupported Parameters
Due to limitations in the browser's Date API, some parameters behave differently:
- **Timezone-related Parameters:** `O`, `P`, `p`, and `T` always return the local timezone.
- **Microseconds (`v`):** Always returns `milliseconds * 1000` as true microseconds are not supported.
- **`T` (Timezone Abbreviation):** Returns the same as `O`. For actual timezone abbreviations, use:
    ```js
    import { getTimezoneByName } from 'php-js-dateformat/timezone';  

    const timezoneInfo = getTimezoneByName('Asia/Calcutta');  
    console.log(timezoneInfo?.abbr); // Output: IST (or `undefined`) 
    ```
## Contributing
Contributions, issues, and feature requests are welcome!
## License
`php-js-dateformat` is open-source and licensed under the [MIT License](./LICENSE).