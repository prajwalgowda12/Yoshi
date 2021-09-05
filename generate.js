const fs = require("fs").promises; 

async function main(){
    const filename = process.argv[2];
    if (!filename){
        console.log("Please provide a file name");
        return;
    }
    const astcode = (await fs.readFile(filename)).toString();
    const ast = JSON.parse(astcode);
    const jsCode = evaluate(ast);
    console.log(ast);
    console.log(jsCode);

}
function evaluate(ast) {
    if (ast.type === "'program'") {
        return 0;
    }

}



main().catch(err => console.log(err.stack)); 