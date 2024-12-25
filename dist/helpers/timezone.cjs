'use strict';

const timezones = [
    {
        "abbr": "DST",
        "offset": 720,
        "timezoneNames": [
            "Etc/GMT+12"
        ]
    },
    {
        "abbr": "U",
        "offset": 660,
        "timezoneNames": [
            "Etc/GMT+11",
            "Pacific/Midway",
            "Pacific/Niue",
            "Pacific/Pago_Pago"
        ]
    },
    {
        "abbr": "HST",
        "offset": 600,
        "timezoneNames": [
            "Etc/GMT+10",
            "Pacific/Honolulu",
            "Pacific/Johnston",
            "Pacific/Rarotonga",
            "Pacific/Tahiti"
        ]
    },
    {
        "abbr": "AKDT",
        "offset": 480,
        "timezoneNames": [
            "America/Anchorage",
            "America/Juneau",
            "America/Nome",
            "America/Sitka",
            "America/Yakutat"
        ]
    },
    {
        "abbr": "PDT",
        "offset": 420,
        "timezoneNames": [
            "America/Santa_Isabel"
        ]
    },
    {
        "abbr": "PDT",
        "offset": 420,
        "timezoneNames": [
            "America/Los_Angeles",
            "America/Tijuana",
            "America/Vancouver"
        ]
    },
    {
        "abbr": "PST",
        "offset": 480,
        "timezoneNames": [
            "America/Los_Angeles",
            "America/Tijuana",
            "America/Vancouver",
            "PST8PDT"
        ]
    },
    {
        "abbr": "UMST",
        "offset": 420,
        "timezoneNames": [
            "America/Creston",
            "America/Dawson",
            "America/Dawson_Creek",
            "America/Hermosillo",
            "America/Phoenix",
            "America/Whitehorse",
            "Etc/GMT+7"
        ]
    },
    {
        "abbr": "MDT",
        "offset": 360,
        "timezoneNames": [
            "America/Chihuahua",
            "America/Mazatlan"
        ]
    },
    {
        "abbr": "MDT",
        "offset": 360,
        "timezoneNames": [
            "America/Boise",
            "America/Cambridge_Bay",
            "America/Denver",
            "America/Edmonton",
            "America/Inuvik",
            "America/Ojinaga",
            "America/Yellowknife",
            "MST7MDT"
        ]
    },
    {
        "abbr": "CAST",
        "offset": 360,
        "timezoneNames": [
            "America/Belize",
            "America/Costa_Rica",
            "America/El_Salvador",
            "America/Guatemala",
            "America/Managua",
            "America/Tegucigalpa",
            "Etc/GMT+6",
            "Pacific/Galapagos"
        ]
    },
    {
        "abbr": "CDT",
        "offset": 300,
        "timezoneNames": [
            "America/Chicago",
            "America/Indiana/Knox",
            "America/Indiana/Tell_City",
            "America/Matamoros",
            "America/Menominee",
            "America/North_Dakota/Beulah",
            "America/North_Dakota/Center",
            "America/North_Dakota/New_Salem",
            "America/Rainy_River",
            "America/Rankin_Inlet",
            "America/Resolute",
            "America/Winnipeg",
            "CST6CDT"
        ]
    },
    {
        "abbr": "CDT",
        "offset": 300,
        "timezoneNames": [
            "America/Bahia_Banderas",
            "America/Cancun",
            "America/Merida",
            "America/Mexico_City",
            "America/Monterrey"
        ]
    },
    {
        "abbr": "CCST",
        "offset": 360,
        "timezoneNames": [
            "America/Regina",
            "America/Swift_Current"
        ]
    },
    {
        "abbr": "SPST",
        "offset": 300,
        "timezoneNames": [
            "America/Bogota",
            "America/Cayman",
            "America/Coral_Harbour",
            "America/Eirunepe",
            "America/Guayaquil",
            "America/Jamaica",
            "America/Lima",
            "America/Panama",
            "America/Rio_Branco",
            "Etc/GMT+5"
        ]
    },
    {
        "abbr": "EST",
        "offset": 300,
        "timezoneNames": [
            "America/Detroit",
            "America/Havana",
            "America/Indiana/Petersburg",
            "America/Indiana/Vincennes",
            "America/Indiana/Winamac",
            "America/Iqaluit",
            "America/Kentucky/Monticello",
            "America/Louisville",
            "America/Montreal",
            "America/Nassau",
            "America/New_York",
            "America/Nipigon",
            "America/Pangnirtung",
            "America/Port-au-Prince",
            "America/Thunder_Bay",
            "America/Toronto"
        ]
    },
    {
        "abbr": "EDT",
        "offset": 240,
        "timezoneNames": [
            "America/Detroit",
            "America/Havana",
            "America/Indiana/Petersburg",
            "America/Indiana/Vincennes",
            "America/Indiana/Winamac",
            "America/Iqaluit",
            "America/Kentucky/Monticello",
            "America/Louisville",
            "America/Montreal",
            "America/Nassau",
            "America/New_York",
            "America/Nipigon",
            "America/Pangnirtung",
            "America/Port-au-Prince",
            "America/Thunder_Bay",
            "America/Toronto"
        ]
    },
    {
        "abbr": "UEDT",
        "offset": 300,
        "timezoneNames": [
            "America/Indiana/Marengo",
            "America/Indiana/Vevay",
            "America/Indianapolis"
        ]
    },
    {
        "abbr": "VST",
        "offset": 270,
        "timezoneNames": [
            "America/Caracas"
        ]
    },
    {
        "abbr": "PYT",
        "offset": 240,
        "timezoneNames": [
            "America/Asuncion"
        ]
    },
    {
        "abbr": "ADT",
        "offset": 180,
        "timezoneNames": [
            "America/Glace_Bay",
            "America/Goose_Bay",
            "America/Halifax",
            "America/Moncton",
            "America/Thule",
            "Atlantic/Bermuda"
        ]
    },
    {
        "abbr": "CBST",
        "offset": 240,
        "timezoneNames": [
            "America/Campo_Grande",
            "America/Cuiaba"
        ]
    },
    {
        "abbr": "SWST",
        "offset": 240,
        "timezoneNames": [
            "America/Anguilla",
            "America/Antigua",
            "America/Aruba",
            "America/Barbados",
            "America/Blanc-Sablon",
            "America/Boa_Vista",
            "America/Curacao",
            "America/Dominica",
            "America/Grand_Turk",
            "America/Grenada",
            "America/Guadeloupe",
            "America/Guyana",
            "America/Kralendijk",
            "America/La_Paz",
            "America/Lower_Princes",
            "America/Manaus",
            "America/Marigot",
            "America/Martinique",
            "America/Montserrat",
            "America/Port_of_Spain",
            "America/Porto_Velho",
            "America/Puerto_Rico",
            "America/Santo_Domingo",
            "America/St_Barthelemy",
            "America/St_Kitts",
            "America/St_Lucia",
            "America/St_Thomas",
            "America/St_Vincent",
            "America/Tortola",
            "Etc/GMT+4"
        ]
    },
    {
        "abbr": "PSST",
        "offset": 240,
        "timezoneNames": [
            "America/Santiago",
            "Antarctica/Palmer"
        ]
    },
    {
        "abbr": "NDT",
        "offset": 150,
        "timezoneNames": [
            "America/St_Johns"
        ]
    },
    {
        "abbr": "ESAST",
        "offset": 180,
        "timezoneNames": [
            "America/Sao_Paulo"
        ]
    },
    {
        "abbr": "AST",
        "offset": 180,
        "timezoneNames": [
            "America/Argentina/Buenos_Aires",
            "America/Argentina/Catamarca",
            "America/Argentina/Cordoba",
            "America/Argentina/Jujuy",
            "America/Argentina/La_Rioja",
            "America/Argentina/Mendoza",
            "America/Argentina/Rio_Gallegos",
            "America/Argentina/Salta",
            "America/Argentina/San_Juan",
            "America/Argentina/San_Luis",
            "America/Argentina/Tucuman",
            "America/Argentina/Ushuaia",
            "America/Buenos_Aires",
            "America/Catamarca",
            "America/Cordoba",
            "America/Jujuy",
            "America/Mendoza"
        ]
    },
    {
        "abbr": "SEST",
        "offset": 180,
        "timezoneNames": [
            "America/Araguaina",
            "America/Belem",
            "America/Cayenne",
            "America/Fortaleza",
            "America/Maceio",
            "America/Paramaribo",
            "America/Recife",
            "America/Santarem",
            "Antarctica/Rothera",
            "Atlantic/Stanley",
            "Etc/GMT+3"
        ]
    },
    {
        "abbr": "GDT",
        "offset": 180,
        "timezoneNames": [
            "America/Godthab"
        ]
    },
    {
        "abbr": "MST",
        "offset": 180,
        "timezoneNames": [
            "America/Montevideo"
        ]
    },
    {
        "abbr": "BST",
        "offset": 180,
        "timezoneNames": [
            "America/Bahia"
        ]
    },
    {
        "abbr": "U",
        "offset": 120,
        "timezoneNames": [
            "America/Noronha",
            "Atlantic/South_Georgia",
            "Etc/GMT+2"
        ]
    },
    {
        "abbr": "MDT",
        "offset": 60,
        "timezoneNames": []
    },
    {
        "abbr": "ADT",
        "offset": 0,
        "timezoneNames": [
            "America/Scoresbysund",
            "Atlantic/Azores"
        ]
    },
    {
        "abbr": "CVST",
        "offset": 60,
        "timezoneNames": [
            "Atlantic/Cape_Verde",
            "Etc/GMT+1"
        ]
    },
    {
        "abbr": "MDT",
        "offset": -60,
        "timezoneNames": [
            "Africa/Casablanca",
            "Africa/El_Aaiun"
        ]
    },
    {
        "abbr": "UTC",
        "offset": 0,
        "timezoneNames": [
            "America/Danmarkshavn",
            "Etc/GMT"
        ]
    },
    {
        "abbr": "GMT",
        "offset": 0,
        "timezoneNames": [
            "Europe/Isle_of_Man",
            "Europe/Guernsey",
            "Europe/Jersey",
            "Europe/London"
        ]
    },
    {
        "abbr": "BST",
        "offset": -60,
        "timezoneNames": [
            "Europe/Isle_of_Man",
            "Europe/Guernsey",
            "Europe/Jersey",
            "Europe/London"
        ]
    },
    {
        "abbr": "GDT",
        "offset": -60,
        "timezoneNames": [
            "Atlantic/Canary",
            "Atlantic/Faeroe",
            "Atlantic/Madeira",
            "Europe/Dublin",
            "Europe/Lisbon"
        ]
    },
    {
        "abbr": "GST",
        "offset": 0,
        "timezoneNames": [
            "Africa/Abidjan",
            "Africa/Accra",
            "Africa/Bamako",
            "Africa/Banjul",
            "Africa/Bissau",
            "Africa/Conakry",
            "Africa/Dakar",
            "Africa/Freetown",
            "Africa/Lome",
            "Africa/Monrovia",
            "Africa/Nouakchott",
            "Africa/Ouagadougou",
            "Africa/Sao_Tome",
            "Atlantic/Reykjavik",
            "Atlantic/St_Helena"
        ]
    },
    {
        "abbr": "WEDT",
        "offset": -120,
        "timezoneNames": [
            "Arctic/Longyearbyen",
            "Europe/Amsterdam",
            "Europe/Andorra",
            "Europe/Berlin",
            "Europe/Busingen",
            "Europe/Gibraltar",
            "Europe/Luxembourg",
            "Europe/Malta",
            "Europe/Monaco",
            "Europe/Oslo",
            "Europe/Rome",
            "Europe/San_Marino",
            "Europe/Stockholm",
            "Europe/Vaduz",
            "Europe/Vatican",
            "Europe/Vienna",
            "Europe/Zurich"
        ]
    },
    {
        "abbr": "CEDT",
        "offset": -120,
        "timezoneNames": [
            "Europe/Belgrade",
            "Europe/Bratislava",
            "Europe/Budapest",
            "Europe/Ljubljana",
            "Europe/Podgorica",
            "Europe/Prague",
            "Europe/Tirane"
        ]
    },
    {
        "abbr": "RDT",
        "offset": -120,
        "timezoneNames": [
            "Africa/Ceuta",
            "Europe/Brussels",
            "Europe/Copenhagen",
            "Europe/Madrid",
            "Europe/Paris"
        ]
    },
    {
        "abbr": "CEDT",
        "offset": -120,
        "timezoneNames": [
            "Europe/Sarajevo",
            "Europe/Skopje",
            "Europe/Warsaw",
            "Europe/Zagreb"
        ]
    },
    {
        "abbr": "WCAST",
        "offset": -60,
        "timezoneNames": [
            "Africa/Algiers",
            "Africa/Bangui",
            "Africa/Brazzaville",
            "Africa/Douala",
            "Africa/Kinshasa",
            "Africa/Lagos",
            "Africa/Libreville",
            "Africa/Luanda",
            "Africa/Malabo",
            "Africa/Ndjamena",
            "Africa/Niamey",
            "Africa/Porto-Novo",
            "Africa/Tunis",
            "Etc/GMT-1"
        ]
    },
    {
        "abbr": "NST",
        "offset": -60,
        "timezoneNames": [
            "Africa/Windhoek"
        ]
    },
    {
        "abbr": "GDT",
        "offset": -180,
        "timezoneNames": [
            "Asia/Nicosia",
            "Europe/Athens",
            "Europe/Bucharest",
            "Europe/Chisinau"
        ]
    },
    {
        "abbr": "MEDT",
        "offset": -180,
        "timezoneNames": [
            "Asia/Beirut"
        ]
    },
    {
        "abbr": "EST",
        "offset": -120,
        "timezoneNames": [
            "Africa/Cairo"
        ]
    },
    {
        "abbr": "SDT",
        "offset": -180,
        "timezoneNames": [
            "Asia/Damascus"
        ]
    },
    {
        "abbr": "EEDT",
        "offset": -180,
        "timezoneNames": [
            "Asia/Nicosia",
            "Europe/Athens",
            "Europe/Bucharest",
            "Europe/Chisinau",
            "Europe/Helsinki",
            "Europe/Kyiv",
            "Europe/Mariehamn",
            "Europe/Nicosia",
            "Europe/Riga",
            "Europe/Sofia",
            "Europe/Tallinn",
            "Europe/Uzhhorod",
            "Europe/Vilnius",
            "Europe/Zaporizhzhia"
        ]
    },
    {
        "abbr": "SAST",
        "offset": -120,
        "timezoneNames": [
            "Africa/Blantyre",
            "Africa/Bujumbura",
            "Africa/Gaborone",
            "Africa/Harare",
            "Africa/Johannesburg",
            "Africa/Kigali",
            "Africa/Lubumbashi",
            "Africa/Lusaka",
            "Africa/Maputo",
            "Africa/Maseru",
            "Africa/Mbabane",
            "Etc/GMT-2"
        ]
    },
    {
        "abbr": "FDT",
        "offset": -180,
        "timezoneNames": [
            "Europe/Helsinki",
            "Europe/Kyiv",
            "Europe/Mariehamn",
            "Europe/Riga",
            "Europe/Sofia",
            "Europe/Tallinn",
            "Europe/Uzhhorod",
            "Europe/Vilnius",
            "Europe/Zaporizhzhia"
        ]
    },
    {
        "abbr": "TDT",
        "offset": -180,
        "timezoneNames": [
            "Europe/Istanbul"
        ]
    },
    {
        "abbr": "JDT",
        "offset": -180,
        "timezoneNames": [
            "Asia/Jerusalem"
        ]
    },
    {
        "abbr": "LST",
        "offset": -120,
        "timezoneNames": [
            "Africa/Tripoli"
        ]
    },
    {
        "abbr": "JST",
        "offset": -180,
        "timezoneNames": [
            "Asia/Amman"
        ]
    },
    {
        "abbr": "AST",
        "offset": -180,
        "timezoneNames": [
            "Asia/Baghdad"
        ]
    },
    {
        "abbr": "KST",
        "offset": -180,
        "timezoneNames": [
            "Europe/Kaliningrad"
        ]
    },
    {
        "abbr": "AST",
        "offset": -180,
        "timezoneNames": [
            "Asia/Aden",
            "Asia/Bahrain",
            "Asia/Kuwait",
            "Asia/Qatar",
            "Asia/Riyadh"
        ]
    },
    {
        "abbr": "EAST",
        "offset": -180,
        "timezoneNames": [
            "Africa/Addis_Ababa",
            "Africa/Asmera",
            "Africa/Dar_es_Salaam",
            "Africa/Djibouti",
            "Africa/Juba",
            "Africa/Kampala",
            "Africa/Khartoum",
            "Africa/Mogadishu",
            "Africa/Nairobi",
            "Antarctica/Syowa",
            "Etc/GMT-3",
            "Indian/Antananarivo",
            "Indian/Comoro",
            "Indian/Mayotte"
        ]
    },
    {
        "abbr": "MSK",
        "offset": -180,
        "timezoneNames": [
            "Europe/Kirov",
            "Europe/Moscow",
            "Europe/Simferopol",
            "Europe/Volgograd",
            "Europe/Minsk"
        ]
    },
    {
        "abbr": "SAMT",
        "offset": -240,
        "timezoneNames": [
            "Europe/Astrakhan",
            "Europe/Samara",
            "Europe/Ulyanovsk"
        ]
    },
    {
        "abbr": "IDT",
        "offset": -270,
        "timezoneNames": [
            "Asia/Tehran"
        ]
    },
    {
        "abbr": "AST",
        "offset": -240,
        "timezoneNames": [
            "Asia/Dubai",
            "Asia/Muscat",
            "Etc/GMT-4"
        ]
    },
    {
        "abbr": "ADT",
        "offset": -300,
        "timezoneNames": [
            "Asia/Baku"
        ]
    },
    {
        "abbr": "MST",
        "offset": -240,
        "timezoneNames": [
            "Indian/Mahe",
            "Indian/Mauritius",
            "Indian/Reunion"
        ]
    },
    {
        "abbr": "GET",
        "offset": -240,
        "timezoneNames": [
            "Asia/Tbilisi"
        ]
    },
    {
        "abbr": "CST",
        "offset": -240,
        "timezoneNames": [
            "Asia/Yerevan"
        ]
    },
    {
        "abbr": "AST",
        "offset": -270,
        "timezoneNames": [
            "Asia/Kabul"
        ]
    },
    {
        "abbr": "WAST",
        "offset": -300,
        "timezoneNames": [
            "Antarctica/Mawson",
            "Asia/Aqtau",
            "Asia/Aqtobe",
            "Asia/Ashgabat",
            "Asia/Dushanbe",
            "Asia/Oral",
            "Asia/Samarkand",
            "Asia/Tashkent",
            "Etc/GMT-5",
            "Indian/Kerguelen",
            "Indian/Maldives"
        ]
    },
    {
        "abbr": "YEKT",
        "offset": -300,
        "timezoneNames": [
            "Asia/Yekaterinburg"
        ]
    },
    {
        "abbr": "PKT",
        "offset": -300,
        "timezoneNames": [
            "Asia/Karachi"
        ]
    },
    {
        "abbr": "IST",
        "offset": -330,
        "timezoneNames": [
            "Asia/Kolkata",
            "Asia/Calcutta"
        ]
    },
    {
        "abbr": "SLST",
        "offset": -330,
        "timezoneNames": [
            "Asia/Colombo"
        ]
    },
    {
        "abbr": "NST",
        "offset": -345,
        "timezoneNames": [
            "Asia/Kathmandu"
        ]
    },
    {
        "abbr": "CAST",
        "offset": -360,
        "timezoneNames": [
            "Antarctica/Vostok",
            "Asia/Almaty",
            "Asia/Bishkek",
            "Asia/Qyzylorda",
            "Asia/Urumqi",
            "Etc/GMT-6",
            "Indian/Chagos"
        ]
    },
    {
        "abbr": "BST",
        "offset": -360,
        "timezoneNames": [
            "Asia/Dhaka",
            "Asia/Thimphu"
        ]
    },
    {
        "abbr": "MST",
        "offset": -390,
        "timezoneNames": [
            "Asia/Rangoon",
            "Indian/Cocos"
        ]
    },
    {
        "abbr": "SAST",
        "offset": -420,
        "timezoneNames": [
            "Antarctica/Davis",
            "Asia/Bangkok",
            "Asia/Hovd",
            "Asia/Jakarta",
            "Asia/Phnom_Penh",
            "Asia/Pontianak",
            "Asia/Saigon",
            "Asia/Vientiane",
            "Etc/GMT-7",
            "Indian/Christmas"
        ]
    },
    {
        "abbr": "NCAST",
        "offset": -420,
        "timezoneNames": [
            "Asia/Novokuznetsk",
            "Asia/Novosibirsk",
            "Asia/Omsk"
        ]
    },
    {
        "abbr": "CST",
        "offset": -480,
        "timezoneNames": [
            "Asia/Hong_Kong",
            "Asia/Macau",
            "Asia/Shanghai"
        ]
    },
    {
        "abbr": "NAST",
        "offset": -480,
        "timezoneNames": [
            "Asia/Krasnoyarsk"
        ]
    },
    {
        "abbr": "MPST",
        "offset": -480,
        "timezoneNames": [
            "Asia/Brunei",
            "Asia/Kuala_Lumpur",
            "Asia/Kuching",
            "Asia/Makassar",
            "Asia/Manila",
            "Asia/Singapore",
            "Etc/GMT-8"
        ]
    },
    {
        "abbr": "WAST",
        "offset": -480,
        "timezoneNames": [
            "Antarctica/Casey",
            "Australia/Perth"
        ]
    },
    {
        "abbr": "TST",
        "offset": -480,
        "timezoneNames": [
            "Asia/Taipei"
        ]
    },
    {
        "abbr": "UST",
        "offset": -480,
        "timezoneNames": [
            "Asia/Choibalsan",
            "Asia/Ulaanbaatar"
        ]
    },
    {
        "abbr": "NAEST",
        "offset": -480,
        "timezoneNames": [
            "Asia/Irkutsk"
        ]
    },
    {
        "abbr": "JST",
        "offset": -540,
        "timezoneNames": [
            "Asia/Dili",
            "Asia/Jayapura",
            "Asia/Tokyo",
            "Etc/GMT-9",
            "Pacific/Palau"
        ]
    },
    {
        "abbr": "KST",
        "offset": -540,
        "timezoneNames": [
            "Asia/Pyongyang",
            "Asia/Seoul"
        ]
    },
    {
        "abbr": "CAST",
        "offset": -570,
        "timezoneNames": [
            "Australia/Adelaide",
            "Australia/Broken_Hill"
        ]
    },
    {
        "abbr": "ACST",
        "offset": -570,
        "timezoneNames": [
            "Australia/Darwin"
        ]
    },
    {
        "abbr": "EAST",
        "offset": -600,
        "timezoneNames": [
            "Australia/Brisbane",
            "Australia/Lindeman"
        ]
    },
    {
        "abbr": "AEST",
        "offset": -600,
        "timezoneNames": [
            "Australia/Melbourne",
            "Australia/Sydney"
        ]
    },
    {
        "abbr": "WPST",
        "offset": -600,
        "timezoneNames": [
            "Antarctica/DumontDUrville",
            "Etc/GMT-10",
            "Pacific/Guam",
            "Pacific/Port_Moresby",
            "Pacific/Saipan",
            "Pacific/Truk"
        ]
    },
    {
        "abbr": "TST",
        "offset": -600,
        "timezoneNames": [
            "Australia/Currie",
            "Australia/Hobart"
        ]
    },
    {
        "abbr": "YST",
        "offset": -540,
        "timezoneNames": [
            "Asia/Chita",
            "Asia/Khandyga",
            "Asia/Yakutsk"
        ]
    },
    {
        "abbr": "CPST",
        "offset": -660,
        "timezoneNames": [
            "Antarctica/Macquarie",
            "Etc/GMT-11",
            "Pacific/Efate",
            "Pacific/Guadalcanal",
            "Pacific/Kosrae",
            "Pacific/Noumea",
            "Pacific/Ponape"
        ]
    },
    {
        "abbr": "VST",
        "offset": -660,
        "timezoneNames": [
            "Asia/Sakhalin",
            "Asia/Ust-Nera",
            "Asia/Vladivostok"
        ]
    },
    {
        "abbr": "NZST",
        "offset": -720,
        "timezoneNames": [
            "Antarctica/McMurdo",
            "Pacific/Auckland"
        ]
    },
    {
        "abbr": "U",
        "offset": -720,
        "timezoneNames": [
            "Etc/GMT-12",
            "Pacific/Funafuti",
            "Pacific/Kwajalein",
            "Pacific/Majuro",
            "Pacific/Nauru",
            "Pacific/Tarawa",
            "Pacific/Wake",
            "Pacific/Wallis"
        ]
    },
    {
        "abbr": "FST",
        "offset": -720,
        "timezoneNames": [
            "Pacific/Fiji"
        ]
    },
    {
        "abbr": "MST",
        "offset": -720,
        "timezoneNames": [
            "Asia/Anadyr",
            "Asia/Kamchatka",
            "Asia/Magadan",
            "Asia/Srednekolymsk"
        ]
    },
    {
        "abbr": "KDT",
        "offset": -780,
        "timezoneNames": [
            "Asia/Kamchatka"
        ]
    },
    {
        "abbr": "TST",
        "offset": -780,
        "timezoneNames": [
            "Etc/GMT-13",
            "Pacific/Enderbury",
            "Pacific/Fakaofo",
            "Pacific/Tongatapu"
        ]
    },
    {
        "abbr": "SST",
        "offset": -780,
        "timezoneNames": [
            "Pacific/Apia"
        ]
    }
];
function getTimezoneByOffset(offset) {
    return timezones.find(timezone => timezone.offset === offset);
}
function getTimezoneByName(name) {
    return timezones.find(timezone => {
        return timezone.timezoneNames.map(name => name.toLocaleLowerCase()).includes(name.toLocaleLowerCase());
    });
}

exports.getTimezoneByName = getTimezoneByName;
exports.getTimezoneByOffset = getTimezoneByOffset;
