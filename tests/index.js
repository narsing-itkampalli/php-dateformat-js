import dateFormat from '../dist/index.js';

console.log(dateFormat(new Date(), `
    \\d => d
    \\D => D
    \\j => j
    \\l => l
    \\N => N
    \\S => S
    \\w => w
    \\z => z
    \\W => W
    \\F => F
    \\m => m
    \\M => M
    \\n => n
    \\t => t
    \\L => L
    \\o => o
    \\Y => Y
    \\y => y
    \\a => a
    \\A => A
    \\B => B
    \\g => g
    \\G => G
    \\h => h
    \\H => H
    \\i => i
    \\s => s
    \\u => u
    \\v => v
    \\e => e
    \\I => I
    \\O => O
    \\P => P
    \\p => p
    \\T => T
    \\Z => Z
    \\c => c
    \\r => r
    \\U => U
`));


