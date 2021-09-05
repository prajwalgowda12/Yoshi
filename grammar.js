// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const mylexer =   require("./lexer");
var grammar = {
    Lexer: mylexer,
    ParserRules: [
    {"name": "program", "symbols": ["statements"], "postprocess": 
        (data) => {
            return{
                type: "program",
                body: data[0]
            };
        }
        },
    {"name": "statements", "symbols": [], "postprocess": 
        () => []
            },
    {"name": "statements", "symbols": ["statement"], "postprocess": 
        (data) => [data[0]]
            },
    {"name": "statements", "symbols": ["statement", {"literal":"\r\n"}, "statements"], "postprocess": 
        (data) => [data[0], ...data[2]]
            },
    {"name": "statement", "symbols": ["assignment"], "postprocess": id},
    {"name": "statement", "symbols": ["function_call"], "postprocess": id},
    {"name": "assignment", "symbols": [(mylexer.has("identifier") ? {type: "identifier"} : identifier), "_", (mylexer.has("assignmentOp") ? {type: "assignmentOp"} : assignmentOp), "_", "literal"], "postprocess": 
        (data) => {
            return {
                type: "assignment",
                var_name: data[0],
                value: data[4]
            }
        }
            },
    {"name": "assignment", "symbols": [(mylexer.has("identifier") ? {type: "identifier"} : identifier), (mylexer.has("assignmentOp") ? {type: "assignmentOp"} : assignmentOp), "literal"], "postprocess": 
        (data) => {
            return {
                type: "assignment",
                var_name: data[0],
                value: data[2]
            }
        }
            },
    {"name": "assignment", "symbols": [(mylexer.has("identifier") ? {type: "identifier"} : identifier), (mylexer.has("assignmentOp") ? {type: "assignmentOp"} : assignmentOp), "_", "literal"], "postprocess": 
        (data) => {
            return {
                type: "assignment",
                var_name: data[0],
                value: data[3]
            }
        }
            },
    {"name": "assignment", "symbols": [(mylexer.has("identifier") ? {type: "identifier"} : identifier), "_", (mylexer.has("assignmentOp") ? {type: "assignmentOp"} : assignmentOp), "literal"], "postprocess": 
        (data) => {
            return {
                type: "assignment",
                var_name: data[0],
                value: data[3]
            }
        }
            },
    {"name": "literal", "symbols": [(mylexer.has("number") ? {type: "number"} : number)], "postprocess": id},
    {"name": "literal", "symbols": [(mylexer.has("string") ? {type: "string"} : string)], "postprocess": id},
    {"name": "literal", "symbols": [(mylexer.has("bool_literal") ? {type: "bool_literal"} : bool_literal)], "postprocess": id},
    {"name": "__", "symbols": [(mylexer.has("ws") ? {type: "ws"} : ws)]},
    {"name": "_", "symbols": []},
    {"name": "_", "symbols": ["__"]},
    {"name": "function_call", "symbols": [(mylexer.has("identifier") ? {type: "identifier"} : identifier), "_", {"literal":"("}, "_", "parameter_list", "_", {"literal":")"}], "postprocess": 
        (data) => {
            return {
                type: "function_call",
                var_name: data[0],
                parameters: data[4]
        
            }
        }
            },
    {"name": "parameter_list", "symbols": ["expression"], "postprocess": 
        (data) => {
            return [data[0]] 
        }  
            },
    {"name": "parameter_list", "symbols": ["expression", {"literal":","}, "parameter_list"], "postprocess": 
        (data) => {
            return [data[0], ...data[2]]
        }
            },
    {"name": "parameter_list", "symbols": [], "postprocess": 
        () => []
            },
    {"name": "expression", "symbols": [(mylexer.has("identifier") ? {type: "identifier"} : identifier)], "postprocess": id},
    {"name": "expression", "symbols": ["literal"], "postprocess": id},
    {"name": "literal", "symbols": [(mylexer.has("numbers") ? {type: "numbers"} : numbers)], "postprocess": id},
    {"name": "literal", "symbols": [(mylexer.has("string") ? {type: "string"} : string)], "postprocess": id},
    {"name": "literal", "symbols": [(mylexer.has("bool_literal") ? {type: "bool_literal"} : bool_literal)], "postprocess": id}
]
  , ParserStart: "program"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
