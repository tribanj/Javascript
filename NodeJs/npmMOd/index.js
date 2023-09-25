
// console.log(chalk.blue("Hello world!"));
var validator = require("validator");
var chalk = require("chalk");

const res = validator.isEmail("tribhuwan@tribhuwan.com");
console.log(
  res ? chalk.green.inverse(res) : chalk.foregroundColorNames.inverse(res)
);
