const nearley = require("nearley");
const grammar = require("./grammar.js");
const fs = require("fs").promises; 
const util = require("util");
const path = require("path");

async function main() {
    const filename = process.argv[2];
    if(!filename)
    {
        console.log("plz provide a file name");
        return;
    }
    const code = (await fs.readFile(filename)).toString();
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

parser.feed(code);

if(parser.results.length > 1)

{
    console.warn("The parse tree generates multiple results");
   const astFilename = path.basename(filename) + ".ast";
    const ast = util.inspect(parser.results, {depth: 10});
    await fs.writeFile(astFilename, JSON.stringify(ast, null, "  "));
    console.log(`Wrote ${astFilename}.`);
}
else {
    const astFilename = path.basename(filename) + ".ast";
    const ast = util.inspect(parser.results[0], {depth: 10});
    await fs.writeFile(astFilename, JSON.stringify(ast, null, "  "));
    console.log(`Wrote ${astFilename}.`);
}

}

main().catch(err => console.log(err.stack));