let helpobj = require("./command/help");
let treeobj = require("./command/tree");
let organizeobj = require("./command/organize");
inputArr = process.argv.slice(2);
if(inputArr[0]== "tree"){
    treeobj.fxn();
    console.log(inputArr[1]);
}
else if(inputArr[0]== "organize"){
    organizeobj.fxn();
    console.log(inputArr[1]);
}
else if(inputArr[0]== "help"){
    helpobj.fxn();
};