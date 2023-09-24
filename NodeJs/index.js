//Core modules:- Consider modules to be the same as jawascript libries.
// A set of functions you want to include in your application
// Node.Js has a set of built in modules which 
//  you can use without ant further installation

const fs = require("fs");
// fs.writeFileSync('read.txt', "Welcome to node js");

// fs.writeFileSync('read.txt', "Welcome to node js again ");

// fs.appendFileSync('read.txt', "How are you");

// fs.readFileSync('read.txt');
const buf_data = fs.readFileSync('read.txt');
// console.log(buf_data);

org_data = buf_data.toString();
console.log(org_data);


fs.renameSync("read.txt", "readwrite.txt");