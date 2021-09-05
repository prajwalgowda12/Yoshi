/*
white space
identfiers
operators
paranthesis
brackets
special characters like ~,:_
looping statment keyword
in keyword
condition statement keywords
class keyword
literals
comment
*/
const moo = require('moo');
let lexer = moo.compile(
    {
        
        ws:      /[ \t]+/,
        comment: /\/\/.*?$/,
        numbers: {match: /0|[1-9][0-9]*(?:\.[0-9]+)?/, value : Number},
        string:  /"(?:\\["\\]|[^\n"\\])*"/,
        bool_literal: ["true", "false"],
        lparen:  '(',
        rparen:  ')',
        tild:    '~',
        comma: ",",
        keyword: ['while','for','if', 'else', 'null','display', 'praju'],
        operator: /(?:==)|(?:>=)|(?:<=)|(?:!=)|[\+\-\*\/\>\<\.\%]/,
        identifier: /[a-zA-Z][a-zA-Z0-9_]*/,
        assignmentOp: "=",
        NL:  { match: /[\r\n]+|[\n]+|[\r]+/, lineBreaks: true },
        
    }
);

/*
lexer.reset('while (10) cows\rmoo\n')
console.log(lexer.next()); // -> { type: 'keyword', value: 'while' }
console.log(lexer.next()); // -> { type: 'WS', value: ' ' }
console.log(lexer.next()); // -> { type: 'lparen', value: '(' }
console.log(lexer.next()); // -> { type: 'number', value: '10' }
console.log(lexer.next());
console.log(lexer.next());
console.log(lexer.next());
console.log(lexer.next());
console.log(lexer.next());
console.log(lexer.next());

// ...


const fs = require("mz/fs").promises;

async function main() {
    const code = (await fs.readFile("pilot.pg")).toString();
    lexer.reset(code);
    while (true) {
     const token = lexer.next();
        if (!token) {
            break;
        } else {
            console.log(token);
        }
    }
}

main().catch(err => console.log(err.stack));
*/
module.exports = lexer;