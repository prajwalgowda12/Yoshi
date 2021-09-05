@{%
const mylexer =   require("./lexer");
%}

@lexer mylexer  

program
    -> statements
    {%
    (data) => {
        return{
            type: "program",
            body: data[0]
        };
    }
    %}

statements 
    -> null 
    {%
        () => []
    %}
    | statement
    {%
        (data) => [data[0]]
    %}
    | statement "\r\n" statements
    {%
        (data) => [data[0], ...data[2]]
    %}

statement ->
    assignment          {% id %}
    | function_call     {% id %}

assignment -> %identifier _ %assignmentOp _ literal
   {%
        (data) => {
            return {
                type: "assignment",
                var_name: data[0],
                value: data[4]
            }
        }
    %}
assignment -> %identifier %assignmentOp literal
   {%
        (data) => {
            return {
                type: "assignment",
                var_name: data[0],
                value: data[2]
            }
        }
    %}
assignment -> %identifier %assignmentOp _ literal
   {%
        (data) => {
            return {
                type: "assignment",
                var_name: data[0],
                value: data[3]
            }
        }
    %}
assignment -> %identifier _ %assignmentOp literal
    {%
        (data) => {
            return {
                type: "assignment",
                var_name: data[0],
                value: data[3]
            }
        }
    %}

literal
    -> %number                   {% id %}
    |  %string                   {% id %}
    |  %bool_literal             {% id %}
    

__ -> %ws

_ -> null
    | __


function_call -> %identifier _ "(" _ parameter_list _ ")"
    {%
        (data) => {
            return {
                type: "function_call",
                var_name: data[0],
                parameters: data[4]

            }
        }
    %}

parameter_list 
    -> expression
    {%
        (data) => {
            return [data[0]] 
        }  
    %}   
    | expression "," parameter_list
    {%
        (data) => {
            return [data[0], ...data[2]]
        }
    %}
    | null
    {%
        () => []
    %}

expression
    -> %identifier   {% id %}
    | literal        {% id %}
 
literal
    -> %numbers       {% id %}  
    | %string        {% id %}
    | %bool_literal   {% id %} 

